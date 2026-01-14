import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://github.com/coreycasmedes", icon: FaGithub, label: "GitHub" },
  { href: "https://linkedin.com/in/coreycasmedes", icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://twitter.com/coreycasmedes", icon: FaTwitter, label: "Twitter" },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-[#1B1B1B] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Copyright */}
        <span className="font-mono text-xs text-[#1B1B1B]/60">
          © 2025 Corey Casmedes
        </span>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-[#1B1B1B] hover:text-[#C4A77D] transition-colors"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
