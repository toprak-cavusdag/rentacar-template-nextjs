import { HeaderDataProps } from "@/constants";
import { Roboto_Mono } from "next/font/google";
import Link from "next/link";
import React from "react";

const roboto = Roboto_Mono({
    variable: "--font-roboto",
    weight: "100",
  });

const HeaderItem = ({ href, label }: HeaderDataProps) => {
  return <Link className={`${roboto.variable} font-semibold transition duration-500 hover:text-[#ff3600]`} href={href}>{label}</Link>;
};

export default HeaderItem;
