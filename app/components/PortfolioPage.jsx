'use client';

import {
  achievements,
  aboutTimeline,
  certificates,
  featuredProject,
  heroStats,
  profile,
  projects,
  skillGroups,
} from "@/utils/data/portfolio-content";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  BsArrowUpRight,
  BsBriefcase,
  BsCheck2Circle,
  BsDownload,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import {
  FiAward,
  FiCloud,
  FiCode,
  FiDatabase,
  FiLayers,
  FiMail,
  FiMenu,
  FiServer,
  FiShield,
  FiTool,
  FiX,
} from "react-icons/fi";

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

const categoryIcons = {
  Languages: FiCode,
  Frontend: FiLayers,
  Backend: FiServer,
  Database: FiDatabase,
  "Cloud and DevOps": FiCloud,
  "Tools and Concepts": FiTool,
};

export default function PortfolioPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100">
      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 px-5 py-6 text-sm text-slate-400 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>(c) Portfolio by Asad Ali</p>
        <div className="flex gap-4">
          <Link href={profile.github} target="_blank" className="hover:text-teal-300">
            GitHub
          </Link>
          <Link href={profile.linkedIn} target="_blank" className="hover:text-teal-300">
            LinkedIn
          </Link>
          <Link href={profile.resume} target="_blank" className="hover:text-teal-300">
            Resume
          </Link>
        </div>
      </div>
    </footer>
  );
}

