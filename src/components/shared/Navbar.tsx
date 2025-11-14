import Link from "next/link";
import SignInModal from "./SignIn";
import { Button } from "../ui/button";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { MenuIcon, TwitterIcon } from "lucide-react";
import { useState } from "react";


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
  const [value, setValue] = useState('')
  return (
    <>
      <nav className="backdrop-blur-2xl bg-background/20 w-full sticky top-0 z-30 py-1.5 mb-4">
        <div className="px-8 w-full">
          {/* desktop*/}
          <div className="grid grid-cols-3 items-center w-full border  gap-">

            {/* Kiri: Logo */}
            <div className="flex items-center text-primary border">
              <TwitterIcon className="" size={36} />
              <h1 className="font-extrabold text-xl">Event Tix</h1>
            </div>

            {/* Tengah: Search bar */}
            <div className="border">
              <div className="w-full">
                <SearchBar
                  variant="default"
                  value={value}
                  onChange={setValue}
                />
              </div>
            </div>

            {/* Kanan: Action buttons */}
            <div className="flex items-center justify-end gap-1 border">
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

          <aside className="flex justify-between hidden">
            <div className="flex items-center gap-2 text-primary">
              <TwitterIcon />
              <h1 className="font-extrabold ">Event Tix</h1>
            </div >
            <div className="flex gap-2 items-center justify-between">

              <div className="justify-self-center w-full">
                <SearchBar variant="icon" />
              </div>

              {/* <Button
                size='icon'
                variant={"ghost"}
              >
                <MenuIcon strokeWidth={3} className="w-[24px]! h-[24px]!" />
              </Button> */}

            </div>
          </aside>
        </div>
      </nav>
    </>
  );
};
