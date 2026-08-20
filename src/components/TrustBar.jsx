export default function TrustBar() {
  return (
    <section className="bg-[#242855] py-12 px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-6">
        <div className="flex-1 md:border-l md:border-white/18 md:pl-6 flex flex-col gap-[7px]">
          <span className="font-instrument-serif text-[40px] text-[#e7d3a2] leading-none">25+</span>
          <span className="text-[14px] text-white/78">Years of Experience</span>
        </div>
        <div className="flex-1 md:border-l md:border-white/18 md:pl-6 flex flex-col gap-[7px]">
          <span className="font-instrument-serif text-[40px] text-[#e7d3a2] leading-none">9</span>
          <span className="text-[14px] text-white/78">Locations</span>
        </div>
        <div className="flex-[2] md:border-l md:border-white/18 md:pl-6 flex flex-col gap-[7px]">
          <span className="font-instrument-serif text-[30px] text-[#e7d3a2] leading-[1.2]">Hialeah + Miami Lakes</span>
          <span className="text-[14px] text-white/78">Serving Local Families</span>
        </div>
        <div className="flex-[2] md:border-l md:border-white/18 md:pl-6 flex flex-col gap-[7px]">
          <span className="font-instrument-serif text-[30px] text-[#e7d3a2] leading-[1.2]">Multiple Learning Stages</span>
          <span className="text-[14px] text-white/78">Growing With Students</span>
        </div>
      </div>
    </section>
  );
}
