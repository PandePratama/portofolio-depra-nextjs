"use client";

import type { FormEvent } from "react";
import Image from "next/image";
import RotatingText from "./components/RotatingText";
import BlurText from "./components/BlurText";
import AnimatedContent from "./components/AnimatedContent";
import Particles from "./components/Particles";
import GradientText from "./components/GradientText";
import ScrollVelocity from "./components/ScrollVelocity";
import { projectsData } from "./data/projectsData";
import { techStackData } from "./data/techStackData";

type Project = {
  id: string | number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
};

export default function Home() {
  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Pertanyaan portofolio dari ${name}`);
    const body = encodeURIComponent(`Nama: ${name}\nSurel: ${email}\n\n${message}`);

    window.location.href = `mailto:pande@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D] text-white selection:bg-[#A7D129] selection:text-black">

      {/* NAVBAR CENTERED (FLOATING PILL) */}
      <div className="fixed top-3 sm:top-6 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 pointer-events-none">
        <nav className="pointer-events-auto bg-[#19222D]/80 backdrop-blur-md border border-white/15 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg shadow-black/20 flex items-center justify-center">
          <div className="flex items-center gap-4 sm:gap-8 text-xs sm:text-sm font-medium text-gray-300">
            <a href="#home" className="hover:text-[#A7D129] transition-colors">Beranda</a>
            <a href="#skills" className="hover:text-[#A7D129] transition-colors">Keahlian</a>
            <a href="#projects" className="hover:text-[#A7D129] transition-colors">Proyek</a>
            <a href="#contact" className="hover:text-[#A7D129] transition-colors">Kontak</a>
          </div>
        </nav>
      </div>

      {/* Background Particles */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <Particles
          particleColors={['#ffffff', '#A7D129']}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* HERO SECTION */}
      <main id="home" className="container mx-auto px-5 sm:px-6 md:px-12 min-h-screen flex flex-col justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-0 items-center min-h-[85vh]">

          {/* LEFT SECTION - TEXT */}
          <div className="col-span-1 lg:col-span-7 flex flex-col gap-5 sm:gap-6 order-2 lg:order-1 pt-6 sm:pt-10 lg:pt-0">
            <AnimatedContent
              distance={50}
              direction="vertical"
              reverse={false}
              duration={1.2}
              ease="back.out(1.7)"
              initialOpacity={0}
              animateOpacity
              scale={1}
              threshold={0.2}
              delay={0.1}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <h1 className="text-xl md:text-2xl font-medium text-gray-300 tracking-wide">
                  Halo, saya siap bergabung sebagai Web Developer
                </h1>
                {/* <RotatingText
                  texts={["Pengembang Web", "Pengembang Sisi Server", "Analis SEO"]}
                  mainClassName="px-4 bg-[#A7D129] text-[#19222D] overflow-hidden py-1 rounded-md text-xl md:text-2xl font-bold inline-flex shadow-[0_0_15px_rgba(167,209,41,0.4)] transition-all"
                  staggerFrom="last"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                /> */}
              </div>
            </AnimatedContent>

            <div className="flex flex-col items-start leading-tight">
              <BlurText
                text="Pande Gede Pratama Artha"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-5xl font-extrabold text-white"
              />
              <BlurText
                text="Merancang Solusi Digital."
                delay={300}
                animateBy="words"
                direction="top"
                className="text-2xl sm:text-3xl md:text-5xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#A7D129] mt-2"
              />
            </div>

            <BlurText
              text="Saya merancang pengalaman digital yang menarik, fungsional, dan mudah digunakan. Saya bersemangat membangun kode yang efisien, basis data yang andal, serta antarmuka yang intuitif."
              delay={450}
              animateBy="words"
              direction="top"
              className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mt-3 sm:mt-4 leading-relaxed"
            />

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-4 sm:mt-6">
              <GradientText
                colors={["#A7D129", "#40ffaa", "#A7D129"]}
                animationSpeed={3}
                showBorder={false}
                className="w-full sm:w-auto px-8 py-3 rounded-full font-semibold text-[#19222D] text-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
              >
                Hubungi Saya
              </GradientText>

              <a href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-full border border-gray-500 text-white font-semibold hover:bg-white/10 transition-colors duration-300 text-center">
                Lihat Proyek
              </a>
            </div>
          </div>

          {/* FOTO PROFIL */}
          <div className="col-span-1 lg:col-span-5 w-full flex justify-center items-center order-1 lg:order-2 relative">
            <div className="relative aspect-[4/5] w-full max-w-[360px] sm:max-w-[400px] lg:max-w-[460px]">
              <Image
                src="/assets/images/depra1.png"
                alt="Potret Pande Gede Pratama Artha"
                fill
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 40vw"
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </main>

      {/* MARQUEE SECTION
      <div className="w-full bg-[#A7D129] py-6 relative z-10">
        <ScrollVelocity
          texts={['Next.js • React • Laravel • PostgreSQL • Docker • Git • TailwindCSS •']}
          className="text-3xl md:text-4xl font-bold text-[#19222D] uppercase tracking-wider"
        />
      </div> */}

      {/* TECH STACK SECTION */}
      <section id="skills" className="py-16 sm:py-24 bg-[#19222D] relative z-10 border-t border-white/5">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">

          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
            <BlurText
              text="Teknologi & Keahlian"
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-gray-400 max-w-xl">
              Bahasa pemrograman, framework, dan perangkat lunak yang saya gunakan dalam pengembangan aplikasi web dan pengelolaan infrastruktur server.
            </p>
          </div>

          <AnimatedContent
            distance={40}
            direction="vertical"
            duration={0.8}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {techStackData.map((group, idx) => (
                <div
                  key={idx}
                  className="bg-[#11171f] border border-white/10 rounded-2xl p-5 sm:p-6 flex flex-col gap-6 hover:border-[#A7D129]/30 transition-all duration-300 shadow-lg"
                >
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="text-xl font-bold text-white">{group.category}</h3>
                    <span className="w-3 h-3 rounded-full bg-[#A7D129] shadow-[0_0_10px_#A7D129]"></span>
                  </div>

                  <div className="flex flex-col gap-4">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3 sm:p-4 bg-[#19222D] rounded-xl border border-white/5 hover:border-white/15 transition-all group"
                      >
                        <div className="flex justify-between items-center mb-1.5">
                          <span className="font-semibold text-white group-hover:text-[#A7D129] transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded bg-[#A7D129]/10 text-[#A7D129] border border-[#A7D129]/20">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>

        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen bg-[#11171f] relative z-10 py-16 sm:py-24 border-t border-white/5">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">
          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
            <BlurText
              text="Proyek Pilihan"
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-gray-400 max-w-xl">
              Beberapa karya pilihan saya, mulai dari antarmuka interaktif hingga sistem sisi server yang andal.
            </p>
          </div>

          {/* AnimatedContent membungkus seluruh grid agar semua kartu dirender bersamaan */}
          <AnimatedContent
            distance={40}
            direction="vertical"
            reverse={false}
            duration={0.8}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
              {projectsData.map((project: Project) => (
                <div
                  key={project.id}
                  className="bg-[#19222D] border border-white/10 rounded-2xl p-5 sm:p-6 h-full flex flex-col hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(167,209,41,0.1)] hover:border-[#A7D129]/30 transition-all duration-300 group"
                >
                  {/* Container Gambar Proyek */}
                  <div className="w-full h-48 bg-[#0f141b] rounded-xl mb-6 overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Overlay Efek Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#19222D] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity"></div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#A7D129] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 flex-grow text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-[#A7D129]/10 text-[#A7D129] rounded-full border border-[#A7D129]/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AnimatedContent>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen bg-[#19222D] relative z-10 py-16 sm:py-24 border-t border-white/5 flex flex-col justify-between">
        <div className="container mx-auto px-5 sm:px-6 md:px-12">

          <div className="flex flex-col items-center justify-center mb-12 sm:mb-16 text-center">
            <BlurText
              text="Mari Terhubung"
              delay={100}
              animateBy="words"
              direction="bottom"
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            />
            <p className="text-gray-400 max-w-xl">
              Punya ide proyek, tawaran pekerjaan, atau ingin berdiskusi? Silakan kirim pesan melalui formulir berikut.
            </p>
          </div>

          <AnimatedContent
            distance={40}
            direction="vertical"
            duration={0.8}
            ease="power2.out"
            initialOpacity={0}
            animateOpacity
            threshold={0.1}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 max-w-5xl mx-auto">

              {/* Informasi Kontak */}
              <div className="lg:col-span-5 flex flex-col justify-between gap-8 bg-[#11171f] p-5 sm:p-8 rounded-2xl border border-white/10">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Mari Bekerja Sama!</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8">
                    Saya terbuka untuk pekerjaan penuh waktu, proyek lepas, maupun kolaborasi pengembangan web dan infrastruktur sisi server.
                  </p>

                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#A7D129]/10 rounded-xl flex items-center justify-center text-[#A7D129]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Surel</p>
                        <a href="mailto:pande@example.com" className="break-all text-white hover:text-[#A7D129] font-medium transition-colors">
                          pandepratama22@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#A7D129]/10 rounded-xl flex items-center justify-center text-[#A7D129]">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-gray-400">Lokasi</p>
                        <p className="text-white font-medium">Badung, Bali, Indonesia</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Media Sosial */}
                <div className="pt-6 border-t border-white/10 flex gap-4">
                  <a
                    href="https://github.com/PandePratama"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    title="GitHub"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#A7D129] hover:text-[#19222D] transition-all"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-current">
                      <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .5Z" />
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com/pratamaa02_"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    title="Instagram"
                    className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-[#A7D129] hover:text-[#19222D] transition-all"
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="w-5 h-5 fill-none stroke-current" strokeWidth="1.8">
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Formulir Kontak */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 bg-[#11171f] p-5 sm:p-8 rounded-2xl border border-white/10 flex flex-col gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full bg-[#19222D] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#A7D129] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Alamat surel</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="nama@contoh.com"
                    className="w-full bg-[#19222D] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#A7D129] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Pesan</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Tuliskan detail proyek atau pertanyaan Anda..."
                    className="w-full bg-[#19222D] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#A7D129] transition-colors resize-none"
                  />
                </div>

                <button type="submit" className="w-full">
                  <GradientText
                    colors={["#A7D129", "#40ffaa", "#A7D129"]}
                    animationSpeed={3}
                    showBorder={false}
                    className="w-full py-4 rounded-xl font-semibold text-[#19222D] text-center cursor-pointer hover:scale-[1.01] transition-transform duration-300 shadow-lg block"
                  >
                    Kirim Pesan
                  </GradientText>
                </button>
              </form>

            </div>
          </AnimatedContent>

          {/* FOOTER */}
          <footer className="mt-24 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Pande Pratama. Hak cipta dilindungi undang-undang.</p>
          </footer>

        </div>
      </section>

    </div>
  );
}