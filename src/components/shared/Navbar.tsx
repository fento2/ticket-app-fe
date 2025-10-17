import { Ticket } from "lucide-react";
import Link from "next/link";

import SignInModal from "./SignIn";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";

export const Topbar = () => {
  const menu = [
    { name: "Features", link: "/feature" },
    { name: "Explore", link: "/explore" },
    { name: "Categories", link: "/categories" },
    { name: "Help", link: "/help" },
  ];

  return (
    <div className="bg-sidebar-primary/80 text-sm h-8 flex items-center">
      <div className="max-w-screen-3xl mx-auto px-6 w-full flex justify-end">
        <div className="flex items-center gap-6 font-medium text-white">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Navbar = () => {
  return (
    <nav className="bg-sidebar-primary w-full h-20 flex items-center sticky top-0 z-50 shadow-md">
      <div className="max-w-screen-3xl mx-auto px-6 w-full flex items-center justify-between">
        {/* Logo + Search Bar container */}
        <div className="flex items-center gap-3 flex-1">
          {/* Logo */}
          <div className="flex items-center space-x-2 text-white">
            <Ticket className="w-7 h-7" />
            <span className="font-extrabold text-2xl tracking-wide">
              EventTix
            </span>
          </div>

          {/* Divider */}
          <div className="bg-accent w-px h-12 mx-2" />
          <div className="flex-1 mr-8 max-w-3xl">
            <SearchBar />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-4 shrink-0">
          <SignInModal />
          <div className="bg-accent w-px h-12" />
          <Link href="/sign-up">
            <Button
              variant="ghost"
              className="px-6 border shadow-sm font-medium bg-accent"
            >
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

