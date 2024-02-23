import { PropsWithChildren } from "react";

const Badge = ({
  variant = "primary",
  children,
}: { variant?: string } & PropsWithChildren) => {
  const variants: Record<string, string> = {
    muted: "bg-gray-200 font-medium",
    primary: "bg-[var(--primary-light)] text-[var(--primary)]",
  };

  return (
    <div
      className={`text-xs px-2 py-1 inline-block rounded font-medium tracking-wide ${variants[variant]}`}
    >
      {children}
    </div>
  );
};
export default Badge;
