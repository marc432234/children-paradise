"use client";

import { useEffect, useState } from "react";
import ContactForm from "@/components/ContactForm";

export default function AdmissionModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openModal = () => setOpen(true);
    window.addEventListener("open-admission-form", openModal);
    return () => window.removeEventListener("open-admission-form", openModal);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const closeOnEscape = (event) => event.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", closeOnEscape); };
  }, [open]);

  if (!open) return null;
  return <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/55 p-4" role="dialog" aria-modal="true" aria-labelledby="admission-modal-title" onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}>
    <div className="relative max-h-[calc(100vh-2rem)] w-full max-w-[1024px] overflow-y-auto rounded-[8px] border border-black/16 bg-[#f7f3ec] px-5 py-10 shadow-2xl md:px-6 md:py-[49px]">
      <button type="button" onClick={() => setOpen(false)} className="absolute right-4 top-3 text-[30px] leading-none text-[#211f1a]" aria-label="Close admission form">×</button>
      <h2 id="admission-modal-title" className="m-0 text-center font-instrument-serif text-[32px] uppercase leading-[1.3] text-[#1f2933] md:text-[40px]">Request for an admission</h2>
      <div className="mt-8"><ContactForm formSource="admission" variant="modal" onSuccess={() => setOpen(false)} /></div>
    </div>
  </div>;
}
