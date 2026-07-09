import PortfolioPage from "./components/PortfolioPage";
import Script from "next/script";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Asad Ali",
  url: "https://iamasad.me",
  jobTitle: "Software Engineer",
  email: "mailto:aliasad07518@gmail.com",
  sameAs: [
    "https://github.com/asadali2004",
    "https://linkedin.com/in/asadalli",
  ],
  knowsAbout: [
    ".NET",
    "ASP.NET Core",
    "Microservices",
    "Angular",
    "AWS",
    "Docker",
    "REST APIs",
    "CI/CD",
  ],
};

export default async function Home() {
  return (
    <div suppressHydrationWarning>
      <Script
        id="person-json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <PortfolioPage />
    </div>
  )
};
