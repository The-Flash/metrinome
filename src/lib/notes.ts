export const musicalNotes = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
] as const;

export type MusicalNote = (typeof musicalNotes)[number];

export function getRandomMusicalNote(): MusicalNote {
  const idx = Math.floor(Math.random() * musicalNotes.length);
  return musicalNotes[idx];
}
