import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0e1a40] text-white flex flex-col">
      <header className="flex items-center justify-between px-10 py-6">
        <div className="text-xl font-semibold tracking-wider">
          <span className="px-3 py-1 border border-[#946b2d] rounded-full text-xs font-medium text-[#946b2d]">
            DATA ANALYST
          </span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          {["Home", "About Me", "Skill", "Background", "Projects", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="hover:text-[#946b2d] transition-colors"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </header>

      <main
        id="home"
        className="flex-1 flex flex-col md:flex-row items-center justify-center gap-12 px-10 pb-16"
      >
        <section className="max-w-xl">
          <div className="inline-flex items-center rounded-full border border-[#946b2d] px-5 py-2 mb-6 bg-[#222f5b]/40">
            <span className="text-xs font-semibold tracking-[0.25em] text-[#946b2d]">
              DATA ANALYST
            </span>
            <span className="text-xs font-semibold tracking-[0.25em] ml-1">
              PORTFOLIO
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            <span className="block">MIKAEL</span>
            <span className="block text-[#946b2d]">PRAPASKALIS</span>
            <span className="block">G</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-[#d3d3d3]">
            I help people finding{" "}
            <span className="text-[#946b2d]">insights</span> through{" "}
            <span className="text-[#946b2d]">data</span>
          </p>

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center rounded-full border border-[#946b2d] px-6 py-2 text-sm font-semibold hover:bg-[#946b2d] hover:text-[#0e1a40] transition-colors"
            >
              About Me
            </a>
          </div>
        </section>

        <section className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center">
          <div className="absolute inset-4 rounded-full bg-[#946b2d]" />

          <div className="absolute inset-1 rounded-full border-[10px] border-[#222f5b]" />

          <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden rounded-full bg-[#000000]">
            <Image
              src="/images/mikael.jpeg"
              alt="Mikael Prapaskalis G"
              fill
              className="object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
