import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
import { VantaBackground } from "../ui/vanta-background";
import { HeroSection } from "../ui/hero-section";
import { GlowingEffect } from "../ui/glowing-effect";
import { Navbar } from "../ui/navbar-menu";
import vannevarLogo from "../../assets/vannevar-logo.png";
import cruiseLogo from "../../assets/cruise-logo.png";
import appleLogo from "../../assets/apple-logo.png";
import capitalOneLogo from "../../assets/capital-one-logo.png";

const experiences = [
  {
    period: "2024 — Present",
    title: "Senior Software Engineer",
    company: "Startup",
    logo: vannevarLogo,
    description:
      "Build and maintain critical auth systems that serve thousands of users. Lead architectural decisions and mentor junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    link: "#",
  },
  {
    period: "2023 — 2024",
    title: "Software Security Engineer",
    company: "Cruise",
    logo: cruiseLogo,
    description:
      "Developed full-stack applications for incident detection and response. Improved application performance and implemented CI/CD pipelines.",
    technologies: ["Python", "React", "BigQuery"],
    link: "#",
  },
  {
    period: "2021 — 2023",
    title: "Software Engineer",
    company: "Apple",
    logo: appleLogo,
    description:
      "Revealed Apple Pay partner onboarding and server performance testing portal. Collaborated with designers to build pixel-perfect interfaces.",
    technologies: ["Java", "Python"],
    link: "#",
  },
  {
    period: "2019 — 2021",
    title: "Software Engineer",
    company: "Capital One",
    logo: capitalOneLogo,
    description:
      "Embedded in Credit Risk Management data engineering organization. Collaborated with Credit Officer and Analyst to optimize model infrastructure and reduce cloud costs.",
    technologies: ["Python", "R", "AWS"],
    link: "#",
  },
];

const projects = [
  {
    title:
      "Using Contextual Information for Vehicle Trip Loss Risk Assessment Scoring",
    description: "Patent #11,516,295",
    technologies: ["Swift", "Python", "S3"],
    link: "https://patents.justia.com/patent/20240089325",
  },
  {
    title: "Wireguard Domain Tunnel",
    description: "Domain based wireguard VPN split tunnel",
    technologies: ["TypeScript", "Rust", "Electron"],
    link: "#",
  },
];

export const Home = () => {
  return (
    <div>
      {/* <VantaBackground /> */}
      <Navbar />

      <HeroSection />

      {/* Scrollable content */}
      <div className="max-w-2xl mx-auto px-6 md:px-12 py-20 space-y-28">
        {/* About */}
        <section id="about">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-8">
            About
          </h2>

          <TypewriterEffectSmooth
            words={[
              { text: "Securing" },
              { text: "the" },
              { text: "web," },
              { text: "one" },
              { text: "line", className: "text-[var(--color-accent)]" },
              { text: "at", className: "text-[var(--color-accent)]" },
              { text: "a", className: "text-[var(--color-accent)]" },
              { text: "time.", className: "text-[var(--color-accent)]" },
            ]}
            className="mb-8"
            cursorClassName="bg-[var(--color-accent)]"
          />

          <div className="space-y-4 text-[var(--text-base)] leading-relaxed">
            <p>
              Back in 2023, I pivoted to specialize in software security to try
              my hand at securing enterprises and bug bounties and tumbled head
              first into the rabbit hole. Fast-forward to today, and I've had
              the privilege of building software for startups, large
              corporations, and everything in between.
            </p>
            <p>
              My main focus these days is building accessible user interfaces
              and digital experiences at{" "}
              <a
                href="#"
                className="text-[var(--color-text-bright)] hover:text-[var(--color-accent)] transition-colors font-medium"
              >
                Startups
              </a>
              . I also occasionally take on freelance projects and contribute to
              open-source software.
            </p>
            <p>
              When I'm not coding, you'll find me contributing to developer
              communities, or working on personal projects that push my skills
              forward.
            </p>
          </div>
        </section>

        {/* Experience */}
        <section id="experience">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-8">
            Experience
          </h2>
          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <li key={idx}>
                <a
                  href={exp.link}
                  className="rounded-2xl relative block py-3 -mx-3 px-3 hover:bg-[var(--color-bg-light)]/50 rounded transition-colors"
                >
                  <GlowingEffect
                    disabled={false}
                    spread={30}
                    proximity={60}
                    borderWidth={1.5}
                  />
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <div className="mb-3 sm:mb-0 sm:w-28 flex-shrink-0 flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                      <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text)]">
                        {exp.period}
                      </p>
                      <img
                        src={exp.logo}
                        alt={exp.company}
                        className="w-8 h-8 flex-shrink-0 rounded object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[var(--text-base)] text-[var(--color-text-bright)] font-medium mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                        {exp.title} · {exp.company}
                      </h3>
                      <p className="text-[var(--text-sm)] text-[var(--color-text)] mb-3 leading-relaxed">
                        {exp.description}
                      </p>
                      <ul className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <li
                            key={tech}
                            className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-8">
            Projects
          </h2>
          <ol className="space-y-10">
            {projects.map((project, idx) => (
              <li key={idx}>
                <a
                  href={project.link}
                  className="group rounded-2xl relative block py-3 -mx-3 px-3 hover:bg-[var(--color-bg-light)]/50 rounded transition-colors"
                >
                  <GlowingEffect
                    disabled={false}
                    spread={30}
                    proximity={60}
                    borderWidth={1.5}
                  />
                  <h3 className="text-[var(--text-base)] text-[var(--color-text-bright)] font-medium mb-2 group-hover:text-[var(--color-accent)] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-[var(--text-sm)] text-[var(--color-text)] mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <li
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] font-medium"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </a>
              </li>
            ))}
          </ol>
        </section>

        {/* Footer */}
        <footer className="text-xs text-[var(--color-text)] py-8 border-t border-[var(--color-text)]/10">
          <p>
            Designed and built by{" "}
            <a
              href="#"
              className="text-[var(--color-text-bright)] hover:text-[var(--color-accent)] transition-colors font-medium"
            >
              Corey Casmedes
            </a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
