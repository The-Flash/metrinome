import { cn } from "@/lib/utils";

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
      <h2 className="font-bold lg:text-8xl text-4xl">{value}</h2>
    </div>
  );
}
