"use client";

import LanguageSwitcher from "./LanguageSwitcher";

interface NavbarProps {
  dict: {
    about: string;
    projects: string;
    education: string;
    skills: string;
    contact: string;
    cta: string;
  };
  lang: string;
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const smoothScrollTo = (targetId: string, duration = 800) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const navbarOffset = 80;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime: number | null = null;

    const easeOutCubic = (t: number): number => {
      return --t * t * t + 1;
    };

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeProgress = easeOutCubic(progress);

      window.scrollTo(0, startPosition + distance * easeProgress);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        window.history.pushState(null, "", `#${targetId}`);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId, 800); 
  };

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl">
      <nav className="flex items-center justify-between px-6 py-3 bg-white/40 backdrop-blur-xl border border-white/60 rounded-full shadow-lg shadow-sky-900/5">
        <a href={`/${lang}`} className="font-bold text-slate-800 text-lg tracking-tight">
          Dev<span className="text-sky-600">.AzamatM</span>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, "hero")}
            className="hover:text-sky-600 transition-colors"
          >
            {dict.about}
          </a>
          <a
            href="#skills"
            onClick={(e) => handleLinkClick(e, "skills")}
            className="hover:text-sky-600 transition-colors"
          >
            {dict.skills}
          </a>
          <a
            href="#education"
            onClick={(e) => handleLinkClick(e, "education")}
            className="hover:text-sky-600 transition-colors"
          >
            {dict.education}
          </a>
          <a
            href="#projects"
            onClick={(e) => handleLinkClick(e, "projects")}
            className="hover:text-sky-600 transition-colors"
          >
            {dict.projects}
          </a>
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, "contact")}
            className="hover:text-sky-600 transition-colors"
          >
            {dict.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <LanguageSwitcher currentLang={lang} />
          
          <a
            href="/resume.pdf"
            download="Azamat_Sobitjonov_Resume.pdf"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-sky-600 transition-colors shadow-sm"
          >
            <span>{dict.cta}</span>
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
          </a>
        </div>
      </nav>
    </header>
  );
}