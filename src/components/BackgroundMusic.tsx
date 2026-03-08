import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

const SONG_START = 2.5; // skip silent intro

const BackgroundMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.08;
    audio.currentTime = SONG_START;

    // Loop back to SONG_START instead of 0
    const handleEnded = () => {
      audio.currentTime = SONG_START;
      audio.play().catch(() => {});
    };
    audio.addEventListener("ended", handleEnded);

    const tryPlay = () => {
      audio.play().then(() => setStarted(true)).catch(() => {
        const startOnInteraction = () => {
          audio.currentTime = SONG_START;
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

    return () => audio.removeEventListener("ended", handleEnded);
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
      <audio ref={audioRef} src="/audio/school-song.m4a" preload="auto" />
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
