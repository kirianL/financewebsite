import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const CanopyMark: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <circle cx="12" cy="12" r="10" fill="#3B4E2B" />
    <path
      d="M12 6.5v11M14.7 9.2c0-1.15-1.2-1.95-2.7-1.95-1.5 0-2.6.75-2.6 1.85 0 2.15 5.4 1.35 5.4 3.7 0 1.2-1.15 2-2.8 2-1.6 0-2.75-.75-2.85-1.95"
      stroke="#FFFFFF"
      strokeWidth="1.65"
      strokeLinecap="round"
    />
  </svg>
);

export const HeroDollarBadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="46" height="36" viewBox="0 0 46 36" fill="none" aria-hidden="true" className={className}>
    <circle cx="16" cy="18" r="14" fill="#5D6455" opacity="0.55" />
    <circle cx="28" cy="18" r="14" fill="#32382B" />
    <path
      d="M32.2 13.8c-.85-.95-2.05-1.5-3.55-1.5-2.85 0-4.9 2.45-4.9 5.7s2.05 5.7 4.9 5.7c1.5 0 2.7-.55 3.55-1.5M23 15.8l9.8-2.2M23 21.8l9.8-2.2"
      stroke="#FFFFFF"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path
      d="M8 1.2v13.6M1.2 8h13.6M3.2 3.2l9.6 9.6M12.8 3.2l-9.6 9.6"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

export const SynaisBrandBadge: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="#F5F3EE" />
    <path
      d="M12 6.5v11M6.5 12h11M8.1 8.1l7.8 7.8M15.9 8.1l-7.8 7.8"
      stroke="#050505"
      strokeWidth="1.9"
      strokeLinecap="round"
    />
  </svg>
);

export const ChevronDownIcon: React.FC<IconProps> = ({ size = 12, className }) => (
  <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TrendUpIcon: React.FC<IconProps> = ({ size = 10, className }) => (
  <svg width={size} height={size} viewBox="0 0 12 12" fill="none" aria-hidden="true" className={className}>
    <path d="M6 9.5V2.5M6 2.5L2.75 5.75M6 2.5L9.25 5.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const CheckCircleIcon: React.FC<{ variant: 'light' | 'dark'; className?: string }> = ({
  variant,
  className,
}) => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className={className}>
    <circle
      cx="9"
      cy="9"
      r="8.5"
      fill={variant === 'dark' ? '#F5EFEB' : '#969086'}
    />
    <path
      d="M5.5 9.2l2.2 2.2 4.8-4.8"
      stroke={variant === 'dark' ? '#2D1714' : '#FFFFFF'}
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MenuIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
  </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

export const XIcon: React.FC<IconProps> = ({ size = 17, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const LinkedinIcon: React.FC<IconProps> = ({ size = 17, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

export const GoogleIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
      fill="#EA4335"
    />
  </svg>
);

export const AppleIcon: React.FC<IconProps> = ({ size = 18, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.64 1.35-.57.65-1.07 1.72-.94 2.74 1.01.08 2.04-.49 2.66-1.24z" />
  </svg>
);

/**
 * 16 crisp geometric SVG tiles matching the 9 + 7 Integrations grid in references 02 and 03.
 */
export const IntegrationTileIcon: React.FC<{ index: number }> = ({ index }) => {
  switch (index) {
    case 0: // Pink rounded square with dual loop
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#E84C88" />
          <circle cx="16" cy="20" r="6" fill="#FFFFFF" opacity="0.95" />
          <circle cx="24" cy="20" r="6" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        </svg>
      );
    case 1: // Blue circle with wavy lines
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#1D70D6" />
          <circle cx="20" cy="20" r="11" fill="#3B8CEE" />
          <path d="M12 17c3-2 5 2 8 0s5 2 8 0M12 21c3-2 5 2 8 0s5 2 8 0M12 25c3-2 5 2 8 0s5 2 8 0" stroke="#FFFFFF" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 2: // Warm orange isometric cube
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#EA580C" />
          <path d="M20 9l9 5.2v10.6L20 30l-9-5.2V14.2L20 9z" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <path d="M20 9v21M11 14.2l9 5.2 9-5.2" stroke="#FFFFFF" strokeWidth="1.8" fill="none" />
        </svg>
      );
    case 3: // Charcoal angular switch
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#1F201E" />
          <circle cx="15" cy="15" r="4" fill="#FFFFFF" />
          <circle cx="25" cy="25" r="4" fill="#FFFFFF" />
          <path d="M19 15h6v10" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 4: // Indigo overlapping cards
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#635BFF" />
          <rect x="11" y="14" width="12" height="14" rx="2.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <rect x="17" y="11" width="12" height="14" rx="2.5" stroke="#FFFFFF" strokeWidth="2" fill="#635BFF" />
        </svg>
      );
    case 5: // Sky blue striped globe
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#0EA5E9" />
          <circle cx="20" cy="20" r="10" fill="#FFFFFF" opacity="0.22" />
          <path d="M12 15h16M10.5 20h19M12 25h16" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 6: // Emerald green plus
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#22C55E" />
          <path d="M20 11v18M11 20h18" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
        </svg>
      );
    case 7: // Royal blue overlapping circles
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#3B82F6" />
          <circle cx="17" cy="20" r="6.5" fill="#FFFFFF" opacity="0.95" />
          <circle cx="24.5" cy="20" r="5" fill="#93C5FD" />
        </svg>
      );
    case 8: // Dark arrow NE
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#171916" />
          <path d="M14 26L26 14M26 14H16M26 14v10" stroke="#FFFFFF" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 9: // Cobalt sync circle
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#2563EB" />
          <path d="M27 20a7 7 0 11-2.05-4.95" stroke="#FFFFFF" strokeWidth="3.2" strokeLinecap="round" fill="none" />
          <circle cx="26" cy="14" r="2.2" fill="#FFFFFF" />
        </svg>
      );
    case 10: // Forest green diagonal slash bars
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#15803D" />
          <path d="M13 25l5-10M19 25l5-10M25 25l3-6" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
        </svg>
      );
    case 11: // Violet layered waves
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#4F46E5" />
          <path d="M11 16c4-2 8 2 18 0M11 21c4-2 8 2 18 0M11 26c4-2 8 2 18 0" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 12: // Obsidian hexagonal nut
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#18181B" />
          <path d="M20 10l8.7 5v10L20 30l-8.7-5V15L20 10z" stroke="#FFFFFF" strokeWidth="2.6" fill="none" />
          <circle cx="20" cy="20" r="3.5" fill="#FFFFFF" />
        </svg>
      );
    case 13: // Azure crescent swirl
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#1D4ED8" />
          <path d="M25.5 14.5a7.5 7.5 0 100 11" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <circle cx="23" cy="20" r="2.5" fill="#93C5FD" />
        </svg>
      );
    case 14: // Tangerine folded ribbon
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#F97316" />
          <path d="M14 12h9l4 6-4 6h-5l4 4h-8V12z" fill="#FFFFFF" />
        </svg>
      );
    default: // Purple kaleidoscopic ring
      return (
        <svg viewBox="0 0 40 40" className="w-10 h-10" aria-hidden="true">
          <rect width="40" height="40" rx="9" fill="#7C3AED" />
          <circle cx="20" cy="20" r="8" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <path d="M20 12l7 12H13l7-12z" stroke="#FFFFFF" strokeWidth="1.6" fill="none" />
        </svg>
      );
  }
};
