"use client"
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <div className="flex justify-between w-full">
        <div className="relative w-full">
          <Input
            type="text"
            placeholder="Search"
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`rounded-l-full font-medium placeholder:font-normal bg-background/50 dark:bg-background/50 transition-all ${isFocused ? 'pl-11' : ''} rounded-r-none focus-visible:ring-1 focus-visible:ring-offset-0 shadow-none focus:bg-background focus:dark:bg-background`}
          />

          {isFocused && (
            <SearchIcon className="absolute top-2.5 left-4 size-4 transition-opacity duration-200"
              strokeWidth={3} />
          )}
        </div>

        <Button
          variant="secondary"
          className="rounded-l-none !px-6 rounded-r-full cursor-pointer"
        >
          <SearchIcon className=""
            strokeWidth={3}
          />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
