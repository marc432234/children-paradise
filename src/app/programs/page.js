import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import Header from "@/components/Header";
import TrustBar from "@/components/TrustBar";
import Admissions from "@/components/Admissions";
import CTABand from "@/components/CTABand";

export const metadata = {
  title: "Programs | Children's Paradise Learning Academies",
  description: "Explore Children's Paradise programmes from Early Learning through High School. Supporting children across Hialeah and Miami Lakes, Florida.",
};

const programs = [
  {
    num: "01",
    id: "early-learning",
    title: "Early Learning",
    subtitle: "A strong beginning starts with feeling supported.",
    description: [
      "Our early learning experience provides children with a nurturing environment for early development, care and foundational learning.",
      "Children have opportunities to explore, interact, create and begin developing the skills that will support their continued growth.",
    ],
    age: "Age: 4\u20135",
    cta: "Learn More",
    image: "/images/prog-early-learning.png",
    imageAlt: "Early Learning students at Children\u2019s Paradise",
  },
  {
    num: "02",
    id: "elementary",
    title: "Elementary",
    subtitle: "Building strong foundations for the years ahead.",
    description: [
      "Elementary school is an important stage of discovery, development and growing independence.",
      "Children\u2019s Paradise focuses on creating an environment where students can strengthen their academic foundations while developing confidence, curiosity and positive relationships.",
    ],
    age: "Grades K\u20135",
    cta: "Explore Elementary",
    image: "/images/prog-elementary.png",
    imageAlt: "Elementary students at Children\u2019s Paradise",
  },
  {
    num: "03",
    id: "junior-high",
    title: "Junior High",
    subtitle: "Growing confidence. Developing independence.",
    description: [
      "Junior high brings new challenges, new interests and greater independence.",
      "Children\u2019s Paradise provides an environment where students can continue developing academically while becoming more confident, responsible and prepared for the next stage of their education.",
    ],
    age: "Grades 6\u20138",
    cta: "Explore Junior High",
    image: "/images/prog-junior-high.png",
    imageAlt: "Junior High students at Children\u2019s Paradise",
  },
  {
    num: "04",
    id: "high-school",
    title: "High School",
    subtitle: "Preparing for what comes next.",
    description: [
      "High school is a time to deepen learning, discover strengths and begin preparing for life beyond school.",
      "At Children\u2019s Paradise, students continue their educational journey in an environment designed to support confidence, personal growth and preparation for their future.",
    ],
    age: "Grades 9\u201312",
    cta: "Explore High School",
    image: "/images/prog-high-school.png",
    imageAlt: "High School students at Children\u2019s Paradise",
  },
];

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Header activePage="programs" />

      {/* Hero */}
      <section className="bg-[#f7f3ec] relative overflow-hidden h-auto min-h-[500px] lg:h-[621px]" aria-label="Programs hero">
        <div className="absolute right-0 top-0 w-full lg:w-[828px] h-full lg:h-[620px] pointer-events-none">
          <Image src="/images/programs-hero.png" alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f7f3ec] from-0% via-[#f7f3ec]/80 via-30% to-transparent to-70%" />
        </div>
        <ScrollReveal>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20 py-16 lg:py-0 relative flex items-center min-h-[500px] lg:h-[621px]">
          <div className="w-full lg:w-[643px] flex flex-col gap-4 lg:gap-8">
            <p className="font-space-grotesk font-bold text-[13px] text-[#b98a2e] tracking-[1.82px] uppercase m-0">PROGRAMS</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <h1 className="font-instrument-serif text-[36px] md:text-[52px] lg:text-[64px] text-[#211f1a] uppercase tracking-[-1.02px] leading-[1.2] m-0 font-normal">A Journey That Grows With Your Child</h1>
                <p className="text-[17px] text-[#5b564c] leading-[1.6] m-0">From the early years through high school, Children&apos;s Paradise provides learning experiences designed to support children as they develop academically, socially and personally.</p>
              </div>
              <a href="/#admissions" className="btn-outline-black self-start">Schedule a Visit</a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </section>

      <TrustBar />

      {/* Every Stage Matters */}
      <section className="bg-white py-20 md:py-24 lg:py-[120px] px-6 lg:px-20">
        <ScrollReveal>
        <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-6 items-start">
          <div className="flex-1">
            <h2 className="font-instrument-serif text-[36px] md:text-[40px] lg:text-[48px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">Every Stage Matters</h2>
          </div>
          <div className="flex-1 text-[17px] text-[#5b564c] leading-[1.6] flex flex-col gap-4">
            <p className="m-0">Children change as they grow. Their questions become bigger, their interests evolve and their learning becomes more independent.</p>
            <p className="m-0">At Children&apos;s Paradise, each stage of the educational journey provides an environment where students can build skills, confidence and curiosity for what comes next.</p>
          </div>
        </div>
        </ScrollReveal>
      </section>

      {/* Programme Sections */}
      {programs.map((prog, index) => (
        <section
          key={prog.id}
          id={prog.id}
          className={`${index % 2 === 0 ? "bg-[#f7f3ec]" : "bg-white"} py-20 md:py-24 lg:py-[120px] px-6 lg:px-20`}
        >
          <ScrollReveal>
          <div className={`max-w-[1280px] mx-auto flex flex-col ${index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}>
            <div className="flex-1 flex flex-col gap-8">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <p className="font-medium text-[18px] text-[#5b564c] tracking-[2.45px] uppercase m-0">Program {prog.num}</p>
                  <h2 className="font-instrument-serif text-[36px] md:text-[40px] text-[#211f1a] uppercase leading-[1.2] m-0 font-normal">{prog.title}</h2>
                  <p className="font-medium text-[22px] text-[#5b564c] leading-[1.6] m-0">{prog.subtitle}</p>
                </div>
                <div className="text-[17px] text-[#5b564c] leading-[1.6] flex flex-col gap-4">
                  {prog.description.map((p, i) => (
                    <p key={i} className="m-0">{p}</p>
                  ))}
                </div>
                <p className="font-medium text-[17px] text-[#211f1a] m-0">{prog.age}</p>
              </div>
              <a href="#" className="btn-outline-black self-start">{prog.cta}</a>
            </div>
            <div className="w-full lg:w-[625px] h-[260px] lg:h-[469px] rounded-[9px] overflow-hidden shrink-0">
              <Image src={prog.image} alt={prog.imageAlt} width={625} height={469} className="w-full h-full object-cover" />
            </div>
          </div>
          </ScrollReveal>
        </section>
      ))}

      <Admissions />
      <CTABand />
    </div>
  );
}
