import { PropsWithChildren, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ShuffleAnimation from "../RiffleShuffleTrueSideView";
import { Home } from "../home/Home";

export const ApplicationShell = ({ children }: PropsWithChildren<{}>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    //setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#1B1B1B]">
      {/* <WavyBackground className="h-full flex flex-col"> */}

      <Header />
      <Home />
      {/* 
      {isLoading ? (
        <ShuffleAnimation />
      ) : (
        <main className="flex flex-1 ">{children}</main>
      )} */}

      <Footer />
      {/* </WavyBackground> */}
    </div>
  );
};
