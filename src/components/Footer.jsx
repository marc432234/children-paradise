import Image from "next/image";
import AdmissionFormTrigger from "@/components/AdmissionFormTrigger";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#242855] pt-16 pb-6 px-6 lg:px-20 relative overflow-hidden">
      <Image src="/images/footer-deco.svg" alt="" className="absolute top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-[0.07]" width={1441} height={1025} aria-hidden="true" />
      <div className="max-w-[1280px] mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-8 pb-12 border-b border-white/10">
          <div className="flex flex-col gap-4">
            <a href="/" aria-label="Children's Paradise home" className="block w-[90px] h-[90px] overflow-hidden relative">
              <Image src="/images/footer-logo.png" alt="Children's Paradise" width={142} height={142} className="absolute -left-[26px] -top-[16px]" />
            </a>
            <p className="text-[14px] text-white/60 leading-[1.6] m-0 max-w-[240px]">A trusted educational home serving families across Hialeah and Miami Lakes for more than 25 years.</p>
          </div>
          <nav aria-label="Footer navigation">
            <p className="font-space-grotesk font-semibold text-[11px] text-white/40 tracking-[0.75px] uppercase m-0 mb-4">Navigate</p>
            <a href="/about" className="block text-[14px] text-white/60 no-underline py-1">About</a>
            <a href="/programs" className="block text-[14px] text-white/60 no-underline py-1">Programs</a>
            <a href="/schools" className="block text-[14px] text-white/60 no-underline py-1">Schools</a>
            <a href="/student-life" className="block text-[14px] text-white/60 no-underline py-1">Student Life</a>
            <a href="/blog" className="block text-[14px] text-white/60 no-underline py-1">Blog</a>
            <AdmissionFormTrigger className="block text-[14px] text-white/60 no-underline py-1">Admissions</AdmissionFormTrigger>
          </nav>
          <div>
            <p className="font-space-grotesk font-semibold text-[11px] text-white/40 tracking-[0.75px] uppercase m-0 mb-4">Parents</p>
            <a href="#" className="block text-[14px] text-white/60 no-underline py-1">Parent Portal</a>
            <a href="#" className="block text-[14px] text-white/60 no-underline py-1">School Calendar</a>
            <a href="#" className="block text-[14px] text-white/60 no-underline py-1">News & Updates</a>
            <a href="#" className="block text-[14px] text-white/60 no-underline py-1">FAQs</a>
          </div>
          <div>
            <p className="font-space-grotesk font-semibold text-[11px] text-white/40 tracking-[0.75px] uppercase m-0 mb-4">Locations</p>
            <a href="/schools" className="block text-[14px] text-white/60 no-underline py-1">Hialeah</a>
            <a href="/schools" className="block text-[14px] text-white/60 no-underline py-1">Miami Lakes</a>
          </div>
          <address className="not-italic">
            <p className="font-space-grotesk font-semibold text-[11px] text-white/40 tracking-[0.75px] uppercase m-0 mb-4">Contact</p>
            <a href="tel:+13058271772" className="block text-[14px] text-white/60 no-underline py-1">(305) 827-1772</a>
            <a href="mailto:info@childrensparadise.com" className="block text-[14px] text-white/60 no-underline py-1 break-all">info@childrensparadise.com</a>
            <span className="block text-[14px] text-white/60 py-1">Hialeah & Miami Lakes, FL</span>
          </address>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-5">
          <div className="flex gap-5 flex-wrap">
            <a href="#" className="text-[13px] text-white/50 no-underline">Privacy Policy</a>
            <a href="#" className="text-[13px] text-white/50 no-underline">Terms</a>
            <a href="#" className="text-[13px] text-white/50 no-underline">Accessibility</a>
          </div>
          <div className="flex gap-3 items-center">
            <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <Image src="/images/icon-instagram.svg" alt="" width={16} height={16} />
            </a>
            <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center shrink-0">
              <Image src="/images/icon-facebook.svg" alt="" width={18} height={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
