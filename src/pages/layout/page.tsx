import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="grid grid-cols-[300px_1fr_200px] p-5 h-full">
      {children}
    </div>
  );
};
export default Layout;
