import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import LoadingState from "./components/LoadingState";
import ToastProvider from "./components/ToastProvider";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://iamasad.me"),
  title: "Asad Ali | Software Engineer | .NET, Microservices, Cloud",
  description:
    "Portfolio of Asad Ali, a Software Engineer focused on .NET, ASP.NET Core, microservices, Angular, AWS, Docker, REST APIs, and CI/CD.",
  keywords: [
    "Asad Ali",
    "Software Engineer",
    ".NET Developer",
    "ASP.NET Core",
    "Microservices",
    "Angular",
    "AWS",
    "Docker",
    "CI/CD",
  ],
  authors: [{ name: "Asad Ali", url: "https://iamasad.me" }],
  creator: "Asad Ali",
  openGraph: {
    title: "Asad Ali | Software Engineer",
    description:
      "Software Engineer focused on .NET, ASP.NET Core, microservices, Angular, AWS, Docker, REST APIs, and CI/CD.",
    url: "https://iamasad.me",
    siteName: "Asad Ali Portfolio",
    images: [{ url: "/image/ZyntraPay-img.png", width: 1200, height: 630, alt: "Asad Ali portfolio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Asad Ali | Software Engineer",
    description:
      "Software Engineer focused on .NET, ASP.NET Core, microservices, Angular, AWS, Docker, REST APIs, and CI/CD.",
    images: ["/image/ZyntraPay-img.png"],
  },
  alternates: {
    canonical: "https://iamasad.me",
  },
  icons: {
    icon: "/favicon.ico?v=2",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to improve performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* Prevent layout shift */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className={`${inter.className} min-h-screen bg-[#080b12] text-white antialiased`}>
        <ToastProvider />
        <main className="min-h-screen relative w-full text-white">
          <LoadingState>
            <div className="w-full relative z-10">
              {children}
              <ScrollToTop />
            </div>
          </LoadingState>
        </main>
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
