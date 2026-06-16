import type { HTMLAttributes } from "react";

type TitaniumCardProps = HTMLAttributes<HTMLDivElement>;

export function TitaniumCard({
  className = "",
  children,
  ...props
}: TitaniumCardProps) {
  return (
    <div
      className={`titanium-surface rounded-[2rem] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
