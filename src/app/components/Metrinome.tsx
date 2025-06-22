"use client";
import BeatIndicator from "./BeatIndicator";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import Note from "./Note";
import Measure from "./Measure";
import BPM from "./BPM";
import { Button } from "@/components/ui/button";
import { useReducer } from "react";

type Note =
  | "A"
  | "A#"
  | "B"
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#";

type State = {
  bpm: number;
  isPlaying: boolean;
  measure: string;
  note: Note;
  beats: number;
  activeBeat: number;
};

type Action = {};

const initialState: State = {
  bpm: 20,
  isPlaying: false,
  measure: "4/4",
  note: "A",
  beats: 4,
  activeBeat: 2,
};

function reducer(state: State, action: Action) {
  return state;
}

export default function Metrinome() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div className="space-y-20 w-lg flex items-center flex-col">
      <Note value={state.note} />
      <BPM defaultValue={state.bpm} />
      <BeatIndicator beats={state.beats} activeBeat={state.activeBeat} />
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
