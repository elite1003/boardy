import { ReactNode } from "react";
import SideBar from "./_components/sidebar/";
import OrgSideBar from "./_components/org-sidebar";
import NavBar from "./_components/navbar";

interface DashBoardLayoutProps {
  children: ReactNode;
}

const DashBoardLayout = ({ children }: Readonly<DashBoardLayoutProps>) => {
  return (
    <main className="h-full">
      <SideBar />
      <div className="pl-16 h-full">
        <div className="flex gap-x-3 h-full">
          <OrgSideBar />
          <div className="h-full flex-1">
            <NavBar />
            {children}
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashBoardLayout;
