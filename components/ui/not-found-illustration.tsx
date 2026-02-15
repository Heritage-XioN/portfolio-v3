export function NotFoundIllustration() {
  return (
    <div className="relative mx-auto mt-10 flex items-center justify-center">
      <svg
        width="360"
        height="220"
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="w-full max-w-sm"
      >
        {/* Background blob */}
        <ellipse cx="180" cy="130" rx="140" ry="80" fill="#1a2035" />

        {/* Small clouds */}
        <g fill="#2a3450" opacity="0.8">
          <ellipse cx="80" cy="70" rx="20" ry="10" />
          <ellipse cx="90" cy="65" rx="14" ry="8" />
          <ellipse cx="280" cy="80" rx="18" ry="9" />
          <ellipse cx="290" cy="75" rx="12" ry="7" />
        </g>

        {/* Moon */}
        <circle cx="160" cy="40" r="14" fill="#F59E0B" />

        {/* Leaf / decoration */}
        <path
          d="M260 95 C265 85, 275 85, 270 95"
          stroke="#F59E0B"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M265 85 L265 100"
          stroke="#F59E0B"
          strokeWidth="1.5"
        />

        {/* Large "4" left */}
        <text
          x="55"
          y="185"
          fontSize="120"
          fontWeight="900"
          fill="#F59E0B"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        >
          4
        </text>

        {/* Large "4" right */}
        <text
          x="235"
          y="185"
          fontSize="120"
          fontWeight="900"
          fill="#F59E0B"
          fontFamily="var(--font-geist-sans), system-ui, sans-serif"
        >
          4
        </text>

        {/* Character body (circle person) */}
        <circle cx="180" cy="100" r="30" fill="#E8A030" />

        {/* Person head */}
        <circle cx="180" cy="70" r="16" fill="#E8A030" />

        {/* Eyes */}
        <circle cx="175" cy="68" r="2" fill="#0B1121" />
        <circle cx="185" cy="68" r="2" fill="#0B1121" />

        {/* Arm + magnifying glass */}
        <line
          x1="200"
          y1="95"
          x2="225"
          y2="75"
          stroke="#E8A030"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <circle
          cx="232"
          cy="68"
          r="10"
          stroke="#D4D4D8"
          strokeWidth="3"
          fill="none"
        />
        <line
          x1="225"
          y1="75"
          x2="220"
          y2="80"
          stroke="#D4D4D8"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Legs */}
        <line
          x1="170"
          y1="128"
          x2="165"
          y2="160"
          stroke="#E8A030"
          strokeWidth="6"
          strokeLinecap="round"
        />
        <line
          x1="190"
          y1="128"
          x2="195"
          y2="160"
          stroke="#E8A030"
          strokeWidth="6"
          strokeLinecap="round"
        />

        {/* Ground shadow */}
        <ellipse cx="180" cy="165" rx="50" ry="6" fill="#111827" opacity="0.5" />
      </svg>
    </div>
  );
}
