import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { HeroSection } from "../ui/hero-section";
import { GlowingEffect } from "../ui/glowing-effect";
import { TechPill } from "../ui/tech-pill";
import { CardLink } from "../ui/card-link";
import horizon3Logo from "../../assets/h3.png";
import vannevarLogo from "../../assets/vannevar-logo.png";
import cruiseLogo from "../../assets/cruise-logo.png";
import appleLogo from "../../assets/apple-logo.png";
import capitalOneLogo from "../../assets/capital-one-logo.png";

type Experience = {
  period: string;
  title: string;
  company: string;
  logo: string;
  description: string;
  technologies: string[];
  link?: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const experiences: Experience[] = [
  {
    period: "2026 — Present",
    title: "Software Engineer II",
    company: "Horizon3",
    logo: horizon3Logo,
    description:
      "Autonomous pentesting and security vulnerability research, focused on cloud pentesting, data pipelines, and ETL workflows.",
    technologies: ["Python", "neo4j", "AWS"],
    link: "https://horizon3.ai/",
  },
  {
    period: "2024 — 2025",
    title: "Senior Software Engineer",
    company: "Startup",
    logo: vannevarLogo,
    description:
      "Built and maintained critical auth systems serving thousands of users. Led architectural decisions and mentored junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
  },
  {
    period: "2023 — 2024",
    title: "Software Security Engineer",
    company: "Cruise",
    logo: cruiseLogo,
    description:
      "Developed full-stack applications for incident detection and response. Improved application performance and implemented CI/CD pipelines.",
    technologies: ["Python", "React", "BigQuery"],
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "Apple",
    logo: appleLogo,
    description:
      "Developed the Apple Pay partner onboarding and server performance testing portal. Collaborated with designers to build pixel-perfect interfaces.",
    technologies: ["Java", "Python"],
    link: "https://www.apple.com/",
  },
  {
    period: "2019 — 2021",
    title: "Software Engineer",
    company: "Capital One",
    logo: capitalOneLogo,
    description:
      "Embedded in Credit Risk Management data engineering organization. Collaborated with Credit Officer and Analyst to optimize model infrastructure and reduce cloud costs.",
    technologies: ["Python", "R", "AWS"],
    link: "https://www.capitalone.com/",
  },
];

const projects: Project[] = [
  {
    title:
      "Using Contextual Information for Vehicle Trip Loss Risk Assessment Scoring",
    description: "Patent #11,516,295",
    technologies: ["Swift", "Python", "S3"],
    link: "https://patents.google.com/patent/US11516295B1",
  },
  {
    title: "Wireguard Domain Tunnel",
    description: "Domain based wireguard VPN split tunnel",
    technologies: ["TypeScript", "Rust", "Electron"],
    link: "https://github.com/coreycasmedes/wireguard-domain-tunnel",
  },
];

export const Home = () => {
  const { scrollY } = useScroll();
  const gradientOpacity = useTransform(scrollY, [0, 350], [1, 0]);
  const location = useLocation();

  useEffect(() => {
    const target = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (target) {
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.state]);

  return (
    <div>
      <motion.div
        className="fixed inset-x-0 top-0 h-screen pointer-events-none z-0"
        style={{
          background:
            "radial-gradient(ellipse at 65% 25%, rgba(218,221,216,0.18) 0%, rgba(218,221,216,0.06) 35%, transparent 65%)",
          opacity: gradientOpacity,
        }}
      />
      <HeroSection />

      <div className="max-w-2xl mx-auto px-6 md:px-12 py-20 space-y-28">
        {/* About */}
        <section id="about">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-8">
            About
          </h2>

          <TypewriterEffectSmooth
            words={[
              { text: "Securing" },
              { text: "the" },
              { text: "web," },
              { text: "one" },
              { text: "line", className: "text-accent" },
              { text: "at", className: "text-accent" },
              { text: "a", className: "text-accent" },
              { text: "time.", className: "text-accent" },
            ]}
            className="mb-8"
            cursorClassName="bg-accent"
          />

          <div className="space-y-4 text-secondary leading-relaxed">
            <p>
              I'm a software engineer on the{" "}
              <span className="text-primary font-semibold">
                Core Attack Team
              </span>{" "}
              at{" "}
              <a
                href="https://horizon3.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-accent transition-colors font-medium"
              >
                Horizon3.ai
              </a>
              , where I build autonomous pentesting software and research
              security vulnerabilities, with a focus on cloud environments.
            </p>
            <p>
              I started out on the building side: data infrastructure for
              credit risk at Capital One, then partner tooling for Apple Pay. In
              2023 I moved into security, first through bug bounties, then
              incident detection and response at Cruise and authentication
              systems at a startup.
            </p>
            <p>
              Outside of work I build the tools I want to exist, like a
              domain-based WireGuard split tunnel, take on the occasional
              freelance project, and travel whenever I can.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-8">
            Experience
          </h2>
          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <li key={idx}>
                <CardLink href={exp.link}>
                  <GlowingEffect
                    disabled={false}
                    spread={30}
                    proximity={60}
                    borderWidth={1.5}
                  />
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="mb-3 sm:mb-0 sm:w-28 flex-shrink-0 flex items-center gap-3 sm:flex-col sm:items-center sm:gap-2">
                      <p className="text-xs font-mono uppercase tracking-wide text-secondary">
                        {exp.period}
                      </p>
                      <div className="sm:flex-1 sm:flex sm:items-center sm:justify-center">
                        <img
                          src={exp.logo}
                          alt=""
                          className="w-8 h-8 flex-shrink-0 rounded object-contain"
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-base text-primary font-medium mb-2 group-hover:text-accent transition-colors leading-snug">
                        {exp.title} · {exp.company}
                      </h3>
                      <p className="text-sm text-secondary mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <TechPill key={tech} label={tech} />
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardLink>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-8">
            Projects
          </h2>
          <ol className="space-y-10">
            {projects.map((project, idx) => (
              <li key={idx}>
                <CardLink href={project.link}>
                  <GlowingEffect
                    disabled={false}
                    spread={30}
                    proximity={60}
                    borderWidth={1.5}
                  />
                  <h3 className="text-base text-primary font-medium mb-2 group-hover:text-accent transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-secondary mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <TechPill key={tech} label={tech} />
                    ))}
                  </ul>
                </CardLink>
              </li>
            ))}
          </ol>
        </section>

        {/* Contact */}
        <section id="contact">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-primary mb-8">
            Contact
          </h2>
          <p className="text-secondary leading-relaxed mb-10">
            The best way to reach me is a message on LinkedIn. My code and
            side projects are on GitHub.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://www.linkedin.com/in/coreycasmedes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-2.5 text-sm font-medium text-background hover:bg-primary transition-colors"
            >
              Message me on LinkedIn
            </a>
            <a
              href="https://github.com/coreycasmedes"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-secondary/30 px-6 py-2.5 text-sm font-medium text-primary hover:border-accent/50 transition-colors"
            >
              View GitHub
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};
