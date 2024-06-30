import Image from "next/image";
const EmptyFavorites = () => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center h-full ">
      <Image
        src="empty-favorites.svg"
        alt="Empty Search"
        width={140}
        height={140}
      />
      <h2 className="text-2xl font-semibold">No Favorites Found !!</h2>
      <p className="text-muted-foreground text-sm">Try Making favorites !!</p>
    </div>
  );
};

export default EmptyFavorites;
