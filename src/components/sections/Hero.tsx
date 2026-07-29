import Image from "next/image";
import RoleFlipper from "./RoleFlipper";

interface HeroProps {
  dict: {
    greeting: string;
    developer: string;
    roles: string[];
    description: string;
  };
}

export default function Hero({ dict }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex items-center justify-center px-6 lg:px-12"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-40 items-center">
        
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-white shadow-2xl shadow-sky-900/10 bg-gradient-to-tr from-sky-100 to-sky-50">
            <Image
              src="/images/Azamat.jpg"
              alt="Avatar"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {dict.greeting}
            <RoleFlipper roles={dict.roles} />
            <br />
            {dict.developer}
          </h1>

          <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
            {dict.description}
          </p>
        </div>

      </div>
    </section>
  );
}