import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

const icons = [
  { href: "https://www.instagram.com/coreycasmedes/", icon: FaInstagram },
  { href: "https://www.instagram.com/coreycasmedes/", icon: FaGithub },
  { href: "https://www.instagram.com/coreycasmedes/", icon: FaLinkedin },
];

export const Footer = () => {
  return (
    <div className="w-full flex justify-center flex-shrink-0 p-2">
      {icons.map(({ href, icon: Icon }) => (
        <div className="flex items-center">
          <a href={href} className="px-2">
            <div className="rounded-full p-1  border-white border">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};
