import { motion } from "framer-motion";
import { Marquee } from "../ui/marquee";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Security Platform",
    tags: ["React", "Node.js", "AWS"],
    description: "Enterprise security monitoring and threat detection system",
    size: "large",
  },
  {
    id: 2,
    title: "API Gateway",
    tags: ["Go", "gRPC", "K8s"],
    description: "High-performance API gateway with rate limiting",
    size: "small",
  },
  {
    id: 3,
    title: "Auth Service",
    tags: ["Rust", "PostgreSQL"],
    description: "Zero-trust authentication microservice",
    size: "small",
  },
  {
    id: 4,
    title: "Data Pipeline",
    tags: ["Python", "Kafka", "Spark"],
    description: "Real-time data processing and analytics pipeline",
    size: "medium",
  },
  {
    id: 5,
    title: "CLI Tool",
    tags: ["Go", "Cobra"],
    description: "Developer productivity command-line toolkit",
    size: "small",
  },
];

const marqueeItems = [
  "Security-first engineering",
  "Thoughtful solutions",
  "Building what matters",
  "Resilient systems",
  "Clean architecture",
  "Continuous learning",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const Home = () => {
  return (
    <main className="flex-1">
      {/* Hero Section - Ultra Impact */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col items-center justify-center px-4 md:px-8 py-12 md:py-16 overflow-hidden text-center">
        {/* Metadata tag */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[10px] md:text-xs text-[#F5F2ED]/50 tracking-wider uppercase mb-4"
        >
          Software Engineer / Security
        </motion.span>

        {/* Massive Viewport-Sized Outline Text */}
        <div className="relative w-full">
          {/* DESIGNER - Outline */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-[family-name:var(--font-display)] font-bold tracking-tighter leading-[0.85] hero-outline"
            style={{
              fontSize: "clamp(2.5rem, 14vw, 12rem)",
            }}
          >
            DESIGNER
          </motion.h1>

          {/* & BUILDER - Filled */}
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-[family-name:var(--font-display)] font-bold tracking-tighter leading-[0.85] text-[#F5F2ED]"
            style={{
              fontSize: "clamp(2.5rem, 14vw, 12rem)",
            }}
          >
            <span className="hero-outline-accent">&</span>{" "}
            BUILDER
          </motion.h1>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="mt-8 md:mt-12"
        >
          <a
            href="/contact"
            className="inline-block px-6 py-3 md:px-8 md:py-4 bg-[#F5F2ED] text-[#1B1B1B] font-medium text-sm tracking-wide hover:bg-[#D97757] hover:text-[#F5F2ED] transition-colors duration-200"
          >
            Get in Touch
          </a>
        </motion.div>
      </section>

      {/* Marquee Section (replacing Philosophy) */}
      <section className="border-y-2 border-[#F5F2ED]/20 py-6">
        <Marquee speed="slow" pauseOnHover>
          {marqueeItems.map((item, idx) => (
            <span
              key={idx}
              className="text-lg md:text-xl font-medium text-[#F5F2ED]/70 whitespace-nowrap flex items-center"
            >
              {item}
              <span className="mx-8 text-[#D97757]">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* Selected Works - Bento Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-bold text-[#F5F2ED]">
            Selected Works
          </h2>
          <span className="text-xs text-[#F5F2ED]/50">
            2020—Present
          </span>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#F5F2ED]"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`
                bg-[#1B1B1B] p-6 md:p-8
                border-2 border-transparent
                hover:bg-[#252525] hover:border-[#F5F2ED]
                transition-all duration-200 cursor-pointer
                group
                ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
                ${project.size === "medium" ? "md:col-span-2" : ""}
              `}
            >
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-2 py-1 border border-[#F5F2ED]/20 text-[#F5F2ED]/60 uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className={`font-[family-name:var(--font-display)] font-bold text-[#F5F2ED] group-hover:text-[#D97757] transition-colors ${
                  project.size === "large"
                    ? "text-2xl md:text-4xl"
                    : "text-xl md:text-2xl"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-[#F5F2ED]/60 leading-relaxed">
                {project.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-[#F5F2ED]/40 group-hover:text-[#D97757] transition-colors">
                <span className="text-xs">View Project</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </section>
    </main>
  );
};
