"use-client";
import { Plus } from "lucide-react";
import { CreateOrganization } from "@clerk/nextjs";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Hint from "@/components/hint";
const NewButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="aspect-square">
            <Hint
              label="create new organization"
              side="right"
              sideOffset={18}
              align="start"
            >
              <button className="flex items-center justify-center h-full w-full rounded-md bg-white/25 opacity-60 hover:opacity-100 transition">
                <Plus />
              </button>
            </Hint>
          </div>
        </DialogTrigger>
        <DialogContent className="p-0 border-none bg-transparent max-w-lg ">
          <CreateOrganization />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NewButton;
