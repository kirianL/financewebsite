import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

export const CanopyMark: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" fill="currentColor" />
    <path
      d="M12 6.5v11M6.5 12h11M8.1 8.1l7.8 7.8M15.9 8.1l-7.8 7.8"
      stroke="#F5F3EE"
      strokeWidth="1.9"
      strokeLinecap="round"
      className="brand-mark__sparkle"
    />
  </svg>
);

export const HeroDollarBadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" aria-hidden="true" className={className}>
    {/* Back stacked coin offset down-left in solid warm dark olive */}
    <circle cx="19.5" cy="28.5" r="17" fill="#454333" />
    {/* Knockout separator ring in pill background color */}
    <circle cx="26.5" cy="21.5" r="20.2" fill="var(--pill-bg, #E2DEC9)" />
    {/* Front coin in solid warm dark olive */}
    <circle cx="26.5" cy="21.5" r="17" fill="#454333" />
    {/* Bold geometric Costa Rican Colón (₡) knocked out in pill background color */}
    <path
      d="M32.3 17.0C31.1 15.4 29.0 14.5 26.6 14.5C22.4 14.5 19.4 17.5 19.4 21.5C19.4 25.5 22.4 28.5 26.6 28.5C29.0 28.5 31.1 27.6 32.3 26.0"
      stroke="var(--pill-bg, #E2DEC9)"
      strokeWidth="3.4"
      strokeLinecap="round"
    />
    <path
      d="M25.6 11.6L22.8 31.4M29.8 11.6L27.0 31.4"
      stroke="var(--pill-bg, #E2DEC9)"
      strokeWidth="2.2"
      strokeLinecap="round"
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

export interface CostaRicaBankMeta {
  id: number;
  shortName: string;
  fullName: string;
}

export const COSTA_RICA_BANKS: CostaRicaBankMeta[] = [
  { id: 0, shortName: 'BAC', fullName: 'BAC Credomatic' },
  { id: 1, shortName: 'BN', fullName: 'Banco Nacional (BNCR)' },
  { id: 2, shortName: 'BCR', fullName: 'Banco de Costa Rica (BCR)' },
  { id: 3, shortName: 'BP', fullName: 'Banco Popular' },
  { id: 4, shortName: 'BCCR', fullName: 'Banco Central de Costa Rica' },
  { id: 5, shortName: 'Scotiabank', fullName: 'Scotiabank Costa Rica' },
  { id: 6, shortName: 'Promerica', fullName: 'Banco Promerica' },
  { id: 7, shortName: 'Davivienda', fullName: 'Banco Davivienda' },
  { id: 8, shortName: 'LAFISE', fullName: 'Banco LAFISE' },
  { id: 9, shortName: 'Coopenae', fullName: 'Coopenae' },
  { id: 10, shortName: 'BCT', fullName: 'Banco BCT' },
  { id: 11, shortName: 'Grupo Mutual', fullName: 'Grupo Mutual Alajuela' },
  { id: 12, shortName: 'Coocique', fullName: 'Coocique' },
  { id: 13, shortName: 'Cathay', fullName: 'Banco Cathay de Costa Rica' },
  { id: 14, shortName: 'Caja de ANDE', fullName: 'Caja de ANDE' },
  { id: 15, shortName: 'Wink', fullName: 'Wink' },
];

/**
 * 16 official vector SVG logos of Costa Rica's banks & financial institutions
 * framed inside the 44x44px (rx="10") rounded-square tile badges.
 */
