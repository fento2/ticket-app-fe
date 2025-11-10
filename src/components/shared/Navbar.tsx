import { Ticket } from "lucide-react";
import Link from "next/link";
import SignInModal from "./SignIn";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";
import Image from "next/image";

export const Topbar = () => {
  const menu = [
    { name: "Features", link: "/feature" },
    { name: "Explore", link: "/explore" },
    { name: "Categories", link: "/categories" },
    { name: "Help", link: "/help" },
  ];

  return (
    <div className="bg-white/50 text-sm flex items-center">
      <div className="w-full flex justify-end">
        <div className="flex items-center gap-3 font-medium tracking-wider px-2 py-0.5">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:underline"
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
    <nav className="backdrop-blur-3xl w-full flex items-center sticky top-0 z-50 py-1.5">
      <div className="max-w-screen-3xl mx-auto px-4 w-full flex items-center justify-between">
        {/* Logo + Search Bar container */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative w-12 h-9">
              <Image
                src={'/logo2.png'}
                alt={'logo'}
                fill
                className="object-cover"
              />
            </div>
            <h1 className="font-extrabold">Event Tix</h1>
          </div>

          {/* Search bar di tengah */}
          <div className="flex-1 px-4">
            <div className="max-w-2xl">
              <SearchBar />
            </div>
          </div>



          <div className="flex items-center gap-1">
            <SignInModal />

            <Link href="/sign-up">
              <Button variant="outline" className="text-white rounded-full font-bold bg-primary border-white hover:bg-primary/90 hover:text-white">
                Sign Up
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </nav>
  );
};

