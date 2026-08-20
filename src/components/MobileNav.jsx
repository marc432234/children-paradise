"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AdmissionFormTrigger from "@/components/AdmissionFormTrigger";

function HamburgerIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 7H21M3 12H21M3 17H21"
        stroke="#211f1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="#211f1a"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 1.33301C5.41667 1.33301 3.33333 3.41634 3.33333 5.99967C3.33333 9.33301 8 14.6663 8 14.6663C8 14.6663 12.6667 9.33301 12.6667 5.99967C12.6667 3.41634 10.5833 1.33301 8 1.33301ZM8 7.99967C6.89583 7.99967 6 7.10384 6 5.99967C6 4.8955 6.89583 3.99967 8 3.99967C9.10417 3.99967 10 4.8955 10 5.99967C10 7.10384 9.10417 7.99967 8 7.99967Z"
        stroke="#5B564C"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M14 11.333V13.333C14 13.554 13.821 13.766 13.6 13.841C13.393 13.912 13.197 13.928 13 13.888C12.167 13.72 11.355 13.432 10.6 13.033C9.90833 12.668 9.27667 12.203 8.73333 11.658C8.25833 11.191 7.85 10.673 7.525 10.116C7.16667 9.50833 6.88333 8.86667 6.68333 8.19999C6.46667 7.49166 6.35 6.74999 6.33333 5.99999"
        stroke="#5B564C"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Schools", href: "/schools" },
  { label: "Student Life", href: "/student-life" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="lg:hidden p-2"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen(!open)}
      >
        {open ? <CloseIcon /> : <HamburgerIcon />}
      </button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/40 transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Slide-in Drawer */}
      <div
        aria-hidden={!open}
        className={`fixed top-0 right-0 z-[70] h-full w-[85vw] max-w-[360px] bg-white shadow-2xl transition-[transform,visibility] duration-300 ease-out lg:hidden ${
          open ? "translate-x-0 visible" : "translate-x-full invisible"
        }`}
      >
        <div className="flex items-center justify-between px-6 h-[84px] border-b border-[#211f1a]/10">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.png"
              alt="Children's Paradise Logo"
              width={40}
              height={40}
              className="rounded-lg"
            />
            <span className="font-instrument-serif text-base text-[#211f1a]">
              Children&apos;s Paradise
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="p-2"
          >
            <CloseIcon />
          </button>
        </div>

        <nav className="px-6 py-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[#5b564c] text-base font-medium py-3 border-b border-[#211f1a]/5 hover:text-[#1f3d30] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <AdmissionFormTrigger onOpen={() => setOpen(false)} className="text-left text-[#5b564c] text-base font-medium py-3 border-b border-[#211f1a]/5 hover:text-[#1f3d30] transition-colors">Admissions</AdmissionFormTrigger>
        </nav>

        <div className="px-6 flex flex-col gap-3">
          <AdmissionFormTrigger
            onOpen={() => setOpen(false)}
            className="btn-gold text-center px-6 py-3.5 rounded-sm text-black text-sm font-semibold tracking-tight"
          >
            Schedule a Visit
          </AdmissionFormTrigger>
          <a
            href="/schools"
            onClick={() => setOpen(false)}
            className="text-center text-[#1f3d30] text-sm font-semibold border border-[#1f3d30]/20 rounded-sm px-6 py-3.5 hover:bg-[#1f3d30]/5 transition-colors"
          >
            Find a Location
          </a>
        </div>

        <div className="px-6 mt-8 pt-6 border-t border-[#211f1a]/10 flex flex-col gap-3">
          <div className="flex items-center gap-2 text-[#5b564c] text-sm">
            <LocationIcon />
            <span>Hialeah &amp; Miami Lakes, FL</span>
          </div>
          <div className="flex items-center gap-2 text-[#5b564c] text-sm">
            <PhoneIcon />
            <span>(305) 557-3644</span>
          </div>
        </div>
      </div>
    </>
  );
}
