"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import logoSrc from "public/logo.svg";
import { cx } from "lib/cx";

export const TopNavBar = () => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";

  return (
    <header
      aria-label="Site Header"
      className={cx(
        "flex h-[var(--top-nav-bar-height)] items-center border-b-2 border-gray-100 px-3 lg:px-12",
        isHomePage && "bg-dot"
      )}
    >
      <div className="flex h-10 w-full items-center justify-between">
        <Link href="/">
        <span className="text-primary pb-2 text-4xl font-bold lg:text-2xl">ProResume</span>
        </Link>
        <span className="text-primary pb-2 text-xl font-bold lg:text-xl">Developed by Nasir, Aatif, Vishal, Ahsan</span>
      </div>
    </header>
  );
};