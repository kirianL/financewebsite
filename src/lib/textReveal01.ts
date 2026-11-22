import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(SplitText, ScrollTrigger);

export interface TextReveal01Options {
  ignoreManual?: boolean;
}

const CONFIG = {
  lines: { duration: 0.72, stagger: 0.05, ease: 'expo.out' },
  words: { duration: 0.72, stagger: 0.025, ease: 'expo.out' },
  chars: { duration: 0.5, stagger: 0.01, ease: 'expo.out' },
  scrollStart: 'top 95%',
  scrubStart: 'top 80%',
  scrubEnd: 'top 20%',
  once: true,
  markers: false,
} as const;

type SplitKey = 'lines' | 'words' | 'chars';

export function textReveal01(
  scope: Document | Element = document,
  delay = 0,
  { ignoreManual = false }: TextReveal01Options = {},
): () => void {
  const allSplitEls = [...scope.querySelectorAll<HTMLElement>('[data-reveal-01]')].filter(
    (el) => !el.dataset.reveal01Init,
  );
  if (allSplitEls.length === 0) return () => {};

  const reducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isAutomatedCapture =
    typeof navigator !== 'undefined' && Boolean(navigator.webdriver);

  const autoEls = ignoreManual
    ? allSplitEls
    : allSplitEls.filter((el) => !el.hasAttribute('data-manual'));

  gsap.set(autoEls, { visibility: 'visible' });

  if (reducedMotion || isAutomatedCapture) {
    allSplitEls.forEach((el) => {
      el.dataset.reveal01Init = 'true';
    });
    return () => {};
  }

  const splits: SplitText[] = [];

  allSplitEls.forEach((el) => {
    const splitType = el.getAttribute('data-reveal-01') as SplitKey | null;
    if (!splitType || !(splitType in CONFIG)) return;
    const c = CONFIG[splitType];

    el.dataset.reveal01Init = 'true';

    let type: string;
    let mask: 'lines' | 'words' | 'chars';
    let linesClass: string | undefined;
    let wordsClass: string | undefined;
    let charsClass: string | undefined;

    switch (splitType) {
      case 'lines':
        type = 'lines';
        mask = 'lines';
        linesClass = 'line';
        break;
      case 'words':
        type = 'words, lines';
        mask = 'words';
        wordsClass = 'word';
        linesClass = 'line';
        break;
      case 'chars':
        type = 'chars, words, lines';
        mask = 'chars';
        charsClass = 'char';
        wordsClass = 'word';
        linesClass = 'line';
        break;
    }

    if (!ignoreManual && el.hasAttribute('data-manual')) {
      splits.push(
        SplitText.create(el, {
          type,
          mask,
          autoSplit: true,
          ...(linesClass && { linesClass }),
          ...(wordsClass && { wordsClass }),
          ...(charsClass && { charsClass }),
        }),
      );
      return;
    }

    const scrollMode = el.getAttribute('data-scroll');
    const useScroll = el.hasAttribute('data-scroll');
    const useScrub = scrollMode === 'scrub';

    splits.push(
      SplitText.create(el, {
        type,
        mask,
        autoSplit: true,
        ...(linesClass && { linesClass }),
        ...(wordsClass && { wordsClass }),
        ...(charsClass && { charsClass }),
        onSplit(instance) {
          const durationValue = parseFloat(el.dataset.duration ?? '');
          const staggerValue = parseFloat(el.dataset.stagger ?? '');
          const delayValue = parseFloat(el.dataset.delay ?? '');
          const duration = Number.isNaN(durationValue) ? c.duration : durationValue;
          const stagger = Number.isNaN(staggerValue) ? c.stagger : staggerValue;
          const elDelay = Number.isNaN(delayValue) ? 0 : delayValue;
          const ease = el.dataset.ease || c.ease;

          const targets = instance[splitType];
          const once = el.hasAttribute('data-once')
            ? el.getAttribute('data-once') !== 'false'
            : CONFIG.once;

          const tween: gsap.TweenVars = {
            yPercent: 110,
            duration,
            stagger,
            delay: useScroll ? elDelay : elDelay + delay,
            immediateRender: true,
            ease,
          };

          if (useScrub) {
            tween.scrollTrigger = {
              trigger: el,
              start: CONFIG.scrubStart,
              end: CONFIG.scrubEnd,
              scrub: true,
              markers: CONFIG.markers,
              ...(once && { onLeave: (self) => self.kill(false) }),
            };
          } else if (useScroll) {
            const alreadyInView =
              el.getBoundingClientRect().top <= (window.innerHeight || 900) * 0.95;
            if (!alreadyInView) {
              const start = scrollMode || CONFIG.scrollStart;
              tween.scrollTrigger = {
                trigger: el,
                start: `clamp(${start})`,
                markers: CONFIG.markers,
                ...(once ? { once: true } : { toggleActions: 'play none none reverse' }),
              };
            }
          }

          return gsap.from(targets, tween);
        },
      }),
    );
  });

  ScrollTrigger.refresh();

  return () => {
    splits.forEach((s) => s.revert());
    allSplitEls.forEach((el) => {
      delete el.dataset.reveal01Init;
    });
  };
}
