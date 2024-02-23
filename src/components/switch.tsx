import { PropsWithChildren } from "react";

const Switch = ({
  variant = "primary",
  children,
}: { variant?: string } & PropsWithChildren) => {
  const variants: Record<string, string> = {
    muted:
      "shadow-inner shadow-gray-300 bg-gray-200 text-gray-500 rounded-e-md",
    primary:
      "bg-[var(--primary-light)] text-[var(--primary)] rounded-s-md font-bold",
  };
  return (
    <button className={`text-xs p-2 tracking-wide ${variants[variant]}`}>
      {children}
    </button>
  );
};
export default Switch;
