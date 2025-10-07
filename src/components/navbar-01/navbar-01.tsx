import { Button } from "@/components/ui/button";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import Image from "next/image";

const Navbar01Page = () => {
  return (
    <nav className="h-24 bg-background/70 fixed top-0 left-0 right-0 z-50">
      <div className="h-full flex items-center justify-between max-w-(--breakpoint-xl) mx-auto px-4 sm:px-6 lg:px-8">
        <Image src="/logo.png" alt="Logo" width={124} height={32} />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" />

        <div className="md:hidden">
          <NavigationSheet />
        </div>
      </div>
    </nav>
  );
};

export default Navbar01Page;
