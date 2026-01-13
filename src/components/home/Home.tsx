import headshot from "../../assets/adobe_express_1.png";
import { FlipWords } from "../ui/flip-words";

const words = ["Software", "Full Stack", "Security"];

export const Home = () => {
  return (
    <div>
      <div className="pt-60 pl-60 font-assistant text-4xl mx-auto text-neutral-600 dark:text-neutral-400  ">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex justify-end w-32 text-white">
            <FlipWords
              className="flex font-light text-white"
              duration={500}
              words={words}
            />
            <p className="font-bold">Engineer</p>
          </div>
        </div>
      </div>

      <div className="flex pt-32 justify-center">
        <img
          src={headshot}
          className="relative inset-0 w-[40%] h-auto blur-[0.1px] pointer-events-none 
        [mask-image:linear-gradient(to_bottom,black_0%,transparent_99%)] 
        [-webkit-mask-image:linear-gradient(to_bottom,black_0%,transparent_70%)]"
        />
      </div>
    </div>
  );
};
