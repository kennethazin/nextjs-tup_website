import { useState } from "react";

import type React from "react";

import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name?: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description?: string;
  href?: string;
  cta?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name = "",
  className = "",
  background,
  Icon,
  description = "",
  href = "#",
  cta = "",
  ...props
}: BentoCardProps) => {
  const [showButton, setShowButton] = useState(false);

  // Detect mobile with a simple window.matchMedia check
  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(max-width: 768px)").matches;

  // Handler for mobile tap
  const handleCardClick = () => {
    if (isMobile) setShowButton((prev) => !prev);
  };

  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col  justify-between overflow-hidden rounded-xl ",
        // light styles
        "bg-background text-black [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu text-black dark:bg-background dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className,
      )}
      onClick={handleCardClick}
      {...props}
    >
      {background && (
        <div className="absolute inset-0 w-full h-full ">
          <div className="w-full h-full transition-transform duration-500 ease-in-out group-hover:scale-110 overflow-hidden">
            {background}
          </div>
        </div>
      )}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        {Icon && (
          <Icon className="h-12 w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-75" />
        )}
        {name && (
          <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
            {name}
          </h3>
        )}
        {description && (
          <p className="max-w-lg text-neutral-400">{description}</p>
        )}
      </div>

      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-hover:pointer-events-auto z-20",
          isMobile && showButton && "opacity-100 translate-y-0 pointer-events-auto"
        )}
      >
        {href && cta && cta.trim() !== "" && (
          <Button
            variant="ghost"
            asChild
            size="sm"
            className={cn(
              "pointer-events-auto whitespace-nowrap transition-colors duration-300 bg-white text-black",
              "group-hover:bg-white group-hover:text-neutral-900 group-hover:shadow-md",
            )}
          >
            <a href={href}>{cta}</a>
          </Button>
        )}
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.2] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };
