import Image from "next/image";
import { FC } from "react";
import image from "../../public/images/bottom.png";
interface BottomImageProps {
  height: string;
}
export const BottomImage: FC<BottomImageProps> = ({ height }) => {
  return (
    <figure
      className={`flex overflow-hidden rounded-xl ${height} w-full items-center justify-center`}
    >
      <Image src={image} alt="bottom image" className="h-full w-full" />
    </figure>
  );
};
