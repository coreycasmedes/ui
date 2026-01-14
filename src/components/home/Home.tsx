import { motion } from "framer-motion";

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Security Platform",
    tags: ["React", "Node.js", "AWS"],
    description: "Enterprise security monitoring and threat detection system",
    size: "large", // spans 2 columns
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
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Metadata tag */}
          <motion.span
            variants={itemVariants}
            className="font-mono text-xs text-[#1B1B1B]/50 tracking-wider uppercase"
          >
            Software Engineer / Security
          </motion.span>

          {/* Massive Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-4 text-6xl md:text-8xl lg:text-9xl font-black text-[#1B1B1B] leading-[0.9] tracking-tight"
          >
            DESIGNER
            <br />
            <span className="text-[#C4A77D]">&</span> BUILDER
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-lg text-lg text-[#1B1B1B]/70 leading-relaxed"
          >
            Building secure, scalable systems. Turning complex problems into
            elegant solutions.
          </motion.p>

          {/* CTA Button - Sharp edges, no rounding */}
          <motion.div variants={itemVariants} className="mt-8">
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-[#1B1B1B] text-[#F5F2ED] font-medium text-sm tracking-wide hover:bg-[#C4A77D] transition-colors duration-200"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Selected Works - Bento Grid */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t-2 border-[#1B1B1B]">
        <div className="flex items-baseline justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B1B1B]">
            Selected Works
          </h2>
          <span className="font-mono text-xs text-[#1B1B1B]/50">
            2020—Present
          </span>
        </div>

        {/* Bento Box Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-[2px] bg-[#1B1B1B]"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className={`
                bg-[#F5F2ED] p-6 md:p-8
                border-2 border-transparent
                hover:bg-[#EBE8E3] hover:border-[#1B1B1B]
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
                    className="font-mono text-[10px] px-2 py-1 border border-[#1B1B1B]/20 text-[#1B1B1B]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3
                className={`font-bold text-[#1B1B1B] group-hover:text-[#C4A77D] transition-colors ${
                  project.size === "large"
                    ? "text-2xl md:text-4xl"
                    : "text-xl md:text-2xl"
                }`}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-[#1B1B1B]/60 leading-relaxed">
                {project.description}
              </p>

              {/* Arrow indicator */}
              <div className="mt-6 flex items-center gap-2 text-[#1B1B1B]/40 group-hover:text-[#C4A77D] transition-colors">
                <span className="font-mono text-xs">View Project</span>
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

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t-2 border-[#1B1B1B]">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <div>
            <span className="font-mono text-xs text-[#1B1B1B]/50 tracking-wider uppercase">
              Philosophy
            </span>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#1B1B1B] leading-tight">
              Thoughtful engineering for complex problems
            </h2>
          </div>
          <div className="flex flex-col justify-end">
            <p className="text-lg text-[#1B1B1B]/70 leading-relaxed">
              I believe in building systems that are not just functional, but
              resilient. Security isn't an afterthought—it's woven into every
              line of code. Good engineering means understanding the problem
              deeply before writing a single line.
            </p>
            <p className="mt-6 text-lg text-[#1B1B1B]/70 leading-relaxed">
              Every project is an opportunity to learn, iterate, and create
              something that matters.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
