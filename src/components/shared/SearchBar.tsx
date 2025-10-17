import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <>
      <div>
        {/* Search Bar - full width */}
        <div className="relative flex-1 mr-8 max-w-3xl">
          <Input
            type="text"
            placeholder="Cari event..."
            className="pr-12 focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white focus:text-black placeholder:text-gray-300 bg-accent"
          />
          <Button
            type="button"
            variant={"default"}
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2
              rounded-l-none px-5 rounded-r-sm bg-blue-900"
          >
            <Search size={18} className="text-white" />
          </Button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
