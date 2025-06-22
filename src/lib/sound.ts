let audioCtx: AudioContext | undefined;
if (typeof window !== "undefined")
  audioCtx = new (window?.AudioContext ||
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any)?.webkitAudioContext)();

export function tick(
  { frequency }: { frequency: number } = { frequency: 1000 }
) {
  if (!audioCtx) {
    return;
  }
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();
  oscillator.type = "square";
  oscillator.frequency.setValueAtTime(frequency, audioCtx.currentTime);

  gainNode.gain.setValueAtTime(1, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(
    0.001,
    audioCtx.currentTime + 0.05
  ); // short decay

  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start(audioCtx.currentTime);
  oscillator.stop(audioCtx.currentTime + 0.05); // short tick (50ms)
}
