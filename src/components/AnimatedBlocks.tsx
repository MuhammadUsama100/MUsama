const AnimatedBlocks = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        className="h-full w-full opacity-75"
        viewBox="0 0 1200 640"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="cadSurface" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.06" />
          </linearGradient>
          <filter id="cadGlow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g opacity="0.16">
          {Array.from({ length: 9 }).map((_, index) => (
            <path key={`h-${index}`} d={`M 0 ${index * 80} H 1200`} stroke="hsl(var(--foreground))" strokeDasharray="5 14" />
          ))}
          {Array.from({ length: 15 }).map((_, index) => (
            <path key={`v-${index}`} d={`M ${index * 86} 0 V 640`} stroke="hsl(var(--foreground))" strokeDasharray="5 14" />
          ))}
        </g>

        <g className="cad-model cad-model-a" transform="translate(190 165)">
          <line x1="0" y1="0" x2="115" y2="-42" className="cad-connector" />
          <line x1="0" y1="0" x2="118" y2="58" className="cad-connector" />

          <g className="cad-exploded-part" style={{ "--explode-x": "-22px", "--explode-y": "-10px" } as React.CSSProperties}>
            <rect x="-98" y="-34" width="118" height="68" rx="10" className="cad-shape-fill" />
            <circle cx="-70" cy="0" r="13" className="cad-hole" />
            <circle cx="-22" cy="0" r="13" className="cad-hole" />
            <path d="M -88 -18 H 12 M -88 18 H 12" className="cad-detail" />
          </g>

          <g className="cad-exploded-part" style={{ "--explode-x": "18px", "--explode-y": "-20px" } as React.CSSProperties}>
            <path
              d="M 78 -72 H 166 Q 184 -72 184 -54 V -20 Q 184 -2 166 -2 H 126 L 106 26 H 78 Z"
              className="cad-shape-fill"
            />
            <circle cx="138" cy="-38" r="18" className="cad-hole" />
            <path d="M 92 -58 H 116 M 92 -18 H 164" className="cad-detail" />
          </g>

          <g className="cad-exploded-part" style={{ "--explode-x": "20px", "--explode-y": "22px" } as React.CSSProperties}>
            <path
              d="M 70 28 H 178 V 54 H 150 V 90 H 98 V 54 H 70 Z"
              className="cad-shape-fill"
            />
            <circle cx="98" cy="44" r="7" className="cad-hole" />
            <circle cx="150" cy="44" r="7" className="cad-hole" />
            <path d="M 106 72 H 142" className="cad-detail" />
          </g>

          <circle r="42" className="cad-impact" />
        </g>

        <g className="cad-model cad-model-b" transform="translate(960 165)">
          <line x1="0" y1="0" x2="-98" y2="-20" className="cad-connector" />
          <line x1="0" y1="0" x2="94" y2="-12" className="cad-connector" />
          <line x1="0" y1="0" x2="0" y2="82" className="cad-connector" />

          <g className="cad-exploded-part" style={{ "--explode-x": "-24px", "--explode-y": "-12px" } as React.CSSProperties}>
            <path
              d="M -156 -52 L -112 -72 L -70 -52 L -70 -4 L -112 18 L -156 -4 Z"
              className="cad-shape-fill"
            />
            <circle cx="-112" cy="-26" r="21" className="cad-hole" />
            <path d="M -144 -50 L -112 -34 L -80 -50 M -144 -2 L -112 -18 L -80 -2" className="cad-detail" />
          </g>

          <g className="cad-exploded-part cad-gear" style={{ "--explode-x": "24px", "--explode-y": "-10px" } as React.CSSProperties}>
            <path
              d="M 70 -54 L 86 -42 L 104 -48 L 112 -30 L 130 -24 L 126 -4 L 140 10 L 128 26 L 132 46 L 112 54 L 102 72 L 82 66 L 66 78 L 50 64 L 30 68 L 22 48 L 4 38 L 10 18 L -4 2 L 10 -14 L 6 -34 L 26 -42 L 36 -60 L 56 -54 Z"
              className="cad-shape-fill"
            />
            <circle cx="66" cy="8" r="38" className="cad-detail-fill" />
            <circle cx="66" cy="8" r="15" className="cad-hole" />
          </g>

          <g className="cad-exploded-part" style={{ "--explode-x": "0px", "--explode-y": "24px" } as React.CSSProperties}>
            <path d="M -44 70 H 44 L 62 132 H -62 Z" className="cad-shape-fill" />
            <circle cx="-24" cy="96" r="8" className="cad-hole" />
            <circle cx="24" cy="96" r="8" className="cad-hole" />
            <path d="M -34 118 H 34" className="cad-detail" />
          </g>

          <circle r="46" className="cad-impact" />
        </g>

        <g className="cad-model cad-model-c" transform="translate(690 455)">
          <line x1="0" y1="0" x2="-110" y2="-46" className="cad-connector" />
          <line x1="0" y1="0" x2="110" y2="-46" className="cad-connector" />

          <g className="cad-exploded-part" style={{ "--explode-x": "-28px", "--explode-y": "-18px" } as React.CSSProperties}>
            <path
              d="M -168 -92 H -72 Q -54 -92 -54 -74 V -28 Q -54 -10 -72 -10 H -168 Q -186 -10 -186 -28 V -74 Q -186 -92 -168 -92 Z"
              className="cad-shape-fill"
            />
            <circle cx="-154" cy="-52" r="10" className="cad-hole" />
            <circle cx="-86" cy="-52" r="10" className="cad-hole" />
            <path d="M -138 -72 H -102 M -138 -32 H -102" className="cad-detail" />
          </g>

          <g className="cad-exploded-part" style={{ "--explode-x": "28px", "--explode-y": "-18px" } as React.CSSProperties}>
            <path
              d="M 52 -98 H 154 L 184 -62 L 154 -26 H 52 L 30 -62 Z"
              className="cad-shape-fill"
            />
            <circle cx="82" cy="-62" r="9" className="cad-hole" />
            <circle cx="124" cy="-62" r="9" className="cad-hole" />
            <circle cx="154" cy="-62" r="9" className="cad-hole" />
          </g>

          <g className="cad-exploded-part" style={{ "--explode-x": "0px", "--explode-y": "24px" } as React.CSSProperties}>
            <path d="M -82 18 C -52 54, 52 54, 82 18 L 62 88 H -62 Z" className="cad-shape-fill" />
            <path d="M -52 40 C -30 60, 30 60, 52 40" className="cad-detail" />
          </g>

          <circle r="44" className="cad-impact" />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedBlocks;
