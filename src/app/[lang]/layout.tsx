import type { Metadata } from "next";
import "./globals.css";

type Props = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  const isRu = lang === "ru";

  const title = "Azamat Sobitjonov | Full-Stack Developer Portfolio";
  const description = isRu
    ? "Портфолио Full-Stack разработчика (Python, FastAPI, React, Next.js, Node.js). Проекты, навыки и контакты."
    : "Portfolio of Full-Stack Developer (Python, FastAPI, React, Next.js, Node.js). Projects, skills, and contacts.";

  return {
    title: {
      default: title,
      template: "%s | Azamat Sobitjonov",
    },
    description,
    keywords: [
      "Azamat Sobitjonov",
      "Full-Stack Developer",
      "Software Engineer",
      "Python Developer",
      "FastAPI",
      "React Developer",
      "Next.js Portfolio",
      "Node.js",
      "Tashkent Developer",
    ],
    authors: [{ name: "Azamat Sobitjonov" }],
    creator: "Azamat Sobitjonov",
    metadataBase: new URL("https://yourdomain.com"), 

    openGraph: {
      type: "website",
      locale: isRu ? "ru_RU" : "en_US",
      url: `https://yourdomain.com/${lang}`,
      title,
      description,
      siteName: "Azamat Sobitjonov Portfolio",
      images: [
        {
          url: "/me.jpg", 
          width: 800,
          height: 1200,
          alt: "Azamat Sobitjonov - Full-Stack Developer",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/me.jpg"],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="antialiased bg-slate-50 text-slate-900 selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}