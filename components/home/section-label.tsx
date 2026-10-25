export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.24em] text-titanium-300">
      <span className="font-mono text-titanium-500">{number}</span>
      <span className="h-px w-8 bg-white/25" />
      {label}
    </p>
  );
}
