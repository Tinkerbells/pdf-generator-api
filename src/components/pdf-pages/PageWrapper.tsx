import { FC, ReactNode } from "react";
import { LogoIcon } from "../icons";
interface PageWrapperProps {
  number: string;
  children: ReactNode;
  footer?: ReactNode;
}
export const PageWrapper: FC<PageWrapperProps> = ({
  children,
  number,
  footer,
}) => {
  return (
    <div className="relative h-a4 w-full p-5">
      <div className="flex w-full justify-between">
        <LogoIcon className="h-4 w-24 fill-purple stroke-purple" />
        <p className="font-roboto text-[9px] text-[#8B8B8B]">
          Ваш персональный отчет | {number} стр.
        </p>
      </div>
      {children}
      <div className="absolute bottom-0">{footer}</div>
    </div>
  );
};
