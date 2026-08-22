import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Full-bleed chrome width, used by the header and hero so edge cards reach the viewport. */
  wide?: boolean;
};

export function Container({ children, className = "", wide }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-5 md:px-8 ${wide ? "max-w-[1600px]" : "max-w-[1320px]"} ${className}`}
    >
      {children}
    </div>
  );
}
