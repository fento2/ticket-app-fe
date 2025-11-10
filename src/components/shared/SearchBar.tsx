import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const SearchBar = () => {
  return (
    <>
      <div>
        {/* Search Bar - full width */}
        <div className="flex w-full">
          <Input
            type="text"
            placeholder="Cari event..."
            className="rounded-l-full rounded-r-none bg-accent focus-visible:ring-0 focus-visible:ring-offset-0 focus:bg-white focus:text-black placeholder:text-gray-300"
          />
          <Button
            variant={"default"}
            className="rounded-l-none px-5 rounded-r-full"
          >
            <Search className="text-white" size={18} />
          </Button>
        </div>
      </div>
    </>
  );
};
export default SearchBar;
