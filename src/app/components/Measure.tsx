import * as React from "react";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

const MEASURES = [
    { value: "4/4", label: "4/4" },
    { value: "3/4", label: "3/4" },
    { value: "2/2", label: "2/2" },
    { value: "6/8", label: "6/8" },
];

export default function Measure({
    value,
    onChange,
}: {
    value?: string;
    onChange?: (value: string) => void;
}) {
    return (
        <Select value={value} onValueChange={onChange}>
            <SelectTrigger className="w-32">
                <SelectValue placeholder="Select measure" />
            </SelectTrigger>
            <SelectContent>
                {MEASURES.map((measure) => (
                    <SelectItem key={measure.value} value={measure.value}>
                        {measure.label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}