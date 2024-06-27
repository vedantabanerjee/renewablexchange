import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  const navLinks = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Chat",
      url: "/chat",
    },
    {
      title: "Blogs",
      url: "/blog",
    },
  ];
  return (
    <nav className="sticky z-[100] bg-white h-14 inset-x-0 border-b border-gray-200 top-0 w-full backdrop-blur-lg transition-all ">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b border-zinc-200">
          <Link className="flex z-40 font-semibold" href={"/"}>
            <span className="text-green-500">Renewable </span>xchange
          </Link>
          <div className="h-full flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
                key={link.url}
                href={link.url}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
