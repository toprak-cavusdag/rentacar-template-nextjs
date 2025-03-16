import { headerData } from "@/constants";
import React from "react";
import HeaderItem from "./HeaderItem";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <div className="py-2 bgone">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#ff3600]">
          YOURENT
        </h1>
        <div className="hidden lg:flex lg:flex-row items-center justify-between mx-auto space-x-8">
          {headerData.map((nav, index) => (
            <HeaderItem key={index} href={nav.href} label={nav.label} />
          ))}
        </div>

        <div className="flex justify-center space-x-3.5 items-center">
          <ModeToggle />
          <MobileMenu />
          <Button variant="myButton" size="lg">Book A Rental</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
