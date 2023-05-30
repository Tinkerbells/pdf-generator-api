
import { ReactNode } from "react";

export const MarkedText = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex gap-1.5">
      <svg width="15" height="2" viewBox="0 0 15 2" fill="none" xmlns="http://www.w3.org/2000/svg" className="min-w-[15px] min-h-[2px] place-self-start mt-2">
        <rect width="14.1863" height="2" fill="#6100FF" />
      </svg>
      <p className="text-sm font-inter">{children}</p>
    </div>
  );
};
