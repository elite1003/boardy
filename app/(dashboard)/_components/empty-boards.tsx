import { Button } from "@/components/ui/button";
import Image from "next/image";
const EmptyBoards = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-full ">
      <Image src="note.svg" alt="Empty Search" width={140} height={140} />
      <h2 className="text-2xl font-semibold">No Boards at all !!</h2>
      <p className="text-muted-foreground text-sm">
        Try creating new boards !!
      </p>
      <div>
        <Button size="lg" className="bg-black">
          Create New Boards !!
        </Button>
      </div>
    </div>
  );
};

export default EmptyBoards;
