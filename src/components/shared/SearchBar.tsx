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
            className={`rounded-l-full font-semibold placeholder:font-normal transition-all ${isFocused ? 'pl-11' : ''} rounded-r-none bg-white focus-visible:ring-1 focus-visible:ring-offset-0 focus:bg-white focus:text-black`}
          />

          {isFocused && (
            <SearchIcon className="absolute top-2.5 left-4 size-4 transition-opacity duration-200"
              strokeWidth={2.5} />
          )}
        </div>

        <Button
          variant="default"
          className="rounded-l-none !px-5 bg-accent/70 hover:bg-accent/80 rounded-r-full border cursor-pointer"
        >
          <SearchIcon className="text-black"
            strokeWidth={2.5}
          />
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
