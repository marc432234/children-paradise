import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";
import Experience from "@/components/Experience";

const schools = [
  { name: "CP Learning Academy #1", address: "7755 West 4 Avenue #107, Hialeah, FL 33014", phone: "(305) 827-1772", email: "learningparadise1@gmail.com" },
  { name: "CP Learning Academy #2", address: "21 East 59 Street, Hialeah, FL 33013", phone: "(305) 827-7811", email: "learningparadise2@gmail.com" },
  { name: "CP Learning Academy #3", address: "2400 West 80 Street Bay 1, Hialeah, FL 33016", phone: "(305) 823-4040", email: "learningparadise3@gmail.com" },
  { name: "CP Learning Academy #4", address: "470-B West 49 Street, Hialeah, FL 33012", phone: "(305) 992-8696", email: "learningparadise4@gmail.com" },
  { name: "CP Learning Academy #5", address: "15520 Northwest 77 Court, Miami Lakes, FL 33016", phone: "(305) 821-3023", email: "learningparadise5@gmail.com" },
  { name: "CP Learning Academy #6", address: "1927 W 68th St, Hialeah, FL 33014", phone: "(305) 826-1379", email: "learningparadisecenter6@gmail.com" },
  { name: "Aladdin's Paradise Academy", address: "7605 West 10th Avenue, Hialeah, FL 33014", phone: "(305) 556-8223", email: "aladdinparadise@gmail.com" },
  { name: "CP Learning Academy #8", address: "3168 W 76th Street, Hialeah, FL 33018", phone: "(305) 818-3044", email: "learningparadise8@gmail.com" },
  { name: "CP Learning Academy #9", address: "8567 NW 186th St, Miami Lakes, FL 33015", phone: "(305) 829-0005", email: "lovingstartcenter@gmail.com" },
];

const programs = [
  { num: "01", age: "AGES: 4–5", title: "Early Learning", description: "Early development, care and foundational learning in a nurturing environment.", image: "/images/program-1.png" },
  { num: "02", age: "GRADES K–5", title: "Elementary", description: "Building strong academic and personal foundations for the years ahead.", image: "/images/program-2.png" },
  { num: "03", age: "GRADES 6–8", title: "Junior High", description: "Developing independence, confidence and deeper learning.", image: "/images/program-3.png" },
  { num: "04", age: "GRADES 9–12", title: "High School", description: "Preparing students for future academic and career opportunities.", image: "/images/program-4.png" },
];

const whyChoose = [
  { label: "Experience", title: "25+ years, one focus", description: "More than two decades of experience serving children and families across South Florida." },
  { label: "Community", title: "A growing local presence", description: "Nine locations across Hialeah and Miami Lakes, rooted in the neighbourhoods we serve." },
  { label: "Learning", title: "Designed around development", description: "Educational experiences shaped around how children actually grow and learn." },
  { label: "Care", title: "Supportive, every day", description: "A welcoming environment where every child is known, not just enrolled." },
  { label: "Growth", title: "One school, every stage", description: "Families can stay with Children's Paradise as their child progresses from early learning through high school — one trusted community, start to finish." },
];

