import { useState } from "react";

const experiences = [
  {
    period: "2022 — Present",
    title: "Senior Software Engineer",
    company: "TechCorp",
    description:
      "Build and maintain critical systems that serve millions of users. Lead architectural decisions and mentor junior developers.",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    link: "#",
  },
  {
    period: "2020 — 2022",
    title: "Software Engineer",
    company: "StartupXYZ",
    description:
      "Developed full-stack features for a SaaS platform. Improved application performance and implemented CI/CD pipelines.",
    technologies: ["Vue.js", "Python", "MongoDB", "Redis"],
    link: "#",
  },
  {
    period: "2018 — 2020",
    title: "Frontend Developer",
    company: "AgencyABC",
    description:
      "Created responsive web applications for clients across various industries. Collaborated with designers to build pixel-perfect interfaces.",
    technologies: ["React", "TypeScript", "Styled Components"],
    link: "#",
  },
];

const projects = [
  {
    title: "Security Platform",
    description:
      "Enterprise security monitoring and threat detection system with real-time alerts and comprehensive dashboards.",
    technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
    link: "#",
  },
  {
    title: "API Gateway",
    description:
      "High-performance API gateway with intelligent rate limiting and request routing for microservices architecture.",
    technologies: ["Go", "gRPC", "Kubernetes", "Redis"],
    link: "#",
  },
  {
    title: "Auth Service",
    description:
      "Zero-trust authentication microservice with multi-factor authentication and session management.",
    technologies: ["Rust", "PostgreSQL", "JWT"],
    link: "#",
  },
  {
    title: "Data Pipeline",
    description:
      "Real-time data processing and analytics pipeline handling millions of events per day.",
    technologies: ["Python", "Kafka", "Spark", "Airflow"],
    link: "#",
  },
];

export const Home = () => {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Fixed */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-between lg:fixed lg:h-screen lg:px-12 lg:py-20">
        <div>
          <h1 className="text-[var(--text-4xl)] font-semibold text-[var(--color-text-bright)] mb-2">
            Your Name
          </h1>
          <h2 className="text-[var(--text-lg)] font-medium text-[var(--color-text-bright)] mb-3">
            Software Engineer
          </h2>
          <p className="text-[var(--text-base)] text-[var(--color-text)] max-w-xs leading-relaxed mb-12">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>

          {/* Navigation */}
          <nav>
            <ul className="space-y-4">
              {["about", "experience", "projects"].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    onClick={() => setActiveSection(section)}
                    className="group flex items-center text-xs uppercase tracking-wider"
                  >
                    <span
                      className={`h-px transition-all mr-3 ${
                        activeSection === section
                          ? "w-12 bg-[var(--color-text-bright)]"
                          : "w-8 bg-[var(--color-text)] group-hover:w-12 group-hover:bg-[var(--color-text-bright)]"
                      }`}
                    />
                    <span
                      className={`transition-colors font-medium ${
                        activeSection === section
                          ? "text-[var(--color-text-bright)]"
                          : "text-[var(--color-text)] group-hover:text-[var(--color-text-bright)]"
                      }`}
                    >
                      {section}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Social Links */}
        <div className="flex gap-5">
          <a
            href="#"
            className="text-[var(--color-text)] hover:text-[var(--color-text-bright)] transition-colors"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-[var(--color-text)] hover:text-[var(--color-text-bright)] transition-colors"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="#"
            className="text-[var(--color-text)] hover:text-[var(--color-text-bright)] transition-colors"
            aria-label="Twitter"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Right Panel - Scrollable */}
      <div className="w-full lg:w-1/2 lg:ml-auto px-6 md:px-12 py-16 md:py-20">
        {/* Mobile Header */}
        <div className="lg:hidden mb-12">
          <h1 className="text-[var(--text-3xl)] font-semibold text-[var(--color-text-bright)] mb-2">
            Your Name
          </h1>
          <h2 className="text-[var(--text-lg)] font-medium text-[var(--color-text-bright)] mb-3">
            Software Engineer
          </h2>
          <p className="text-[var(--text-base)] text-[var(--color-text)] leading-relaxed">
            I build accessible, pixel-perfect digital experiences for the web.
          </p>
        </div>

        {/* About Section */}
        <section id="about" className="mb-20 md:mb-32">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-6 lg:hidden">
            About
          </h2>
          <div className="space-y-4 text-[var(--text-base)] text-[var(--color-text)] leading-relaxed">
            <p>
              Back in 2018, I decided to try my hand at creating custom websites
              and tumbled head first into the rabbit hole of coding and web
              development. Fast-forward to today, and I've had the privilege of
              building software for startups, large corporations, and everything
              in between.
            </p>
            <p>
              My main focus these days is building accessible user interfaces
              and digital experiences at{" "}
              <a
                href="#"
                className="text-[var(--color-text-bright)] hover:text-[var(--color-accent)] transition-colors font-medium"
              >
                TechCorp
              </a>
              . I also occasionally take on freelance projects and contribute to
              open-source software.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new technologies,
              contributing to developer communities, or working on personal
              projects that push my skills forward.
            </p>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-20 md:mb-32">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-6 lg:hidden">
            Experience
          </h2>
          <ol className="space-y-10">
            {experiences.map((exp, idx) => (
              <li key={idx}>
                <a
                  href={exp.link}
                  className="group block py-3 -mx-3 px-3 hover:bg-[var(--color-bg-light)]/50 rounded transition-colors"
                >
                  <div className="flex flex-col sm:flex-row sm:gap-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-[var(--color-text)] mb-2 sm:mb-0 sm:w-28 flex-shrink-0">
                      {exp.period}
                    </p>
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

        {/* Projects Section */}
        <section id="projects" className="mb-16">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-bright)] mb-6 lg:hidden">
            Projects
          </h2>
          <ol className="space-y-10">
            {projects.map((project, idx) => (
              <li key={idx}>
                <a
                  href={project.link}
                  className="group block py-3 -mx-3 px-3 hover:bg-[var(--color-bg-light)]/50 rounded transition-colors"
                >
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
        <footer className="text-xs text-[var(--color-text)] py-8">
          <p>
            Designed and built by{" "}
            <a
              href="#"
              className="text-[var(--color-text-bright)] hover:text-[var(--color-accent)] transition-colors font-medium"
            >
              Your Name
            </a>
            . All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
};
