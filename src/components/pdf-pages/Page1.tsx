import { LogoIcon } from "../icons";

export const Page1 = () => {
  return (
    <div className="h-a4 w-full bg-purple flex items-center justify-center flex-col relative">
      <LogoIcon className="fill-white" />
      <p className="absolute bottom-0 text-white text-xl mb-5 font-roboto">
        Исследование микробиоты METABOLIC NOVA
      </p>
    </div>
  );
};