const testimonials = [
  { name: "Maria G.", role: "Parent — Hialeah, FL", headline: "My child has never been happier.", quote: "Great school, flexible environment, amazing staff. My child has never been happier.", image: "/images/testimonial-maria.png" },
  { name: "Jessica R.", role: "Parent — Hialeah, FL", headline: "They teach them so many things.", quote: "Great and safe environment for our kids. My child started here at 9 months and has learned so many things. I highly recommend them.", image: "/images/testimonial-jessica.png" },
  { name: "Daniel M.", role: "Parent — Hialeah, FL", headline: "Loving, caring and engaging.", quote: "My two kids have been in this school for over four years. The teachers are very loving and provide multiple interactive activities. The school is clean and organised.", image: "/images/testimonial-daniel.png" },
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

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header activePage="home" />

      {/* ===== HERO ===== */}
      <section className="bg-[#f7f3ec] relative overflow-hidden">
        <Image src="/images/hero-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-100" width={1441} height={1025} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-20 py-16 lg:py-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative">
          <div className="w-full lg:w-[519px] shrink-0 flex flex-col gap-4">
            <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">Hialeah &amp; Miami Lakes, Florida</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="font-instrument-serif text-[40px] md:text-[52px] lg:text-[64px] text-[#211f1a] uppercase tracking-[-1.02px] leading-[1.15] m-0 font-normal">
                  Where every child<br />has <em className="italic text-[#1f3d30]">room to grow.</em>
                </h1>
                <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">For more than 25 years, Children&apos;s Paradise has helped children learn, grow and thrive in a caring educational environment across Hialeah and Miami Lakes.</p>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <a href="#programs" className="btn-gold">Explore Our Programs</a>
                <a href="#admissions" className="btn-outline-black">Schedule a Visit</a>
              </div>
              <p className="font-space-grotesk font-semibold text-[12px] text-[#948d7e] tracking-[0.78px] uppercase m-0 pt-2">25+ YEARS OF EXPERIENCE&nbsp;&nbsp;•&nbsp;&nbsp;9 LOCATIONS</p>
            </div>
          </div>
          <div className="flex-1 h-[300px] lg:h-[620px] rounded-lg overflow-hidden relative">
            <div className="absolute top-0 right-0 z-10 bg-white shadow-[0_20px_20px_rgba(16,37,56,0.14)] flex items-center gap-3.5 p-4 rounded max-w-[240px]">
              <span className="font-fraunces font-semibold text-[28px] text-[#1f3d30] leading-[1.4] whitespace-nowrap">25+</span>
              <p className="text-[12px] text-[#5b564c] leading-[1.4] m-0">Years helping Miami-area families raise confident learners</p>
            </div>
            <Image src="/images/hero-photo-new.png" alt="Children's Paradise students learning together" width={680} height={620} className="w-full h-full object-cover" priority />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ===== ABOUT ===== */}
      <section id="about" className="bg-[#f7f3ec] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <ScrollReveal>
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-[500px] h-[260px] lg:h-[520px] shrink-0 rounded-[10px] overflow-hidden">
            <Image src="/images/about-photo-new.png" alt="Children engaged in a classroom activity at Children's Paradise" width={500} height={520} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="font-medium text-[16px] text-[#5b564c] tracking-[2.45px] uppercase m-0">About Children&apos;s Paradise</p>
              <div className="flex flex-col gap-4">
                <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">More than a school. A place to grow.</h2>
                <div className="text-[17px] text-[#5b564c] leading-[1.6] flex flex-col gap-4">
                  <p className="m-0">Children&apos;s Paradise was built around a simple idea: children do their best learning when they feel safe, known and supported. Across our Hialeah and Miami Lakes locations, we focus on the whole child — academically, socially and personally — at every stage of their education.</p>
                  <p className="m-0">For more than 25 years, families have trusted us to be a steady, capable partner in their child&apos;s growth, from the earliest years through high school.</p>
                </div>
              </div>
            </div>
            <a href="#programs" className="font-semibold text-[16px] text-[#1f3d30] no-underline border-b border-[#1f3d30] pb-0.5 w-fit">Discover Our Story →</a>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===== PROGRAMS ===== */}
      <section id="programs" className="bg-[#eee7d8] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20 relative overflow-hidden">
        <Image src="/images/programs-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-50" width={1441} height={1025} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative">
          <ScrollReveal>
          <header className="max-w-[727px] flex flex-col gap-2.5">
            <p className="font-medium text-[16px] text-[#5b564c] tracking-[2.45px] uppercase m-0">Programs</p>
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">A journey that grows with your child</h2>
            <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">From the early years through the next stages of education, explore learning experiences designed to help students grow with confidence.</p>
          </header>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-stagger>
            {programs.map((p) => (
              <ScrollReveal key={p.num}>
              <article className="bg-white flex flex-col gap-3 rounded-lg p-4 pb-6">
                <div className="flex flex-col gap-3 items-center">
                  <div className="w-9 h-9 rounded-full bg-[#1f3d30] border-4 border-[#eee7d8] flex items-center justify-center shrink-0">
                    <span className="font-bold text-[13px] text-[#e7d3a2]">{p.num}</span>
                  </div>
                  <div className="h-[200px] w-full rounded overflow-hidden">
                    <Image src={p.image} alt={`${p.title} at Children's Paradise`} width={300} height={200} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="font-medium text-[13px] text-[#b98a2e] tracking-[0.48px] uppercase m-0">{p.age}</p>
                    <h3 className="font-instrument-serif text-[28px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">{p.title}</h3>
                    <p className="text-[15px] text-[#5b564c] leading-[1.4] mt-2 m-0">{p.description}</p>
                  </div>
                  <a href="#" className="font-medium text-[14px] text-[#242855] no-underline">Explore Program →</a>
                </div>
              </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why-choose" className="bg-white py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <ScrollReveal>
        <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
          <div className="w-full lg:w-[340px] shrink-0 flex flex-col gap-[23px]">
            <p className="font-semibold text-[14px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">Why Families Choose Us</p>
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] leading-[1.2] m-0 font-normal">A school community built on trust</h2>
          </div>
          <div className="flex-1 flex flex-col gap-[18px]">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1 py-6 flex flex-col gap-2">
                <p className="font-medium text-[14px] text-[#b98a2e] uppercase m-0">{whyChoose[0].label}</p>
                <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.4] m-0 font-normal">{whyChoose[0].title}</h3>
                <p className="text-[15px] text-[#5b564c] leading-[1.6] m-0">{whyChoose[0].description}</p>
              </div>
              <div className="flex-1 py-6 flex flex-col gap-2">
                <p className="font-medium text-[14px] text-[#b98a2e] uppercase m-0">{whyChoose[1].label}</p>
                <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.4] m-0 font-normal">{whyChoose[1].title}</h3>
                <p className="text-[15px] text-[#5b564c] leading-[1.6] m-0">{whyChoose[1].description}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 border-t border-[#211f1a]/12">
              <div className="flex-1 py-6 flex flex-col gap-2">
                <p className="font-medium text-[14px] text-[#b98a2e] uppercase m-0">{whyChoose[2].label}</p>
                <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.4] m-0 font-normal">{whyChoose[2].title}</h3>
                <p className="text-[15px] text-[#5b564c] leading-[1.6] m-0">{whyChoose[2].description}</p>
              </div>
              <div className="flex-1 py-6 flex flex-col gap-2">
                <p className="font-medium text-[14px] text-[#b98a2e] uppercase m-0">{whyChoose[3].label}</p>
                <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.4] m-0 font-normal">{whyChoose[3].title}</h3>
                <p className="text-[15px] text-[#5b564c] leading-[1.6] m-0">{whyChoose[3].description}</p>
              </div>
            </div>
            <div className="border-t border-[#211f1a]/12 py-6 flex flex-col gap-2">
              <p className="font-medium text-[14px] text-[#b98a2e] uppercase m-0">{whyChoose[4].label}</p>
              <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.4] m-0 font-normal">{whyChoose[4].title}</h3>
              <p className="text-[15px] text-[#5b564c] leading-[1.6] m-0">{whyChoose[4].description}</p>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* ===== STUDENT LIFE ===== */}
      <section id="student-life" className="bg-[#242855] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20 relative overflow-hidden">
        <Image src="/images/student-life-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-[0.12]" width={1441} height={1025} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative">
          <ScrollReveal>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="max-w-[706px] flex flex-col gap-4">
              <p className="font-medium text-[15px] text-white/68 tracking-[2.45px] uppercase m-0">Student Life</p>
              <div className="flex flex-col gap-2">
                <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-white uppercase leading-[1.2] m-0 font-normal">Learning happens everywhere</h2>
                <p className="text-[17px] text-white/68 leading-[1.55] m-0">A look at real classrooms, real teachers and real moments from Children&apos;s Paradise.</p>
              </div>
            </div>
            <a href="#" className="btn-outline-gold shrink-0">See Life at Children&apos;s Paradise →</a>
          </div>
          </ScrollReveal>
          <div className="flex flex-col gap-6">
            <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[300px]">
              <div className="flex-1 rounded-lg overflow-hidden">
                <Image src="/images/sl-1.png" alt="Students celebrating" width={600} height={300} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-[340px] shrink-0 rounded-lg overflow-hidden">
                  <Image src="/images/sl-2.png" alt="Student working on a project" width={340} height={300} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-row md:flex-col gap-6">
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <Image src="/images/sl-3.png" alt="Students on a school trip" width={300} height={138} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 rounded-lg overflow-hidden">
                    <Image src="/images/sl-4.png" alt="Teacher with students in class" width={300} height={138} className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>
            </div>
            </ScrollReveal>
            <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-6 h-auto md:h-[220px]">
              <div className="flex-1 rounded-lg overflow-hidden">
                <Image src="/images/sl-5.png" alt="Christmas group photo" width={600} height={220} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 rounded-lg overflow-hidden">
                <Image src="/images/sl-6.png" alt="School performance" width={600} height={220} className="w-full h-full object-cover" />
              </div>
            </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Experience />

      {/* ===== TESTIMONIALS ===== */}
      <section className="bg-[#eee7d8] py-20 md:py-24 lg:py-[120px] px-6 lg:px-20 relative overflow-hidden">
        <Image src="/images/testimonials-deco.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-180 scale-y-[-1] w-[1441px] h-[1025px] pointer-events-none select-none opacity-[0.45]" width={1441} height={1025} aria-hidden="true" />
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 relative">
          <ScrollReveal>
          <header className="max-w-[640px]">
            <p className="font-medium text-[15px] text-[#5b564c] tracking-[2.45px] uppercase m-0 mb-1">Parent Testimonials</p>
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">Loved by families. Built on trust.</h2>
          </header>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-stagger>
            {testimonials.map((t) => (
              <ScrollReveal key={t.name} className="h-full">
              <blockquote className="bg-[#fffdf8] border border-[#211f1a]/7 rounded-[10px] p-8 flex flex-col h-full m-0">
                <p className="font-fraunces text-[48px] text-[#ba923a] leading-none m-0">&ldquo;</p>
                <div className="flex flex-col gap-3 mt-1 flex-1">
                  <p className="font-semibold text-[17px] text-[#211f1a] leading-[1.4] m-0">&ldquo;{t.headline}&rdquo;</p>
                  <p className="text-[15px] text-[#211f1a] leading-[1.5] m-0">{t.quote}</p>
                </div>
                <footer className="flex items-center gap-3 pt-6 mt-auto">
                  <Image src={t.image} alt={t.name} width={42} height={42} className="w-[42px] h-[42px] rounded-full border border-[#efdd95] object-cover shrink-0" />
                  <div>
                    <p className="font-semibold text-[14px] text-[#211f1a] m-0">{t.name}</p>
                    <p className="text-[13px] text-[#948d7e] m-0">{t.role}</p>
                  </div>
                </footer>
              </blockquote>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR SCHOOLS ===== */}
      <section id="schools" className="bg-white py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <ScrollReveal>
        <div className="max-w-[1440px] mx-auto flex flex-col gap-12 items-center">
          <header className="max-w-[640px] text-center">
            <p className="font-medium text-[15px] text-[#5b564c] tracking-[2.45px] uppercase m-0">Our Schools</p>
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[44px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">Find your Children&apos;s Paradise</h2>
            <p className="text-[17px] text-[#5b564c] leading-[1.5] mt-4 m-0">With locations throughout Hialeah and Miami Lakes, finding a Children&apos;s Paradise near your family is easy.</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full" data-reveal-stagger>
            {schools.map((s, i) => {
              const isLastOdd = i === schools.length - 1 && schools.length % 2 !== 0;
              return (
              <ScrollReveal key={s.name} className={`h-full ${isLastOdd ? "md:col-span-2" : ""}`}>
              <div className={`bg-[#fffdf8] border border-[#211f1a]/8 rounded-[10px] p-6 h-full flex items-start justify-between gap-4 ${isLastOdd ? "md:w-1/2 mx-auto" : ""}`}>
                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="font-instrument-serif text-[22px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">{s.name}</h3>
                  <address className="not-italic flex flex-col gap-1.5">
                    <div className="flex items-start gap-2"><LocationIcon /><span className="text-[14px] text-[#5b564c] leading-[1.5]">{s.address}</span></div>
                    <div className="flex items-center gap-2"><PhoneIcon /><a href={`tel:${s.phone.replace(/[^\d]/g, "")}`} className="text-[14px] text-[#5b564c] no-underline">{s.phone}</a></div>
                    <div className="flex items-center gap-2"><EmailIcon /><a href={`mailto:${s.email}`} className="text-[14px] text-[#5b564c] no-underline">{s.email}</a></div>
                  </address>
                </div>
                <div className="flex flex-col gap-2 shrink-0 items-end">
                  <a href="#" className="font-medium text-[13px] text-[#1f3d30] no-underline">Get Directions</a>
                  <a href="#" className="font-medium text-[13px] text-[#1f3d30] no-underline">Explore</a>
                </div>
              </div>
              </ScrollReveal>
              );
            })}
          </div>
        </div>
        </ScrollReveal>
      </section>

      <Admissions />

      <CTABand />
    </div>
  );
}
