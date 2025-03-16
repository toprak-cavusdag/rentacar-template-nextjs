import { footerData, socialMediaData } from "@/constants";
import React from "react";
import FooterItem from "./FooterItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="px-6 md:px-16 mb-8">
      <footer className="relative py-8 px-6 md:px-8 bg-gray-950 text-white rounded-[3rem] overflow-hidden">
        <div className="absolute inset-0 bg-center bg-no-repeat bg-footer  opacity-10" />

        <div className="mx-auto container px-4 py-8 md:py-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 ">
            <div className="w-full lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-semibold text-[#ff3600]">
                YOURENT
              </h2>
              <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores, voluptatum.
              </p>
            </div>

            {footerData.map((footer, index) => (
              <FooterItem
                key={index}
                items={footer.items}
                title={footer.title}
              />
            ))}

            <div className="lg:col-span-2">
              <h2 className="font-semibold text-white text-2xl">
                Subscribe to the Newsleeters
              </h2>
              <div className="flex flex-row relative">
                <Input
                  placeholder="Your mail..."
                  className="text-white right-0 placeholder:text-white dark:placeholder:text-slate-400 ring-transparent py-6 rounded-full max-w-60 
              bg-slate-700 mt-4"
                />
                <Button className="absolute top-5 rounded-full left-48" variant="myButton">
                <FaEnvelope />
                </Button>
              </div>
            </div>
          </div>

          <hr className="border opacity-25 bg-white w-full h-px mt-5 " />
          <div className="flex flex-col  lg:flex-row items-center justify-between mt-5">
            <div>
              @ 2025 Yourent. All Rights reserved.
            </div>
            <div className="flex flex-row space-x-4 mt-4 lg:mt-0">
              {
                socialMediaData.map((item, index)=>(
                  <div key={index} className="border-2 p-2.5 text-xl rounded-full items-center justify-center hover:text-[#ff3600] hover:border-[#ff3600] duration-500 transition">
                    <item.icon />
                  </div>
                ))
              }
            </div>
          </div>


        </div>
      </footer>
    </div>
  );
};

export default Footer;
