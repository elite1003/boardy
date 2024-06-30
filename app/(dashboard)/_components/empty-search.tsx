import Image from "next/image";
const EmptySearch = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-full ">
      <Image
        src="empty-search.svg"
        alt="Empty Search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold">No Match Found !!</h2>
      <p className="text-muted-foreground text-sm">
        Try Searching something else !!
      </p>
    </div>
  );
};

export default EmptySearch;
