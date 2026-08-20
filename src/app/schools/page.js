import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Our Schools | Children's Paradise Learning Academies",
  description: "Find your nearest Children's Paradise across 9 locations in Hialeah and Miami Lakes, Florida. Get directions, contact details and explore each campus.",
};

const schools = [
  { name: "CP Learning Academy #1", address: "7755 West 4 Avenue #107, Hialeah, FL 33014", phone: "(305) 827-1772", email: "learningparadise1@gmail.com", map: "7755+West+4+Avenue+107+Hialeah+FL+33014" },
  { name: "CP Learning Academy #2", address: "21 East 59 Street, Hialeah, FL 33013", phone: "(305) 827-7811", email: "learningparadise2@gmail.com", map: "21+East+59+Street+Hialeah+FL+33013" },
  { name: "CP Learning Academy #3", address: "2400 West 80 Street Bay 1, Hialeah, FL 33016", phone: "(305) 823-4040", email: "learningparadise3@gmail.com", map: "2400+West+80+Street+Hialeah+FL+33016" },
  { name: "CP Learning Academy #4", address: "470-B West 49 Street, Hialeah, FL 33012", phone: "(305) 992-8696", email: "learningparadise4@gmail.com", map: "470-B+West+49+Street+Hialeah+FL+33012" },
  { name: "CP Learning Academy #5", address: "15520 Northwest 77 Court, Miami Lakes, FL 33016", phone: "(305) 821-3023", email: "learningparadise5@gmail.com", map: "15520+Northwest+77+Court+Miami+Lakes+FL+33016" },
  { name: "CP Learning Academy #6", address: "1927 W 68th St, Hialeah, FL 33014", phone: "(305) 826-1379", email: "learningparadisecenter6@gmail.com", map: "1927+W+68th+St+Hialeah+FL+33014" },
  { name: "Aladdin's Paradise Academy", address: "7605 West 10th Avenue, Hialeah, FL 33014", phone: "(305) 556-8223", email: "aladdinparadise@gmail.com", map: "7605+West+10th+Avenue+Hialeah+FL+33014" },
  { name: "CP Learning Academy #8", address: "3168 W 76th Street, Hialeah, FL 33018", phone: "(305) 818-3044", email: "learningparadise8@gmail.com", map: "3168+W+76th+Street+Hialeah+FL+33018" },
  { name: "CP Learning Academy #9", address: "8567 NW 186th St, Miami Lakes, FL 33015", phone: "(305) 829-0005", email: "lovingstartcenter@gmail.com", map: "8567+NW+186th+St+Miami+Lakes+FL+33015" },
];

function LocationIcon() {
  return <Image src="/images/icon-location.svg" alt="" width={15} height={15} className="shrink-0 mt-0.5" />;
}
function PhoneIcon() {
  return <Image src="/images/icon-phone.svg" alt="" width={15} height={15} className="shrink-0" />;
}
function EmailIcon() {
  return <Image src="/images/icon-email.svg" alt="" width={15} height={15} className="shrink-0" />;
}

export default function SchoolsPage() {
  return (
    <div className="min-h-screen">
      <Header activePage="schools" />

      {/* Hero */}
      <section className="bg-[#f7f3ec] relative overflow-hidden h-auto min-h-[500px] lg:h-[621px]" aria-label="Our Schools hero">
        <div className="absolute right-0 top-0 w-full lg:w-[828px] h-full lg:h-[620px] pointer-events-none">
          <Image src="/images/schools-hero.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec] from-0% via-[#f7f3ec]/85 via-35% to-transparent to-65%" />
        </div>
        <ScrollReveal>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16 lg:py-0 relative flex items-center min-h-[500px] lg:h-[621px]">
          <div className="w-full lg:w-[580px] flex flex-col gap-4 lg:gap-8">
            <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">OUR SCHOOLS</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="font-instrument-serif text-[36px] md:text-[52px] lg:text-[64px] text-[#211f1a] uppercase tracking-[-1.02px] leading-[1.15] m-0 font-normal">Find Your Children&apos;s Paradise</h1>
                <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">With locations throughout Hialeah and Miami Lakes, there&apos;s a Children&apos;s Paradise within reach of families across the communities we serve.</p>
              </div>
              <a href="#schools-list" className="btn-outline-black self-start">Find a Location Near You</a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <TrustBar />

      {/* Schools List */}
      <section id="schools-list" className="bg-white py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-12 items-center">
          <ScrollReveal>
          <header className="max-w-[640px] text-center">
            <p className="font-medium text-[15px] text-[#5b564c] tracking-[2.45px] uppercase m-0 mb-2">OUR SCHOOLS</p>
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 mb-4 font-normal">Find your Children&apos;s Paradise</h2>
            <p className="text-[17px] text-[#5b564c] leading-[1.5] m-0">With locations throughout Hialeah and Miami Lakes, finding a Children&apos;s Paradise near your family is easy.</p>
          </header>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full" data-reveal-stagger>
            {schools.map((s, i) => {
              const isLastOdd = i === schools.length - 1 && schools.length % 2 !== 0;
              return (
              <ScrollReveal key={s.name} className={`h-full ${isLastOdd ? "md:col-span-2" : ""}`}>
              <div className={`bg-[#fffdf8] border border-[#211f1a]/8 rounded-[10px] p-7 h-full flex items-start justify-between gap-4 ${isLastOdd ? "md:w-1/2 mx-auto" : ""}`}>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">{s.name}</h3>
                  <address className="not-italic flex flex-col gap-1.5">
                    <div className="flex items-start gap-2"><LocationIcon /><span className="text-[14px] text-[#5b564c] leading-[1.5]">{s.address}</span></div>
                    <div className="flex items-center gap-2"><PhoneIcon /><a href={`tel:${s.phone.replace(/[^\d]/g, "")}`} className="text-[14px] text-[#5b564c] no-underline">{s.phone}</a></div>
                    <div className="flex items-center gap-2"><EmailIcon /><a href={`mailto:${s.email}`} className="text-[14px] text-[#5b564c] no-underline">{s.email}</a></div>
                  </address>
                </div>
                <div className="flex flex-col gap-2 shrink-0 items-end">
                  <a href={`https://maps.google.com/?q=${s.map}`} target="_blank" rel="noopener" className="font-medium text-[13px] text-[#1f3d30] no-underline">Get Directions</a>
                  <a href="#" className="font-medium text-[13px] text-[#1f3d30] no-underline">Explore Location</a>
                </div>
              </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      <Admissions />
      <CTABand />
    </div>
  );
}
