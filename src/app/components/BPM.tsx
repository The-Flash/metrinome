"use client";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";

export function useBPM({ defaultValue }: { defaultValue: number }) {
  const [value, setValue] = useState(defaultValue);
  const maxBPM = 400;
  const minBPM = 20;

  const increaseBPM = () => {
    setValue((curr) => {
      return Math.min(maxBPM, curr + 20);
    });
  };

  const decreaseBPM = () => {
    setValue((curr) => {
      return Math.max(minBPM, curr - 20);
    });
  };

  return {
    value,
    increaseBPM,
    decreaseBPM,
    changeValue: setValue,
  };
}

type Props = {
  onBPMChange?: (value: number) => void;
  defaultValue?: number;
};

export default function BPM(
  { onBPMChange, defaultValue }: Props = { defaultValue: 20 }
) {
  const { value, increaseBPM, decreaseBPM, changeValue } = useBPM({
    defaultValue: defaultValue ?? 20,
  });

  useEffect(() => {
    onBPMChange?.(value);
  }, [value]);
  return (
    <div className="w-full flex justify-center items-center flex-col space-y-10 px-10">
      <div>
        <h2 className="text-white font-semibold text-2xl">
          {value} <span className="text-sm">BPM</span>
        </h2>
      </div>
      <div className="flex w-full space-x-7">
        <Button className="w-10 h-10 text-2xl" onClick={decreaseBPM}>
          -
        </Button>
        <Slider
          min={20}
          max={400}
          value={[value]}
          step={20}
          defaultValue={[20]}
          onValueChange={(v) => {
            changeValue(v[0]);
          }}
        />
        <Button className="w-10 h-10 text-2xl" onClick={increaseBPM}>
          +
        </Button>
      </div>
    </div>
  );
}
