import React from "react";

type BeatIndicatorProps = {
    beats: number;
    activeBeat: number; // 0-based index
};

export default function BeatIndicator({ beats, activeBeat }: BeatIndicatorProps) {
    return (
        <div className="flex flex-row items-center gap-2">
            {Array.from({ length: beats }).map((_, idx) => (
                <div
                    key={idx}
                    className={`w-4 h-4 rounded-full border border-gray-700 transition-colors ${
                        idx === activeBeat ? "bg-white" : "bg-gray-400"
                    }`}
                />
            ))}
        </div>
    );
}