function SiteNav({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#080b12]/90 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <Link href="#top" className="text-sm font-semibold tracking-[0.18em] text-white">
          ASAD ALI
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <Link
          href={profile.resume}
          target="_blank"
          className="hidden items-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 md:flex"
        >
          <BsDownload aria-hidden="true" />
          Resume
        </Link>
        <button
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-slate-200 md:hidden"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080b12] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-md px-3 py-3 text-sm text-slate-200 hover:bg-white/5"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={profile.resume}
              target="_blank"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950"
            >
              <BsDownload aria-hidden="true" />
              Resume
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-white/10 pt-16">
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(20,184,166,0.10),transparent_32%,rgba(59,130,246,0.09)_72%,transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_34%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-7xl grid-cols-1 items-center gap-8 px-5 py-10 sm:px-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-start lg:px-10 lg:py-12">
        <div>
          <p className="mb-5 inline-flex rounded-md border border-teal-300/20 bg-teal-300/10 px-3 py-1 text-sm font-medium text-teal-200">
            Software Engineer | .NET | Microservices | Cloud
          </p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Asad Ali builds backend-first products with clean APIs and cloud-ready delivery.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            {profile.headline} {profile.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200" href={profile.resume} target="_blank">
              <BsDownload aria-hidden="true" />
              Download Resume
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5" href={profile.github} target="_blank">
              <BsGithub aria-hidden="true" />
              GitHub
            </Link>
            <Link className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5" href="#contact">
              <FiMail aria-hidden="true" />
              Contact
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <p className="text-2xl font-semibold text-white">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.14em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-[#0d111b] p-4 shadow-2xl shadow-black/30 lg:sticky lg:top-24">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-sm font-semibold text-white">Professional snapshot</p>
                <p className="text-xs text-slate-400">Available at {profile.domain.replace("https://", "")}</p>
              </div>
              <FiShield className="text-teal-300" size={22} aria-hidden="true" />
            </div>
            <div className="grid gap-4 py-5">
              {["ASP.NET Core REST APIs", "Microservices with RabbitMQ", "Angular frontends", "Docker and GitHub Actions CI/CD"].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg bg-white/[0.03] p-3">
                  <BsCheck2Circle className="shrink-0 text-teal-300" aria-hidden="true" />
                  <span className="text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>
            <div className="relative h-[360px] overflow-hidden rounded-lg border border-white/10 bg-slate-950 sm:h-[420px] lg:h-[440px]">
              <Image src={profile.profileImage} alt="Asad Ali professional profile photo" fill sizes="(max-width: 1024px) 100vw, 44vw" priority className="object-cover object-top opacity-95" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-3xl">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-400">{description}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="About" title="Backend engineering focus with product sense." description="A concise professional story: computer science foundation, practical projects, DevOps exposure, and a deliberate move toward .NET cloud systems." />
        <div className="grid gap-4 lg:grid-cols-5">
          {aboutTimeline.map((item) => (
            <article key={item.year} className="rounded-lg border border-white/10 bg-white/[0.03] p-5 transition hover:border-teal-300/30 hover:bg-white/[0.05]">
              <p className="text-sm font-semibold text-teal-300">{item.year}</p>
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-b border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Skills" title="A focused stack for .NET, APIs, and cloud delivery." description="Grouped for fast technical review, with honest levels and context instead of a wall of logos." />
        <div className="grid gap-5 lg:grid-cols-2">
          {skillGroups.map((group) => {
            const Icon = categoryIcons[group.category] || FiCode;
            return (
              <article key={group.category} className="rounded-lg border border-white/10 bg-[#0d111b] p-5">
                <div className="mb-5 flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-teal-300/10 text-teal-300">
                    <Icon aria-hidden="true" />
                  </span>
                  <h3 className="text-xl font-semibold text-white">{group.category}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {group.skills.map((skill) => (
                    <div key={`${group.category}-${skill.name}`} className="rounded-md border border-white/10 bg-white/[0.025] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="font-semibold text-white">{skill.name}</p>
                        <span className="shrink-0 rounded bg-white/5 px-2 py-1 text-xs font-medium text-teal-200">{skill.level}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{skill.description}</p>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience Timeline" title="The path toward enterprise backend work." description="A concise timeline that connects education, projects, training, and ZyntraPay into one credible engineering narrative." />
        <div className="relative space-y-5 before:absolute before:left-4 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-white/10 sm:before:left-1/2">
          {aboutTimeline.map((item, index) => (
            <article key={`${item.year}-${item.title}`} className={`relative grid gap-4 sm:grid-cols-2 ${index % 2 ? "" : "sm:text-right"}`}>
              <div className={index % 2 ? "sm:col-start-2" : ""}>
                <div className="rounded-lg border border-white/10 bg-[#0d111b] p-5">
                  <p className="text-sm font-semibold text-teal-300">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                </div>
              </div>
              <span className="absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-[#080b12] bg-teal-300 sm:left-1/2" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-b border-white/10 bg-white/[0.015] px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Featured Project" title="ZyntraPay is the flagship engineering project." description="Highlighted first because it best represents .NET, microservices, cloud, CI/CD, and enterprise application design." />
        <article className="overflow-hidden rounded-xl border border-white/10 bg-[#0d111b]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[340px] border-b border-white/10 bg-slate-950 p-4 lg:min-h-[520px] lg:border-b-0 lg:border-r">
              <Image src={featuredProject.image} alt="ZyntraPay project screenshot" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
            </div>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-teal-300">{featuredProject.label}</p>
              <h3 className="mt-3 text-3xl font-semibold text-white">{featuredProject.name}</h3>
              <p className="mt-4 text-base leading-7 text-slate-400">{featuredProject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <span key={item} className="rounded bg-white/5 px-3 py-1 text-xs font-medium text-slate-200">{item}</span>
                ))}
              </div>
              <ul className="mt-6 grid gap-3">
                {featuredProject.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-6 text-slate-300">
                    <BsCheck2Circle className="mt-1 shrink-0 text-teal-300" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link href={featuredProject.repo} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                  <BsGithub aria-hidden="true" />
                  Repository
                </Link>
                <Link href={featuredProject.demo} target="_blank" className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                  Live Demo
                  <BsArrowUpRight aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </article>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name} className="rounded-lg border border-white/10 bg-[#0d111b] p-5 transition hover:border-teal-300/30">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded bg-white/5 px-2 py-1 text-xs text-slate-300">{item}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-4 text-sm font-semibold">
                <Link href={project.repo} target="_blank" className="text-teal-300 hover:text-teal-200">Code</Link>
                <Link href={project.demo} target="_blank" className="text-slate-200 hover:text-white">Demo</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certificates() {
  return (
    <section id="certificates" className="scroll-mt-24 border-b border-white/10 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="Certificates" title="Certificate collections by learning track." description="Five focused collections covering DevOps, industry immersion, NPTEL coursework, MERN with GenAI, and Generative AI fundamentals." />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {certificates.map((cert) => (
            <article key={cert.title} className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#0d111b] transition hover:border-teal-300/30">
              <div className="relative aspect-[4/3] bg-slate-950">
                <Image src={cert.image} alt={`${cert.title} certificate thumbnail`} fill sizes="(max-width: 768px) 40vw, (max-width: 1280px) 50vw, 20vw" className="object-cover" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-semibold text-teal-300">{cert.issuer}</p>
                  <span className="rounded bg-white/5 px-2 py-1 text-xs text-slate-300">{cert.count}</span>
                </div>
                <h3 className="mt-2 text-lg font-semibold text-white">{cert.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-slate-400">{cert.detail}</p>
                {cert.driveUrl ? (
                  <Link href={cert.driveUrl} target="_blank" className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200">
                    Open certificate
                    <BsArrowUpRight aria-hidden="true" />
                  </Link>
                ) : (
                  <button type="button" disabled className="mt-5 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 px-4 py-3 text-sm font-semibold text-slate-500">
                    Drive link pending
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Achievements() {
  return (
    <section className="border-b border-white/10 bg-white/[0.015] px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 md:grid-cols-4">
          {achievements.map((achievement) => (
            <div key={achievement} className="flex items-center gap-3 rounded-lg border border-white/10 bg-[#0d111b] p-5">
              <FiAward className="shrink-0 text-teal-300" aria-hidden="true" />
              <p className="text-sm font-medium text-slate-200">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-xl border border-white/10 bg-[#0d111b] p-6 sm:p-8 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-300">Contact</p>
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Let&apos;s build something reliable.</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
            I&apos;m interested in software engineering roles where backend architecture, APIs, cloud, and product quality matter.
          </p>
        </div>
        <div className="grid gap-3">
          <Link href={`mailto:${profile.email}`} className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-200 transition hover:bg-white/[0.05]">
            <FiMail className="text-teal-300" aria-hidden="true" />
            <span className="break-all">{profile.email}</span>
          </Link>
          <Link href={profile.linkedIn} target="_blank" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-200 transition hover:bg-white/[0.05]">
            <BsLinkedin className="text-teal-300" aria-hidden="true" />
            LinkedIn
          </Link>
          <Link href={profile.github} target="_blank" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-200 transition hover:bg-white/[0.05]">
            <BsGithub className="text-teal-300" aria-hidden="true" />
            GitHub
          </Link>
          <Link href={profile.resume} target="_blank" className="flex items-center gap-3 rounded-md border border-white/10 bg-white/[0.03] p-4 text-slate-200 transition hover:bg-white/[0.05]">
            <BsBriefcase className="text-teal-300" aria-hidden="true" />
            Resume
          </Link>
        </div>
      </div>
    </section>
  );
}
