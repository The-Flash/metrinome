import { cn } from "@/lib/utils";
import React from "react";

type BeatIndicatorProps = {
  beats: number;
  activeBeat: number; // 0-based index
};

export default function BeatIndicator({
  beats,
  activeBeat,
}: BeatIndicatorProps) {
  return (
    <div className="flex flex-row items-center gap-2">
      {Array.from({ length: beats }).map((_, idx) => (
        <div
          key={idx}
          className={cn(
            "w-4 h-4 rounded-full border border-gray-700 transition-colors bg-gray-400",
            {
              "bg-red-500": idx === 0,
              "bg-white": idx === activeBeat,
            }
          )}
        />
      ))}
    </div>
  );
}
