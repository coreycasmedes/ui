import { PropsWithChildren, useEffect, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import ShuffleAnimation from "../RiffleShuffleTrueSideView";

export const ApplicationShell = ({ children }: PropsWithChildren<{}>) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    //setTimeout(() => setIsLoading(false), 3000);
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col relative overflow-hidden bg-[#222]">
      {/* <WavyBackground className="h-full flex flex-col"> */}

      <Header />

      {isLoading ? (
        <ShuffleAnimation />
      ) : (
        <main className="flex flex-1 ">{children}</main>
      )}

      <Footer />
      {/* </WavyBackground> */}
    </div>
  );
};
