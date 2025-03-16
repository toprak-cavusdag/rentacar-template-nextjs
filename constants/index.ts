import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

export interface HeaderDataProps {
  label: string;
  href: string;
}

export const headerData: HeaderDataProps[] = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "About Us",
    href: "#",
  },
  {
    label: "Services",
    href: "#",
  },
  {
    label: "Cars",
    href: "#",
  },

  {
    label: "Contact",
    href: "#",
  },
];

export interface FooterItemDataProps {
  title: string;
  items: { label: string; href: string }[];
}

export const footerData: FooterItemDataProps[] = [
  {
    title: "About",
    items: [
      { label: "How it works", href: "#" },
      { label: "Featured", href: "#" },
      { label: "Partnership", href: "#" },
      { label: "Business Relation", href: "#" },
    ],
  },
  {
    title: "Community",
    items: [
      { label: "Events", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Podcast", href: "#" },
      { label: "Invite a Friend", href: "#" },
    ],
  },
];

export type SocialMediaType = {
  icon: React.ElementType;
  label: string;
};

export const socialMediaData: SocialMediaType[] = [
  {
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    icon: FaTwitter,
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    label: "Linkedin",
  },
  {
    icon: FaYoutube,
    label: "Youtube",
  },
];
