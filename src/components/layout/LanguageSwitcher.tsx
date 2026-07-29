"use client";

import { usePathname, useRouter } from "next/navigation";

interface LanguageSwitcherProps {
  currentLang: string;
}

export default function LanguageSwitcher({ currentLang }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLang: string) => {
    if (currentLang === newLang) return;

    const segments = pathname.split("/");
    segments[1] = newLang;
    const newPath = segments.join("/");

    router.push(newPath);
  };

  return (
    <div className="flex items-center gap-1 bg-white/60 backdrop-blur-md border border-slate-200/80 p-1 rounded-full text-xs font-semibold shadow-xs">
      <button
        onClick={() => switchLanguage("en")}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          currentLang === "en"
            ? "bg-sky-600 text-white shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => switchLanguage("ru")}
        className={`px-2.5 py-1 rounded-full transition-all duration-200 cursor-pointer ${
          currentLang === "ru"
            ? "bg-sky-600 text-white shadow-xs"
            : "text-slate-600 hover:text-slate-900"
        }`}
      >
        RU
      </button>
    </div>
  );
}