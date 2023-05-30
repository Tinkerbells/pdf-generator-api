import { cn } from "@/helpers";
import { VariantProps, cva } from "class-variance-authority";
import { FC, HTMLAttributes, ReactNode } from "react";

const textVariants = cva("rounded-2xl bg-purple text-white", {
  variants: {
    size: {
      xs: "px-3 py-2",
      sm: "px-5 py-3",
      lg: "px-7 py-4",
    },
  },
});

interface HighlightedTextProps
  extends HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: ReactNode;
}

export const HighlightedText: FC<HighlightedTextProps> = ({
  children,
  className,
  size,
  ...rest
}) => {
  return (
    <div className={cn(textVariants({ size, className }))}>
      <p {...rest}>{children}</p>
    </div>
  );
};
