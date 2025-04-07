import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full  flex justify-center flex-shrink-0 ">
      <div className="flex items-center pl-0 lg:pl-8">
        <a href="https://www.instagram.com/coreycasmedes/" className="px-2">
          <FaInstagram />
          {/* <img
            src={FaInstagram}
            className="rounded-full w-8 lg:w-9 border-white border bg-white"
          ></img> */}
        </a>
      </div>

      {/* <div className="flex items-center pl-0">
        <a href="https://www.instagram.com/coreycasmedes/" className="px-2">
          <img
            src={GithubIcon}
            className="rounded-full w-8 lg:w-9 border-white border bg-white"
          ></img>
        </a>
      </div>

      <div className="flex items-center pl-0 fill-white">
        <a href="https://www.instagram.com/coreycasmedes/" className="px-2">
          <img
            src={LinkedInIcon}
            className="rounded-full w-8 lg:w-9 border-white border bg-white"
          ></img>
        </a>
      </div>

      <div className="flex items-center pl-0 ">
        <a href="https://www.instagram.com/coreycasmedes/" className="px-2">
          <img
            src={EmailIcon}
            className="rounded-full w-8 lg:w-9 border-white border"
          ></img>
        </a>
      </div> */}
    </div>
  );
};
