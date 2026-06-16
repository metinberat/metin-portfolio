type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description
}: SectionHeaderProps) {
  return (
    <div className="mb-6 max-w-3xl sm:mb-7">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanium-300 sm:text-sm sm:tracking-[0.22em]">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-tight text-titanium-50 sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-8 text-titanium-300">
        {description}
      </p>
    </div>
  );
}
