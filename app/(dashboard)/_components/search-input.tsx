"use client";

import { useEffect } from "react";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import queryString from "query-string";

const SearchInput = () => {
  const [debouncedValue, setValue] = useDebounceValue("", 500);
  const router = useRouter();
  useEffect(() => {
    const url = queryString.stringifyUrl(
      {
        url: "/",
        query: {
          search: debouncedValue,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [debouncedValue, router]);
  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 h-4 w-4 transform -translate-y-1/2 text-muted-foreground" />
      <Input
        className="w-full max-w-lg pl-9"
        placeholder="Search Boards"
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default SearchInput;
