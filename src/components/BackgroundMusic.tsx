import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.08;

    // Try autoplay immediately
    const tryPlay = () => {
      audio.play().then(() => setStarted(true)).catch(() => {
        // Autoplay blocked — start on first user interaction
        const startOnInteraction = () => {
          audio.play().then(() => setStarted(true)).catch(() => {});
          document.removeEventListener("click", startOnInteraction);
          document.removeEventListener("scroll", startOnInteraction);
          document.removeEventListener("keydown", startOnInteraction);
        };
        document.addEventListener("click", startOnInteraction, { once: false });
        document.addEventListener("scroll", startOnInteraction, { once: false });
        document.addEventListener("keydown", startOnInteraction, { once: false });
      });
    };
    tryPlay();
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      const newMuted = !muted;
      audioRef.current.muted = newMuted;
      setMuted(newMuted);
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
