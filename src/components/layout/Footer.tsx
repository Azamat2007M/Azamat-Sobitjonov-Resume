import Link from "next/link";
import { Send, Mail, Phone } from "lucide-react";

export interface FooterDict {
  rights: string;
  quickLinks: string;
  connect: string;
  nav: {
    hero: string;
    skills: string;
    education: string;
    projects: string;
  };
}

export default function Footer({ dict }: { dict: FooterDict }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Dev<span className="text-indigo-500">.AzamatM</span>
            </h3>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Full-Stack Developer. Building modern, high-performance web applications and smooth user experiences.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.quickLinks}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#hero" className="hover:text-indigo-400 transition-colors">
                  {dict.nav.hero}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-indigo-400 transition-colors">
                  {dict.nav.skills}
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-indigo-400 transition-colors">
                  {dict.nav.education}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">
                  {dict.nav.projects}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              {dict.connect}
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm">
              <a
                href="https://github.com/Azamat2007M"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub (Main)</span>
              </a>

              <a
                href="https://github.com/Azamat2007Mlove"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <span>GitHub (Secondary)</span>
              </a>

              <a
                href="https://linkedin.com/in/azamat-sobitjonov-7830662b6"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <svg className="w-4 h-4 fill-current text-slate-400 group-hover:text-indigo-400 transition-colors" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              <a
                href="https://t.me/emp1rem"
                target="_blank"
                rel="noreferrer"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <Send className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                <span>Telegram</span>
              </a>

              <a
                href="mailto:azamat2007pro@gmail.com"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <Mail className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                <span>azamat2007pro@gmail.com</span>
              </a>

              <a
                href="tel:+998909848222"
                className="hover:text-indigo-400 transition-colors flex items-center gap-2.5 group"
              >
                <Phone className="w-4 h-4 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                <span>+998 (90) 984-82-22</span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {currentYear} {dict.rights}</p>
          <p className="text-slate-400 font-medium">Sobitjonov Azamat Azimovich</p>
        </div>
      </div>
    </footer>
  );
}