import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProp {
  children: ReactNode;
  className?: string;
}

export default function OvalButton({ children, className = "" }: ButtonProp) {
  return (
    <div className="flex items-center justify-center">
      <button
        className={clsx(
          "relative flex items-center justify-center text-black transition-colors border-black border-1",
          className
        )}
        style={{
          width: "150px",
          height: "45px",
          borderRadius: "100%",
        }}
      >
        {children}
      </button>
    </div>
  );
}
