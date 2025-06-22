import BeatIndicator from "./BeatIndicator";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import Note from "./Note";
import Measure from "./Measure";
import BPM from "./BPM";
import { Button } from "@/components/ui/button";

export default function Metrinome() {
  return (
    <div className="space-y-20 w-lg flex items-center flex-col">
      <Note />
      <BPM />
      <BeatIndicator beats={4} activeBeat={2} />
      <div className="w-full flex space-x-20 justify-center items-center">
        <Measure />
        <Button className="w-20 h-20 rounded-full">
          <PlayIcon className="size-10 text-white" />
        </Button>
        <Button className="w-20 h-20 rounded-full">
          <StopIcon className="size-10 text-white" />
        </Button>
      </div>
    </div>
  );
}
