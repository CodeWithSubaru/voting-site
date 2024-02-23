import { PropsWithChildren } from "react";

const Center = ({
  className = "",
  children,
}: {
  className?: string;
} & PropsWithChildren) => {
  return <div className={`max-w-3xl mx-auto ${className}`}>{children}</div>;
};
export default Center;
