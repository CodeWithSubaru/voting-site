type SizesProps = "25" | "50" | "75" | "100";

const Divider = ({ variant = "75" }: { variant?: SizesProps }) => {
  const sizes: Record<string, string> = {
    "25": "w-1/4",
    "50": "2/4",
    "75": "w-3/4",
    "100": "w-full",
  };

  return <div className={`h-px bg-gray-200 my-5 ${sizes[variant]}`} />;
};
export default Divider;
