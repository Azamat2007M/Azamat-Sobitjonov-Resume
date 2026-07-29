import Image from "next/image";

interface CardDict {
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

export interface ProjectsDict {
  title: string;
  subtitle: string;
  viewDemo: string;
  viewCode: string;
  binomo: CardDict;
  thender: CardDict;
}

interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  imageSrc: string;
  imageAlt: string;
  demoUrl?: string;
  githubUrl?: string;
  status?: {
    text: string;
    variant: "danger" | "warning";
  };
}

export default function Projects({ dict }: { dict: ProjectsDict }) {
  const projectsData: ProjectItem[] = [
    {
      id: "binomo-trading",
      title: dict.binomo.title,
      subtitle: dict.binomo.subtitle,
      description: dict.binomo.description,
      tags: dict.binomo.tags,
      imageSrc: "/images/Binomo.png",
      imageAlt: dict.binomo.title,
      demoUrl: "https://binomo-v1.vercel.app/",
      githubUrl: "https://github.com/Azamat2007M/Binomo-v1",
      status: {
        text: "Deprecated",
        variant: "danger",
      },
    },
    {
      id: "thender-social",
      title: dict.thender.title,
      subtitle: dict.thender.subtitle,
      description: dict.thender.description,
      tags: dict.thender.tags,
      imageSrc: "/images/Thender.png",
      imageAlt: dict.thender.title,
      demoUrl: "https://thender-frontend.vercel.app/",
      githubUrl: "https://github.com/Azamat2007M/Thender-Frontend",
      status: {
        text: "Beta",
        variant: "warning",
      },
    },
  ];

  return (
    <section id="projects" className="py-16 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            {dict.title}
          </h2>
          <p className="mt-3 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            {dict.subtitle}
          </p>
        </div>

        <div className="space-y-10">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="relative bg-gray-50 border border-gray-200 rounded-3xl shadow-sm hover:shadow-xl hover:border-indigo-300 transition-all duration-300 group"
            >
              {project.status && (
                <div className="absolute top-3 right-3 sm:-top-3 sm:-right-3 z-20">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold shadow-lg border ${
                      project.status.variant === "danger"
                        ? "bg-red-600 text-white border-red-400"
                        : "bg-amber-500 text-white border-amber-400"
                    }`}
                  >
                    <span className="w-2 h-2 rounded-full bg-white mr-1.5 animate-pulse" />
                    {project.status.text}
                  </span>
                </div>
              )}

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl">
                <div className="lg:col-span-6 relative h-64 sm:h-80 lg:h-full min-h-[260px] bg-gray-100 overflow-hidden">
                  {project.demoUrl ? (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="block w-full h-full relative"
                    >
                      <Image
                        src={project.imageSrc}
                        alt={project.imageAlt}
                        fill
                        className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    </a>
                  ) : (
                    <Image
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                </div>

                <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                      {project.subtitle}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1 mb-3 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-50 text-indigo-700 border border-indigo-100"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm shadow hover:bg-indigo-700 transition-colors"
                        >
                          {dict.viewDemo} ↗
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="px-5 py-2.5 rounded-xl bg-white border border-gray-300 text-gray-700 font-semibold text-sm hover:bg-gray-100 transition-colors"
                        >
                          {dict.viewCode}
                        </a>
                      )}
                    </div>
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