import Image from "next/image";

interface CardDict {
  title: string;
  institution: string;
  description: string;
  tags: string[];
}

interface EducationDict {
  title: string;
  subtitle: string;
  present: string;
  years11: string;
  years2: string;
  months6: string;
  location: string;
  school: CardDict;
  itAcademyStudy: CardDict;
  itAcademyWork: CardDict;
  university: CardDict;
}

export default function EducationTimeline({ dict }: { dict: EducationDict }) {
  const educationData = [
    {
      id: "school",
      period: dict.years11,
      title: dict.school.title,
      institution: dict.school.institution,
      location: dict.location,
      description: dict.school.description,
      tags: dict.school.tags,
      imageSrc: "/images/110-school.jpg",
      imageAlt: dict.school.institution,
    },
    {
      id: "it-academy-study",
      period: dict.years2,
      title: dict.itAcademyStudy.title,
      institution: dict.itAcademyStudy.institution,
      location: dict.location,
      description: dict.itAcademyStudy.description,
      tags: dict.itAcademyStudy.tags,
      imageSrc: "/images/IT-academy.webp",
      imageAlt: dict.itAcademyStudy.institution,
    },
    {
      id: "it-academy-work",
      period: dict.months6,
      title: dict.itAcademyWork.title,
      institution: dict.itAcademyWork.institution,
      location: dict.location,
      description: dict.itAcademyWork.description,
      tags: dict.itAcademyWork.tags,
      imageSrc: "/images/IT-academy-practice.jpg",
      imageAlt: dict.itAcademyWork.institution,
    },
    {
      id: "university",
      period: dict.present,
      title: dict.university.title,
      institution: dict.university.institution,
      location: dict.location,
      description: dict.university.description,
      tags: dict.university.tags,
      imageSrc: "/images/Turin.png",
      imageAlt: dict.university.institution,
    },
  ];

  return (
    <section id="education" className="py-12 bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {dict.title}
          </h2>
          <p className="mt-2 text-gray-400 text-sm sm:text-base">
            {dict.subtitle}
          </p>
        </div>

        <div className="relative border-l-2 border-gray-800 ml-4 md:ml-32 space-y-12">
          {educationData.map((item) => (
            <div key={item.id} className="relative pl-6 md:pl-8 group">
              <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-indigo-500 bg-gray-950 group-hover:bg-indigo-500 transition-colors duration-300" />

              <div className="md:absolute md:-left-36 md:top-1.5 md:w-28 text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-2 md:mb-0 md:text-right">
                {item.period}
              </div>

              <div className="bg-gray-900/80 border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-700 transition-all duration-300 shadow-xl">
                {item.imageSrc && (
                  <div className="relative w-full h-48 sm:h-64 bg-gray-800 overflow-hidden">
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt || item.institution}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent pointer-events-none z-10" />
                  </div>
                )}

                <div className="p-6 relative z-20">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {item.institution}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">
                      📍 {item.location}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-indigo-300 mb-3">
                    {item.title}
                  </p>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-md bg-indigo-500/10 text-indigo-300 border border-indigo-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}