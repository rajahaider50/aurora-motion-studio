// Procedural 3D audio (Web Audio API, HRTF panner). No audio files needed.
type Kind = "hover" | "click" | "success" | "whoosh";
let ctx: AudioContext | null = null;
let enabled = true;
export const setSound = (v: boolean) => { enabled = v; };
export const isSound = () => enabled;

export function play(kind: Kind, pan = 0) {
  if (!enabled || typeof window === "undefined") return;
  try {
    const AC = window.AudioContext || (window as any).webkitAudioContext;
    ctx = ctx ?? new AC();
    if (ctx.state === "suspended") ctx.resume();
    const t = ctx.currentTime;
    const cfg = { hover: [900, 1300, 0.05, 0.06], click: [320, 680, 0.14, 0.12], success: [523, 1047, 0.18, 0.4], whoosh: [260, 70, 0.1, 0.35] }[kind];
    const o = ctx.createOscillator(), g = ctx.createGain(), p = ctx.createPanner();
    p.panningModel = "HRTF";
    p.positionX.value = Math.max(-1, Math.min(1, pan)) * 3; p.positionY.value = 0; p.positionZ.value = -1.5;
    o.type = kind === "whoosh" ? "sawtooth" : "sine";
    o.frequency.setValueAtTime(cfg[0], t);
    o.frequency.exponentialRampToValueAtTime(cfg[1], t + cfg[3]);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(cfg[2], t + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t + cfg[3]);
    o.connect(g); g.connect(p); p.connect(ctx.destination);
    o.start(t); o.stop(t + cfg[3] + 0.05);
  } catch {}
}
