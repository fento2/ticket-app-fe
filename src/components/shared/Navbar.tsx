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
    <nav className="backdrop-blur-lg w-full sticky top-0 z-50 py-1.5">
      <div className="max-w-screen-3xl mx-auto px-4 w-full">
        {/* pakai grid 3 kolom */}
        <div className="grid grid-cols-3 items-center w-full">

          {/* Kiri: Logo */}
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="relative w-15 h-9">
                <Image
                  src="/logo2.png"
                  alt="logo"
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-extrabold -ml-3">Event Tix</h1>
            </div>
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
                variant="outline"
                className="text-white rounded-full font-bold bg-primary border-white hover:bg-primary/90 hover:text-white"
              >
                Sign Up
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};
