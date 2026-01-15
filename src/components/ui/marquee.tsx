import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: React.ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
}

export const Marquee = ({
  children,
  className,
  pauseOnHover = false,
  direction = "left",
  speed = "normal",
}: MarqueeProps) => {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  };

  return (
    <div
      className={cn(
        "flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <div
        className={cn(
          "flex shrink-0 gap-8 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 gap-8 animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "[animation-direction:reverse]"
        )}
        style={{
          animationDuration: speedMap[speed],
        }}
        aria-hidden="true"
      >
        {children}
        {children}
      </div>
    </div>
  );
};
