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
    <>
      <div>
        <h2 className="text-white font-semibold text-2xl">{value} BPM</h2>
      </div>
      <div className="flex w-full space-x-7">
        <Button onClick={decreaseBPM}>-</Button>
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
        <Button onClick={increaseBPM}>+</Button>
      </div>
    </>
  );
}
