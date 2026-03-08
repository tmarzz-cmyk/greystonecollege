import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(true);
  const [started, setStarted] = useState(false);

  const toggleMute = () => {
    if (!started && audioRef.current) {
      audioRef.current.volume = 0.08;
      audioRef.current.play().catch(() => {});
      setStarted(true);
      setMuted(false);
      return;
    }
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <>
      <audio ref={audioRef} src="/audio/school-song.m4a" loop preload="none" />
      <button
        onClick={toggleMute}
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold shadow-lg transition-all duration-300 hover:scale-105"
        style={{
          background: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
        }}
        aria-label={muted ? "Play school song" : "Mute school song"}
      >
        {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
        <span className="hidden sm:inline">{started && !muted ? "Playing" : "School Song"}</span>
      </button>
    </>
  );
};

export default BackgroundMusic;