export const IntegrationTileIcon: React.FC<{ index: number }> = ({ index }) => {
  switch (index) {
    case 0: // BAC Credomatic — Official geometric 5-facet lion emblem, centered (x: 9.2..34.8, y: 9.5..34.5)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#C8102F" />
          <g transform="translate(8.8, 9.5) scale(0.035)" fill="#FFFFFF">
            <path d="M 455.75,0.13 0,122.93 v 206 L 455.76,132.68 Z" />
            <path d="M 489.70,104.19 489.69,488.13 682.73,488.12 752.81,314.81 Z" />
            <path d="M 455.01,150.19 0,366.76 V 594.79 L 455.65,316.49 Z" />
            <path d="M 455.77,357.01 0,635.48 v 48.31 l 281.75,-0.33 174.03,-167.46 z" />
            <path d="M 630.89,543.35 477.83,543.41 331.72,683.83 630.88,683.77 Z" />
          </g>
        </svg>
      );

    case 1: // Banco Nacional (BN) — Official bncr.fi.cr SVG logo, centered with 5.5px lateral padding
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          <g transform="translate(5.0, 14.8) scale(0.16)">
            <path
              d="M112.135 73.4961C117.823 73.4961 121.112 71.3674 121.112 67.5358V67.3655C121.112 63.8744 118.179 61.5754 111.957 61.5754H97.6457V73.4961H112.135ZM109.379 49.0588C115.068 49.0588 118.268 47.1855 118.268 43.439V43.2687C118.268 39.7777 115.335 37.7341 109.735 37.7341H97.5568V49.1439H109.379V49.0588ZM79.3346 23.1739H114.001C122.535 23.1739 128.49 25.2174 132.49 28.9639C135.157 31.5184 136.846 35.0094 136.846 39.4371V39.6074C136.846 47.1004 132.401 51.528 126.446 54.0825C134.623 56.6369 139.868 61.1497 139.868 69.9199V70.0902C139.868 81.1594 130.446 87.9712 114.268 87.9712H79.4235V23.1739H79.3346Z"
              fill="#133D8D"
            />
            <path
              d="M144.593 23.1564H162.104L189.926 57.3857V23.1564H208.504V87.9537H192.059L163.17 52.4471V87.9537H144.593V23.1564Z"
              fill="#133D8D"
            />
            <path
              d="M3.07126 87.9319L32.2268 10.0219L63.3379 1.33682L48.6713 87.9319H30.7157L49.5602 13.8535L37.2046 17.2594L13.9157 87.9319H3.07126Z"
              fill="#B0BC22"
            />
            <path
              d="M65.0575 21.5616L57.1463 87.8915H71.013L71.813 32.1199L65.0575 21.5616Z"
              fill="#B0BC22"
            />
          </g>
        </svg>
      );

    case 2: // Banco de Costa Rica (BCR) — Official red parallelogram + pure vector italic navy BCR (x: 5.5..38.5)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          {/* Tilted red parallelogram (x: 5.2..14.6) */}
          <polygon points="6.6,16.2 14.8,16.2 13.4,27.8 5.2,27.8" fill="#FF0800" />
          {/* Pure vector italic B (x: 16.0..23.2) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.2 16.2h4.2c1.8 0 2.7.8 2.5 2.2-.1 1-.7 1.7-1.6 2 .9.3 1.4 1.1 1.2 2.3-.3 1.7-1.5 2.6-3.5 2.6h-4.2l1.4-9.1zm2.1 3.6h1.5c.6 0 1-.3 1.1-.8.1-.5-.2-.8-.8-.8h-1.5l-.3 1.6zm-.6 3.5h1.6c.7 0 1.1-.3 1.2-.9.1-.6-.3-.9-1-.9h-1.5l-.3 1.8z"
            fill="#00338D"
          />
          {/* Pure vector italic C (x: 24.0..31.0) */}
          <path
            d="M31.0 19.2c-.3-.7-.9-1.1-1.7-1.1-1.4 0-2.4 1.2-2.7 2.8-.2 1.5.5 2.5 1.9 2.5.8 0 1.5-.3 2.1-.9l-.3 2.3c-.7.4-1.5.7-2.4.7-2.6 0-4.1-1.7-3.7-4.5.4-2.8 2.5-5 5.2-5 .9 0 1.7.2 2.2.6l-.6 2.6z"
            fill="#00338D"
          />
          {/* Pure vector italic R (x: 31.4..38.8) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.6 16.2h3.9c2 0 3 .9 2.7 2.6-.2 1.2-.9 2.1-2.1 2.4l1.7 4.1h-2.5l-1.4-3.8h-.7l-.6 3.8h-2.3l1.3-9.1zm2.1 3.8h1.2c.7 0 1.2-.4 1.3-1 .1-.6-.3-1-.9-1h-1.2l-.4 2z"
            fill="#00338D"
          />
        </svg>
      );

    case 3: // Banco Popular (BP) — Official bancopopular.fi.cr SVG logo, centered (x: 6.5..37.5)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#F37021" />
          <g transform="translate(6.6, 6.6) scale(0.96)" fill="#FFFFFF">
            <path d="M31.67,10c-.52-.76-1.67-1.2-3.46-1.2H20l-.18.42a2,2,0,0,1,.33.39,2.88,2.88,0,0,1,0,3.09,6.32,6.32,0,0,1-2.12,2.39,6.16,6.16,0,0,1-1,.57A2.23,2.23,0,0,1,18,16.67a3.32,3.32,0,0,1-.32,2.7A6.91,6.91,0,0,1,16,21.54,8.68,8.68,0,0,1,13.58,23a1.4,1.4,0,0,1-.54.15H18L20.56,18h2.7a9.66,9.66,0,0,0,5-1.28,8,8,0,0,0,3.11-3.45c.69-1.41.77-2.55.26-3.32M26.55,13.4a2.82,2.82,0,0,1-1.14,1.24,4.47,4.47,0,0,1-2.22.55H22l1.56-3.35H25c.92,0,1.47.13,1.65.45a1.11,1.11,0,0,1-.05,1.11" />
            <path d="M21.77,18.27c1.85,3.34,2.36,6.3,1,7.7-1.67,1.77-5.79.56-10.18-2.68-.46.07-1.11.16-1.91.23,5.47,4.5,11,6.3,13.1,4,1.63-1.73.89-5.42-1.52-9.27Z" />
            <path d="M13.39,22.56a8.26,8.26,0,0,0,2.26-1.41,6.43,6.43,0,0,0,1.56-2,2.79,2.79,0,0,0,.3-2.27,2.5,2.5,0,0,0-1.91-1.28,7.38,7.38,0,0,0,2.19-1,5.83,5.83,0,0,0,1.95-2.18,2.48,2.48,0,0,0,0-2.61c-.49-.68-1.5-1.08-3-1.08H7.46L5,14v0l-.42.87C1.67,10.65.61,6.71,2.2,5,4,3.14,8.47,4.65,13.14,8.25h.4C8.21,3.88,3,2,.89,4.25c-1.95,2.07-.59,6.92,3,12l-.71,1.46v0L.46,23.15H9a8.33,8.33,0,0,0,.95,0s0,0,0,0c.86-.07,1.83-.22,2.38-.32a5.94,5.94,0,0,0,1.06-.29M11,11.84H13.2c.75,0,1.21.09,1.4.32s.18.55,0,1a2.54,2.54,0,0,1-1,1.11,3.56,3.56,0,0,1-1.78.43H9.69Zm.43,7.86a4.11,4.11,0,0,1-2,.37H6.94L8.36,17.5h2.51c.86,0,1.4,0,1.62.25s.23.51,0,.94a2.36,2.36,0,0,1-1.06,1" />
          </g>
        </svg>
      );

    case 4: // Banco Central de Costa Rica (BCCR) — Official interlocked B-C-C-R monogram crest, optically centered
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#0C3E65" />
          <g transform="translate(53.4, -4.4) scale(0.185)" fill="#FFFFFF">
            <g transform="scale(1.0231793,0.97734579)">
              <path d="M -209.11,136.29 V 64.46 h 26.95 q 8.23,0 13.18,2.2 5,2.16 7.79,6.71 2.84,4.51 2.84,9.46 0,4.61 -2.5,8.67 -2.5,4.07 -7.54,6.57 6.52,1.91 9.99,6.52 3.53,4.61 3.53,10.88 0,5.05 -2.16,9.41 -2.11,4.31 -5.24,6.66 -3.14,2.35 -7.89,3.58 -4.7,1.18 -11.56,1.18 z m 9.5,-41.64 h 15.53 q 6.32,0 9.06,-0.83 3.63,-1.08 5.44,-3.58 1.86,-2.5 1.86,-6.27 0,-3.58 -1.71,-6.27 -1.71,-2.74 -4.9,-3.72 -3.18,-1.03 -10.93,-1.03 h -14.36 z m 0,33.17 h 17.88 q 4.61,0 6.47,-0.34 3.28,-0.59 5.49,-1.96 2.2,-1.37 3.63,-3.97 1.42,-2.65 1.42,-6.08 0,-4.02 -2.06,-6.96 -2.06,-2.99 -5.73,-4.16 -3.63,-1.22 -10.48,-1.22 h -16.61 z" />
            </g>
            <g transform="matrix(1.9261443,0,0,1.8398623,-22.766879,-120.07441)">
              <path d="m -65.46,140.28 21.38,0.34 c 3.2,0.05 3.77,0.74 5.48,2.37 1.74,1.6 2.39,4.26 2.39,7.35 0,2.84 -0.1,4.98 -1.94,7.04 -1.81,2.03 -3.24,3.58 -2.67,2.57 1.71,0.39 2.55,1.25 3.3,2.45 0.78,1.21 0.92,3.29 0.92,5.1 0,0.85 0.03,0.03 -0.01,4.27 v 4.34 c 0,1.84 1.57,2.33 1.82,2.68 h -6.16 c 0,0 0.11,-2.02 0,-2.98 v -6.86 c 0,-1.9 -0.19,-2.74 -1.83,-4.82 -0.82,-1.1 -3.13,-1.73 -4.97,-1.73 l -12.94,-0.01 v 16.39 h -4.76 z m 4.76,17.64 11.25,-0.02 c 2.91,-0.01 4.62,0.01 6.47,-1.37 1.55,-2.05 1.64,-2.79 1.64,-5.53 0,-2.27 0.24,-3.55 -0.79,-4.62 -0.99,-1.1 -1.82,-1.65 -4.13,-1.65 l -14.43,-0.03 z" />
            </g>
            <path d="m -124.32,136.86 c 15.49,0 28.86,-9.46 34.65,-22.82 h -9.46 c -5.09,8.63 -14.43,14.43 -25.19,14.43 -16.2,0 -29.33,-13.13 -29.33,-29.33 0,-16.2 13.13,-29.33 29.33,-29.33 9.46,0 17.74,4.38 23.18,11.23 h 9.93 c -6.39,-11.71 -18.8,-19.63 -33.11,-19.63 -20.81,0 -37.72,16.91 -37.72,37.72 0,20.81 16.91,37.72 37.72,37.72 z" />
            <path d="m -184.29,210 c 15.49,0 28.86,-9.46 34.65,-22.82 h -9.46 c -5.09,8.63 -14.43,14.43 -25.19,14.43 -16.2,0 -29.33,-13.13 -29.33,-29.33 0,-16.2 13.13,-29.33 29.33,-29.33 9.46,0 17.74,4.38 23.18,11.23 h 9.93 c -6.39,-11.71 -18.8,-19.63 -33.11,-19.63 -20.81,0 -37.72,16.91 -37.72,37.72 0,20.81 16.91,37.72 37.72,37.72 z" />
          </g>
        </svg>
      );

    case 5: // Scotiabank Costa Rica — Official Flying-S Globe Emblem, centered (x: 7..37, y: 7..37)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#EE3224" />
          <g transform="translate(3.0, 0.2) scale(0.75)">
            <path
              fill="#FFFFFF"
              d="M37.048,29.075c0.134,6.593-5.825,11.571-10.805,11.571h-12.31L6.21,48.34h19.899c6.353,0,12.447-5.715,12.447-12.538c0-2.004-0.242-4.614-1.507-6.593V29.075 M34.936,33.932c0.768-1.372,1.145-2.88,1.238-4.347h-5.585c0,1.36-0.227,2.84-0.738,4.347H34.936z M29.487,34.794c-0.634,1.613-2.14,3.711-3.605,4.856c2.837,0,6.08-1.238,8.45-4.856H29.487z M28.853,33.932c0.499-1.372,0.727-2.88,0.862-4.347h-8.45c0.135,1.467,0.363,2.975,0.861,4.347H28.853z M21.159,33.932c-0.498-1.507-0.768-2.986-0.768-4.347h-5.583c0.134,1.467,0.498,2.975,1.236,4.347H21.159z M25.504,38.776c1.103-0.997,2.341-2.61,2.973-3.982h-5.974C23.137,36.166,24.374,37.779,25.504,38.776z M16.543,34.794c2.475,3.618,5.717,4.856,8.598,4.856c-1.509-1.146-3.108-3.243-3.621-4.856H16.543z M29.851,24.365c0.511,1.332,0.738,2.839,0.738,4.345h5.585c-0.093-1.506-0.471-3.013-1.238-4.345H29.851z M34.332,23.355c-2.37-3.471-5.612-4.843-8.45-4.843c1.465,1.104,2.971,3.203,3.605,4.843H34.332z M22.126,24.365c-0.498,1.332-0.726,2.839-0.861,4.345h8.45c-0.135-1.506-0.364-3.013-0.862-4.345H22.126z M16.045,24.365c-0.738,1.332-1.103,2.839-1.236,4.345h5.583c0-1.506,0.27-3.013,0.768-4.345H16.045z M25.504,19.48c-1.13,0.997-2.367,2.503-3,3.875h5.974C27.845,21.983,26.607,20.477,25.504,19.48z M21.521,23.355c0.513-1.641,2.112-3.74,3.621-4.843c-2.881,0-6.124,1.372-8.598,4.843H21.521z M13.933,28.939c-1.237-1.964-1.508-4.574-1.508-6.579c0-6.823,6.096-12.58,12.445-12.58h19.902l-7.724,7.789H24.737C19.787,17.569,13.797,22.589,13.933,28.939z"
            />
          </g>
        </svg>
      );

    case 6: // Banco Promerica — Official two-tone green star/wing logo, centered at (22, 22)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#01703A" />
          <g transform="translate(-39.5, -18.2) scale(4.55)">
            <path
              fill="#FFFFFF"
              d="M11.1,11.29c0,0,0.76-2.03,0.81-2.29l-1.13-0.76c0,0,1.31-0.46,1.92-0.61l1.05-1.42l0.44,1.1C14.18,7.31,11.39,10.8,11.1,11.29z"
            />
            <polygon fill="#FFFFFF" points="13.13,9.81 14.64,8.73 15.28,11.15" />
            <path
              fill="#8CE046"
              d="M16.39,7.4c0,0-3.95,2.32-4.62,3.22c0,0,2-2.56,2.64-3.19L16.39,7.4z"
            />
          </g>
        </svg>
      );

    case 7: // Banco Davivienda — Official scarlet badge with iconic Davivienda curved arch D-A
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#ED1C24" />
          <path
            d="M8.5 16.2c4.2-0.8 11.2-0.4 11.2 6.0 0 6.4-7.2 6.6-10.7 6.0V20.2"
            stroke="#FFFFFF"
            strokeWidth="3.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M23.5 28.2l5.0-11.0c0.7-1.4 2.0-1.4 2.7 0l5.0 11.0"
            stroke="#FFFFFF"
            strokeWidth="3.0"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );

    case 8: // Banco LAFISE — Official lafise.com stepped square globe emblem, dead-center (x: 8.5..35.5, y: 8.5..35.5)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#006837" />
          <g transform="translate(-11.4, -16.4) scale(0.435)">
            <path d="M92.29 117.08L91.91 116.68H48.32V57.05H46V119H107.95V116.68H91.91Z" fill="#FFFFFF" />
            <path d="M91.84 114.16H107.93V111.84H91.89Z" fill="#F59E0B" />
            <path d="M88.67 114.16V111.82H53.13V68.26L50.8 69.69V114.16H88.67Z" fill="#FFFFFF" />
            <path d="M87.8 109.36L87.87 107.04H57.95V67.7L55.59 66.94L55.57 109.36H87.8Z" fill="#FFFFFF" />
            <path d="M107.93 107.03H93.97L92.71 109.36H107.93V107.03Z" fill="#F59E0B" />
            <path d="M107.93 102.23H98.27L97.7 104.56H107.93V102.23Z" fill="#F59E0B" />
            <path d="M87.54 104.55L87.59 102.21H62.73V80.09L60.46 71.44L60.44 104.52H87.54Z" fill="#FFFFFF" />
            <path d="M65.21 84.18V99.75H87.37L84.26 97.41H67.57V84.39L65.21 81.77V84.18Z" fill="#FFFFFF" />
            <path d="M72.35 94.94H82.39L81.59 92.61H72.35V86.65L70.01 85.28V94.94H72.35Z" fill="#FFFFFF" />
            <path d="M107.95 87.81H89.92L95.31 90.13H107.95V87.81Z" fill="#F59E0B" />
            <path d="M107.93 85.34V82.98H81.97V70.64L79.6 71.47V85.33L107.93 85.34Z" fill="#F59E0B" />
            <path d="M86.78 78.19V57.05H84.45V80.51H107.93V78.19H86.78Z" fill="#F59E0B" />
            <path d="M107.93 75.71V73.39H91.58V57.05H89.26V75.67L107.93 75.71Z" fill="#F59E0B" />
            <path d="M107.93 70.91V68.57H96.38V57.05H94.02V70.87L107.93 70.91Z" fill="#F59E0B" />
            <path d="M107.93 66.1V63.76H101.2V57.05H98.83V66.09L107.93 66.1Z" fill="#F59E0B" />
          </g>
        </svg>
      );

    case 9: // Coopenae — Official golden D-arch badge with white & royal blue twin pine trees
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          <g transform="translate(1.5, 1.5) scale(0.93)">
            <path
              d="M22 6C13.16 6 6 13.16 6 22c0 8.84 7.16 16 16 16h16V22C38 13.16 30.84 6 22 6z"
              fill="#FFB300"
            />
            <rect x="7" y="31.2" width="31" height="2.4" fill="#FFFFFF" />
            <polygon
              points="17.5,14.5 11.8,28.5 23.2,28.5"
              fill="#FFB300"
              stroke="#FFFFFF"
              strokeWidth="2.1"
            />
            <rect x="16.4" y="28.5" width="2.2" height="3" fill="#FFFFFF" />
            <polygon
              points="25.2,11.5 18.2,28.5 32.2,28.5"
              fill="#0066E6"
              stroke="#FFFFFF"
              strokeWidth="2.2"
            />
            <rect x="24.1" y="28.5" width="2.2" height="3" fill="#FFFFFF" />
          </g>
        </svg>
      );

    case 10: // Banco BCT — Official 9-stripe green globe + pure vector italic navy BCT (x: 5.2..38.8)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          {/* Official BCT striped green sphere (x: 5.0..17.2) */}
          <g fill="#519E2F">
            <path d="M7.0 15.6c2.9-1.6 6.2-2.0 8.4-1.5-2.3.4-5.5 1.1-8.4 1.5z" />
            <path d="M5.8 18.0c3.7-1.9 7.8-2.4 10.8-1.6v1.2c-3.2-.3-7.3.2-10.8.4z" />
            <path d="M5.2 20.5c4.1-1.8 8.9-2.3 12.0-1.5v1.4c-3.5-.3-8.0.1-12.0.1z" />
            <path d="M5.0 23.0c4.2-1.7 9.1-2.1 12.3-1.3v1.4c-3.5-.2-8.2.1-12.3-.1z" />
            <path d="M5.5 25.4c4.0-1.6 8.7-2.0 11.7-1.2v1.3c-3.2-.2-7.7.1-11.7-.1z" />
            <path d="M6.4 27.8c3.6-1.5 7.7-1.8 10.2-1.0v1.2c-2.8-.2-6.7 0-10.2-.2z" />
            <path d="M8.0 30.0c2.8-1.2 6.0-1.5 7.8-.8v1.0c-2.1-.1-5.0 0-7.8-.2z" />
          </g>
          {/* Pure vector italic B (x: 18.5..25.0) */}
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.6 17.0h3.8c1.6 0 2.5.7 2.3 2.0-.1.9-.6 1.5-1.4 1.8.8.3 1.2 1.0 1.0 2.1-.2 1.5-1.3 2.3-3.1 2.3h-3.8l1.2-8.2zm1.9 3.2h1.3c.6 0 .9-.3 1.0-.7.1-.5-.2-.7-.7-.7h-1.3l-.3 1.4zm-.5 3.2h1.4c.6 0 1.0-.3 1.1-.8.1-.5-.2-.8-.9-.8h-1.3l-.3 1.6z"
            fill="#00447C"
          />
          {/* Pure vector italic C (x: 25.8..32.2) */}
          <path
            d="M32.1 19.7c-.3-.6-.8-1.0-1.5-1.0-1.3 0-2.2 1.1-2.4 2.5-.2 1.4.4 2.3 1.7 2.3.7 0 1.4-.3 1.9-.8l-.3 2.0c-.6.4-1.4.6-2.2.6-2.3 0-3.7-1.5-3.3-4.0.4-2.5 2.3-4.5 4.7-4.5.8 0 1.5.2 2.0.5l-.6 2.4z"
            fill="#00447C"
          />
          {/* Pure vector italic T (x: 32.6..38.8) */}
          <path
            d="M33.2 17.0h5.8l-.3 1.9h-1.9l-1.0 6.3h-2.1l1.0-6.3h-1.8l.3-1.9z"
            fill="#00447C"
          />
        </svg>
      );

    case 11: // Grupo Mutual Alajuela — Official grupomutual.fi.cr red chevron & capsule SVG, centered
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          <g transform="translate(6.2, 11.0) scale(0.63)">
            <path
              d="M6.19013 31.4599C5.10446 31.4604 4.03792 31.1667 3.09845 30.6086C1.67526 29.7631 0.637063 28.3733 0.211534 26.7438C-0.213996 25.1144 0.00786967 23.3783 0.828477 21.9164L7.90031 9.17675C8.72909 7.72721 10.0832 6.6727 11.6672 6.24329C13.2512 5.81389 14.9365 6.04444 16.3553 6.88466C17.7742 7.72488 18.8115 9.10655 19.2408 10.7282C19.6702 12.3499 19.4568 14.0799 18.6472 15.5408L11.5733 28.2794C11.0274 29.2477 10.2425 30.0515 9.29745 30.6098C8.35243 31.1681 7.28071 31.4613 6.19013 31.4599Z"
              fill="#E62C3A"
            />
            <path
              d="M43.9518 31.4568C43.4061 31.4564 42.8627 31.3837 42.3355 31.2404C41.552 31.0307 40.8173 30.6657 40.1738 30.1664C39.5304 29.6671 38.991 29.0435 38.5869 28.3316L33.3874 19.2034C33.3539 19.1444 33.3057 19.0955 33.2476 19.0615C33.1895 19.0274 33.1235 19.0095 33.0564 19.0095C32.9893 19.0095 32.9234 19.0274 32.8653 19.0615C32.8071 19.0955 32.7589 19.1444 32.7254 19.2034L27.5259 28.3316C26.696 29.744 25.3508 30.7685 23.7814 31.1834C22.2119 31.5984 20.5444 31.3703 19.1395 30.5487C17.7347 29.7271 16.7054 28.3779 16.2745 26.793C15.8436 25.2082 16.0456 23.5151 16.8369 22.0801L27.5351 3.28724C28.0781 2.33557 28.859 1.54577 29.799 0.997463C30.7391 0.449151 31.8052 0.161698 32.8899 0.16408H33.0523H33.2148C34.2995 0.161487 35.3656 0.448849 36.3058 0.997182C37.2459 1.54551 38.0267 2.33543 38.5695 3.28724L49.2759 22.0801C49.8172 23.0292 50.1027 24.1059 50.1038 25.2021C50.1049 26.2983 49.8215 27.3756 49.2822 28.3258C48.7428 29.276 47.9664 30.0658 47.0308 30.6159C46.0953 31.166 45.0334 31.457 43.9518 31.4599V31.4568Z"
              fill="#E62C3A"
            />
          </g>
        </svg>
      );

    case 12: // Coocique — Official 12-facet 3D blue hexagonal gem logo (x: 8..36, y: 9..35)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          <polygon points="15,9 29,9 25.5,15.5 18.5,15.5" fill="#A6C8E4" />
          <polygon points="29,9 36,22 29,22 25.5,15.5" fill="#468BC2" />
          <polygon points="36,22 29,35 25.5,28.5 29,22" fill="#1567A7" />
          <polygon points="29,35 15,35 18.5,28.5 25.5,28.5" fill="#135080" />
          <polygon points="15,35 8,22 15,22 18.5,28.5" fill="#1567A7" />
          <polygon points="8,22 15,9 18.5,15.5 15,22" fill="#468BC2" />
          <polygon points="18.5,15.5 25.5,15.5 22,22" fill="#135080" />
          <polygon points="25.5,15.5 29,22 22,22" fill="#1567A7" />
          <polygon points="29,22 25.5,28.5 22,22" fill="#468BC2" />
          <polygon points="25.5,28.5 18.5,28.5 22,22" fill="#A6C8E4" />
          <polygon points="18.5,28.5 15,22 22,22" fill="#468BC2" />
          <polygon points="15,22 18.5,15.5 22,22" fill="#1567A7" />
        </svg>
      );

    case 13: // Banco Cathay de Costa Rica — Official golden coin/gear emblem (cx: 22, cy: 22)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#141821" />
          <circle cx="22" cy="22" r="14" fill="#C5B052" />
          <circle cx="22" cy="22" r="11.2" stroke="#FFFFFF" strokeWidth="1.5" fill="#C5B052" />
          <path
            d="M19.5 13.5h5v2.4l2.1-1.2 2.5 4.3-2.1 1.2v3.6l2.1 1.2-2.5 4.3-2.1-1.2v2.4h-5v-2.4l-2.1 1.2-2.5-4.3 2.1-1.2v-3.6l-2.1-1.2 2.5-4.3 2.1 1.2v-2.4z"
            stroke="#FFFFFF"
            strokeWidth="1.35"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M19 19c1.8.4 4.2.4 6 0-.4 1.8-.4 4.2 0 6-1.8-.4-4.2-.4-6 0 .4-1.8.4-4.2 0-6z"
            fill="#FFFFFF"
          />
        </svg>
      );

    case 14: // Caja de ANDE — Official yellow & royal blue folded ribbon logo, centered (x: 6..38, y: 12..32)
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#FFFFFF" />
          <g transform="translate(1.4, 1.8) scale(0.92)">
            <polygon points="5,22 15,11 25,11 15,22" fill="#FFCA05" />
            <polygon points="5,22 15,22 25,33 15,33" fill="#0040A6" />
            <polygon points="20,27.5 26,21 34,21 25,33" fill="#FFCA05" />
            <polygon points="29.5,26.5 34,21 40,33 32,33" fill="#0040A6" />
          </g>
        </svg>
      );

    default: // Wink — Official holawink.com SVG logo, centered with 5.4px lateral padding
      return (
        <svg viewBox="0 0 44 44" className="w-[44px] h-[44px]" aria-hidden="true">
          <rect width="44" height="44" rx="10" fill="#2E1A54" />
          <g transform="translate(5.4, 15.6) scale(0.237)">
            <path
              d="M35.49 0.64C34.9 0.4 34.26 0.26 33.62 0.24C32.36 0.66 31.64 1.52 31.13 2.88L26.79 16.3L22.51 3.08C21.8 1.5 20.5 0.5 19.01 0.5C17.5 0.5 16.2 1.5 15.65 3.13L11.36 16.28L7.03 2.94C6.5 1.3 5.5 0.34 4.59 0.34C1.5 0.5 0.02 2.2 0.02 3.29L8.03 27.33C8.8 29 10 29.76 11.3 29.76C12.8 29.76 14 28.8 14.68 27.11L19.06 14.01L23.44 27.11C24.2 28.8 25.4 29.7 26.83 29.7C28.3 29.7 29.5 28.8 30.13 27.32L37.69 5.15C38.15 3.19 37.28 1.28 35.52 0.65Z"
              fill="#FFFFFF"
            />
            <path
              d="M49.02 1.98C48.5 0.8 47 0.48 45.77 0.48C44 0.48 42.7 1.2 42.33 2.62V27.38C42.7 29 44 29.8 45.71 29.8C47.5 29.8 48.8 29 49.2 27.68V2.91L49.02 1.98Z"
              fill="#FFFFFF"
            />
            <path
              d="M79.32 2.02C78.8 0.8 77.5 0.52 76.1 0.52C74.2 0.52 73 1.3 72.61 3.91V17.39L61.51 2.26C60.5 1 59.2 0.5 57.85 0.5C56 0.5 54.6 1.5 54.34 3.89V26.18C54.6 28.8 56 29.74 57.77 29.74C59.6 29.74 61 28.8 61.27 26.23V13.1L72.92 28.77C73.9 29.52 75 29.77 76.03 29.77C77.8 29.77 79.2 28.8 79.53 26.25V2.91L79.32 2.02Z"
              fill="#FFFFFF"
            />
            <path
              d="M97 15.06L105.54 6.27C106.41 5.29 106.84 4.51 106.84 3.91C106.84 2.5 104.2 0.01 102.68 0.01C101.5 0.01 98 4.26 91.62 11.67V2.91C91.2 1 89.8 0.5 88.18 0.5C86.2 0.5 84.9 1.5 84.67 4.01V27.4C85 29 86.4 29.81 88.12 29.81C90 29.81 91.4 28.8 91.62 26.3V18.46L99.01 27.09C104.47 31.88 111 36 118.01 36C131 36 138.37 24.67 139.63 22.19C140.2 19.5 138.5 17.11 136.87 17.11C135.1 17.11 134 18 133.53 18.98C132.6 20.79 129.03 26.85 121.87 28.58C115 29.8 109.09 26.58 104.12 22.43L97 15.06Z"
              fill="#00E5A3"
            />
            <path
              d="M126.66 17.72C127.4 16.1 127.34 14 126.4 12.54C125.5 12.18 123 12.18 122.01 12.76C121.3 13.5 121.3 16.5 122.26 17.9C123.5 18.3 125.8 18.3 126.66 17.72ZM116.41 17.72C117.1 16.1 117.04 14 116.1 12.51C115 12.15 112.5 12.15 111.71 12.74C111.08 14.33 109.99 14.12 108.42 12.79C107.5 12.2 105.97 12.2 105.97 12.79C105.97 15 109 18.2 114.16 18.28C115.3 18.28 116.05 18.09 116.41 17.72Z"
              fill="#00E5A3"
            />
          </g>
        </svg>
      );
  }
};
