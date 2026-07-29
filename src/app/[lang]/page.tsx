import { getDictionary, Locale } from "@/dictionaries/get-dictionary";
import Navbar from "@/components/layout/Navbar";
import BackgroundCanvas from "@/components/sections/BackgroundCanvas";
import Hero from "@/components/sections/Hero";
import Skills from "@/components/sections/Skills";
import EducationTimeline from "@/components/sections/EducationTimeline";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/layout/Footer";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <main className="relative min-h-screen bg-slate-50 text-slate-900">
      <BackgroundCanvas />
      <Navbar dict={dict.nav} lang={lang} />

      <div>
        <section id="hero" className="min-h-screen flex flex-col justify-center">
          <Hero dict={dict.hero} />
        </section>

        <section id="skills" className="min-h-screen flex flex-col justify-center">
          <Skills dict={dict.skills} />
        </section>

        <section id="education" className="min-h-screen flex flex-col justify-center">
          <EducationTimeline dict={dict.education} />
        </section>

        <section id="projects" className="min-h-screen flex flex-col justify-center">
          <Projects dict={dict.projects} />
        </section>

        <section id="contact" className="min-h-screen flex flex-col justify-between">
          <Footer dict={dict.footer} />
        </section>
      </div>
    </main>
  );
}