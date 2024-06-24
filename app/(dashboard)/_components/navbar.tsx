"use client";
import { UserButton } from "@clerk/nextjs";
const NavBar = () => {
  return (
    <div className="bg-green-500 flex items-center gap-x-4 p-4">
      <div className="hidden lg:flex lg:flex-1 bg-yellow-500">Search</div>
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default NavBar;
