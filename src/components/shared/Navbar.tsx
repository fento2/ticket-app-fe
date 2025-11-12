import Link from "next/link";
import SignInModal from "./SignIn";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { TwitterIcon } from "lucide-react";


export const Topbar = () => {
  const menu = [
    { name: "Features", link: "/feature" },
    { name: "Explore", link: "/explore" },
    { name: "Categories", link: "/categories" },
    { name: "Help", link: "/help" },
  ];

  return (
    <div className="text-sm flex items-center px-8">
      <div className="w-full flex justify-end">
        <div className="flex items-center gap-3 font-medium tracking-wider py-0.5">
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
    <>
      <nav className="backdrop-blur-2xl bg-background/5 w-full sticky top-0 z-30 py-1.5 mb-4">
        <div className="max-w-screen-3xl mx-auto px-8 w-full">
          {/* pakai grid 3 kolom */}
          <div className="grid grid-cols-3 items-center w-full">

            {/* Kiri: Logo */}
            <div className="flex items-center gap-2 text-primary">
              <TwitterIcon />
              <h1 className="font-extrabold ">Event Tix</h1>
            </div>

            {/* Tengah: Search bar */}
            <div className="justify-self-center w-full">
              <SearchBar />
            </div>

            {/* Kanan: Action buttons */}
            <div className="flex items-center justify-end gap-1">
              <SignInModal />

              <Link href="/sign-up">
                <Button
                  variant="secondary"
                  className="font-bold"
                >
                  Sign Up
                </Button>
              </Link>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
};
