import * as React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const MEASURES = [
  { value: "2/4", label: "2" },
  { value: "3/4", label: "3" },
  { value: "4/4", label: "4" },
  { value: "5/4", label: "5" },
  { value: "6/4", label: "6" },
];

export type MeasureValue = {
  beats: number;
  noteValue: number;
};

export default function Measure({
  value,
  onChange,
}: {
  value?: string;
  onChange?: (value: MeasureValue) => void;
}) {
  return (
    <Select
      value={value}
      defaultValue="4/4"
      onValueChange={(value) => {
        const [beats, noteValue] = value?.split("/") ?? [];
        onChange?.({
          beats: +(beats ?? 0),
          noteValue: +(noteValue ?? 0),
        });
      }}
    >
      <SelectTrigger className="w-40 text-white [&>svg]:text-white">
        <SelectValue className="text-white" placeholder="Measure" />
      </SelectTrigger>
      <SelectContent>
        {MEASURES.map((measure) => (
          <SelectItem key={measure.label} value={measure.value}>
            {measure.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
