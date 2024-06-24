import { ReactNode } from "react";

interface DashBoardPageProps {
  children: ReactNode;
}
const DashBoardPage = ({ children }: Readonly<DashBoardPageProps>) => {
  return <div>page</div>;
};

export default DashBoardPage;
