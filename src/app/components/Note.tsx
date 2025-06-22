import { cn } from "@/lib/utils";
import { Key } from "react";

type Props = {
  value: string;
  className?: string;
};

export default function Note({ value, className }: Props) {
  return (
    <div
      className={cn("text-white", {
        [className ?? ""]: true,
      })}
    >
      <h2 className="font-bold text-8xl">{value}</h2>
    </div>
  );
}
