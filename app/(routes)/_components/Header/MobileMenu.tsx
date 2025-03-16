import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
import { headerData } from "@/constants";
import HeaderItem from "./HeaderItem";

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <MenuIcon className="lg:hidden flex" />
      </SheetTrigger>
      <SheetContent className="bgone">
      <div className="flex flex-col space-y-6 mt-8 items-center">
          {headerData.map((nav, index) => (
            <HeaderItem key={index} href={nav.href} label={nav.label} />
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileMenu;
