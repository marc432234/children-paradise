import Image from "next/image";
import MobileNav from "@/components/MobileNav";
import AdmissionFormTrigger from "@/components/AdmissionFormTrigger";

export default function Header({ activePage }) {
  const links = [
    { label: "About", href: "/about" },
    { label: "Programs", href: "/programs" },
    { label: "Schools", href: "/schools" },
    { label: "Student Life", href: "/student-life" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-[5px] bg-[#f7f3ec]/90 border-b border-[#211f1a]/16">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-20 h-[85px] flex items-center justify-between">
        <a href="/" aria-label="Children's Paradise home" className="w-[60px] h-[60px] shrink-0">
          <Image src="/images/logo.png" alt="Children's Paradise" width={60} height={60} priority />
        </a>
        <nav aria-label="Main navigation" className="hidden lg:block">
          <ul className="flex items-center gap-9 list-none m-0 p-0">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`text-[14.5px] no-underline transition-colors ${
                    activePage === link.label.toLowerCase()
                      ? "font-semibold text-[#1f3d30]"
                      : "font-medium text-[#5b564c] hover:text-[#211f1a]"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li><AdmissionFormTrigger className={`text-[14.5px] no-underline transition-colors ${activePage === "admissions" ? "font-semibold text-[#1f3d30]" : "font-medium text-[#5b564c] hover:text-[#211f1a]"}`}>Admissions</AdmissionFormTrigger></li>
          </ul>
        </nav>
        <div className="hidden lg:flex items-center gap-5">
          <a href="/#schools" className="font-semibold text-[14.5px] text-[#1f3d30] no-underline hover:underline">Find a Location</a>
          <AdmissionFormTrigger className="btn-gold">Schedule a Visit</AdmissionFormTrigger>
        </div>
        <MobileNav />
      </div>
    </header>
  );
}
