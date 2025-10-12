"use client";

import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import Image from "next/image";
import Link from "next/link";

const Navbar01Page = () => {
  return (
    <nav className="h-24 bg-background/70 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
      <div className="h-full flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={124} height={32} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <NavMenu />
          <LanguageSwitcher />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher />
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
