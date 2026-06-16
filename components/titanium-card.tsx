import type { HTMLAttributes } from "react";

type TitaniumCardProps = HTMLAttributes<HTMLDivElement>;

export function TitaniumCard({
  className = "",
  children,
  ...props
}: TitaniumCardProps) {
  return (
    <div
      className={`titanium-surface min-w-0 max-w-full overflow-hidden rounded-[2rem] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
