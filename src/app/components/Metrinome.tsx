"use client";
import { Button } from "@/components/ui/button";
import { getRandomMusicalNote, type MusicalNote } from "@/lib/notes";
import { tick } from "@/lib/sound";
import { PlayIcon, StopIcon } from "@heroicons/react/24/solid";
import { useEffect, useReducer } from "react";
import BeatIndicator from "./BeatIndicator";
import BPM from "./BPM";
import Measure from "./Measure";
import Note from "./Note";
import { cn } from "@/lib/utils";

type State = {
  bpm: number;
  isPlaying: boolean;
  measure: string;
  note: MusicalNote;
  beats: number;
  activeBeat: number;
};

type Action =
  | {
      type: "CHANGE_BPM";
      payload: number;
    }
  | {
      type: "PLAY";
    }
  | {
      type: "STOP";
    }
  | {
      type: "ADVANCE_BEAT";
    };

const initialState: State = {
  bpm: 100,
  isPlaying: false,
  measure: "4/4",
  note: "A",
  beats: 4,
  activeBeat: -1,
};

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "CHANGE_BPM":
      return {
        ...state,
        bpm: action.payload,
        isPlaying: false,
      };
    case "PLAY": {
      return {
        ...state,
        isPlaying: true,
      };
    }
    case "STOP": {
      return {
        ...state,
        activeBeat: -1,
        isPlaying: false,
      };
    }
    case "ADVANCE_BEAT":
      return {
        ...state,
        activeBeat: (state.activeBeat + 1) % state.beats,
        note: getRandomMusicalNote(),
      };
    default:
      return state;
  }
}

export default function Metrinome() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { note, bpm, beats, activeBeat, isPlaying } = state;

  const play = () => dispatch({ type: "PLAY" });

  const stop = () => dispatch({ type: "STOP" });

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isPlaying) {
      intervalId = setInterval(() => {
        dispatch({ type: "ADVANCE_BEAT" });
      }, 60_000 / bpm);
    }
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, bpm, activeBeat]);

  useEffect(() => {
    if (activeBeat === 0) {
      tick({ frequency: 4000 });
    } else {
      tick();
    }
  }, [activeBeat]);

  return (
    <div className="space-y-20 w-lg flex items-center flex-col">
      <Note value={note} />
      <BPM
        defaultValue={bpm}
        onBPMChange={(value) =>
          dispatch({ type: "CHANGE_BPM", payload: value })
        }
      />
      <BeatIndicator beats={beats} activeBeat={activeBeat} />
      <div className="w-full flex space-x-20 justify-center items-center">
        <Measure />
        {isPlaying ? (
          <Button className="w-20 h-20 rounded-full" onClick={stop}>
            <StopIcon className="size-10 text-white" />
          </Button>
        ) : (
          <Button className="w-20 h-20 rounded-full" onClick={play}>
            <PlayIcon className="size-10 text-white" />
          </Button>
        )}
      </div>
    </div>
  );
}
