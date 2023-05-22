import { ReactNode } from "react";
import { Footer, Header } from "@/components";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="bg-yellow-300 flex flex-col h-screen ">
      <div className="flex flex-col container mx-auto flex-1">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
