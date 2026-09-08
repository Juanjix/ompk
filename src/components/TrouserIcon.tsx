export function TrouserIcon({ fill, dashed }: { fill: string; dashed?: boolean }) {
  const d = "M30 10 H70 L74 90 L92 190 H68 L54 100 L46 100 L32 190 H8 L26 90 Z";
  return (
    <svg className="h-[78%] w-[38%]" viewBox="0 0 100 200" aria-hidden>
      <path d={d} fill={fill} stroke={dashed ? "#8a8370" : undefined} strokeWidth={dashed ? 0.6 : undefined} strokeDasharray={dashed ? "3,5" : undefined} />
    </svg>
  );
}
