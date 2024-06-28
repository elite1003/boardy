"use client";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";
import SearchInput from "./search-input";
const NavBar = () => {
  return (
    <div className="flex items-center gap-x-4 p-4">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <div className="flex-1 lg:hidden">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "16px",
                width: "100%",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
              },
            },
          }}
        />
      </div>
      <UserButton />
    </div>
  );
};

export default NavBar;
