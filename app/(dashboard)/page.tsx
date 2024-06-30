"use client";
import EmptyOrg from "./_components/empty-org";
import { useOrganization } from "@clerk/nextjs";
import BoardList from "./_components/board-list";

interface DashBoardPageProps {
  searchParams: {
    search?: string;
    favorites?: string;
  };
}
const DashBoardPage = ({ searchParams }: DashBoardPageProps) => {
  const { organization } = useOrganization();
  return (
    <div className="flex-1 p-6 h-full">
      {!organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} query={searchParams} />
      )}
    </div>
  );
};

export default DashBoardPage;
