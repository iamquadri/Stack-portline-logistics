// Custom SVG route/terminal graphic — stands in for corporate photography.
// Swap this component's usage for a real <Image> in production; see README.
export default function RouteGraphic() {
  return (
    <svg
      viewBox="0 0 560 460"
      fill="none"
      className="h-full w-full"
      role="img"
      aria-label="Illustration of an international shipping route connecting a port, an air hub and a warehouse"
    >
      <rect width="560" height="460" fill="#0E2A47" />
      <g opacity="0.35">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`h-${i}`}
            x1="0"
            y1={i * 40}
            x2="560"
            y2={i * 40}
            stroke="#1D5DA6"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 15 }).map((_, i) => (
          <line
            key={`v-${i}`}
            x1={i * 40}
            y1="0"
            x2={i * 40}
            y2="460"
            stroke="#1D5DA6"
            strokeWidth="0.5"
          />
        ))}
      </g>

      <path
        d="M60 360 C 160 300, 220 380, 300 300 S 420 140, 500 100"
        stroke="#EAF2FA"
        strokeWidth="1.5"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />

      <g>
        <circle cx="60" cy="360" r="5" fill="#EAF2FA" />
        <circle cx="300" cy="300" r="5" fill="#EAF2FA" />
        <circle cx="500" cy="100" r="6" fill="#1D5DA6" stroke="#EAF2FA" strokeWidth="2" />
      </g>

      <g transform="translate(20,330)" opacity="0.9">
        <rect width="70" height="42" rx="2" fill="#12345A" stroke="#2A4F73" />
        <rect x="8" y="8" width="20" height="26" fill="#1D5DA6" />
        <rect x="32" y="8" width="30" height="12" fill="#2A4F73" />
        <rect x="32" y="24" width="30" height="10" fill="#2A4F73" />
      </g>

      <g transform="translate(440,60)" opacity="0.9">
        <path
          d="M0 20 L45 4 L60 10 L20 26 Z"
          fill="#EAF2FA"
        />
        <circle cx="4" cy="19" r="2" fill="#0E2A47" />
      </g>

      <g transform="translate(260,265)" opacity="0.85">
        <rect width="90" height="12" fill="#2A4F73" />
        <rect width="90" height="12" y="16" fill="#2A4F73" />
        <rect width="40" height="12" y="32" fill="#2A4F73" />
      </g>

      <text
        x="60"
        y="390"
        fill="#8CA0B6"
        fontFamily="var(--font-plex-mono, monospace)"
        fontSize="11"
      >
        ORIGIN
      </text>
      <text
        x="470"
        y="88"
        fill="#8CA0B6"
        fontFamily="var(--font-plex-mono, monospace)"
        fontSize="11"
      >
        DESTINATION
      </text>
    </svg>
  );
}
