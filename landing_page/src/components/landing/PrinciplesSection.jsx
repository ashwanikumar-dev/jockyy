function PrinciplesSection() {
  return (
    <section id="about" className="border-t border-[#d9e5f1] bg-white">
      <div className="mx-auto w-[calc(100%-2rem)] max-w-[1440px] lg:w-[calc(100%-5rem)]">
        <div className="grid items-stretch lg:grid-cols-[27%_73%]">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center py-14 pr-10 lg:min-h-[430px] lg:pr-12">
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#091728]" />

              <span className="font-mono text-[9px] font-medium tracking-[0.2em] text-[#627895]">
                WHY JOCKY
              </span>
            </div>

            <h2 className="max-w-[350px] text-[42px] font-bold leading-[1.02] tracking-[-0.055em] text-[#091728] sm:text-[48px]">
              Built around
              <br />a few principles
              <span className="text-[#1268d8]">.</span>
            </h2>

            <p className="mt-6 max-w-[350px] text-[14px] leading-[1.65] text-[#627895]">
              JOCKY is designed for real investigations — combining a
              purpose-built language, a validated execution model and an
              evidence-centric approach to deliver consistent, trustworthy
              results.
            </p>
          </div>

          {/* =====================================================
              ENTIRE RIGHT SIDE = ONE DESIGN IMAGE
          ===================================================== */}
          <div className="relative border-l border-[#d9e5f1] bg-[#fbfdff]">
            <div className="flex min-h-[430px] items-center justify-center p-6 lg:p-7">
              <img
                src="/graphics/feature.png"
                alt="JOCKY core principles"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrinciplesSection;
