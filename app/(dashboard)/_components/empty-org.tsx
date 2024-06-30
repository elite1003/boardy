import Image from "next/image";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const EmptyOrg = () => {
  return (
    <div className="h-full flex flex-col justify-center items-center gap-4">
      <Image src="elements.svg" alt="Empty Art" width={200} height={200} />
      <h2 className="text-2xl font-semibold">Welcome to Board</h2>
      <p className="text-muted-foreground text-sm">
        Create an organization to get started!!
      </p>
      <div>
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg" className="bg-black text-white">
              Create Organization
            </Button>
          </DialogTrigger>
          <DialogContent className="p-0 bg-transparent border-none max-w-[480px]">
            <CreateOrganization />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default EmptyOrg;
