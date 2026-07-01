import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../../constants/styles";
// import { ComputersCanvas } from "../canvas"; // 3D desktop model — re-enable to restore
import { config } from "../../constants/config";

const STORAGE_KEY = "videoMuted";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const unmute = () => {
      video.muted = false;
      setIsMuted(false);
      localStorage.setItem(STORAGE_KEY, "false");
    };

    // Remove listeners once unmuted (whichever fires first)
    const EVENTS = ["click", "keydown", "touchend"] as const;
    const onFirstGesture = () => {
      unmute();
      EVENTS.forEach(e => document.removeEventListener(e, onFirstGesture));
    };

    const startMuted = () => {
      video.muted = true;
      setIsMuted(true);
      video.play().catch(() => {});
      // Unmute on the very first user gesture anywhere on the page
      EVENTS.forEach(e => document.addEventListener(e, onFirstGesture, { once: true }));
    };

    // Strategy 1: try unmuted autoplay directly (works for returning users via browser MEI score)
    // Strategy 2: localStorage preference from a previous session
    const wantsUnmuted = localStorage.getItem(STORAGE_KEY) === "false";

    const timer = setTimeout(() => {
      if (wantsUnmuted) {
        video.muted = false;
        video.play().then(() => {
          setIsMuted(false);
        }).catch(() => {
          startMuted();
        });
      } else {
        video.play().then(() => {
          setIsMuted(false);
          localStorage.setItem(STORAGE_KEY, "false");
        }).catch(() => {
          startMuted();
        });
      }
    }, 2000);

    return () => {
      clearTimeout(timer);
      EVENTS.forEach(e => document.removeEventListener(e, onFirstGesture));
    };
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    localStorage.setItem(STORAGE_KEY, String(video.muted));
  };

  const handleVideoEnd = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className={`relative mx-auto h-screen w-full`}>
      {/* To restore 3D canvas: remove the video and uncomment: <ComputersCanvas /> */}
      <video
        ref={videoRef}
        src="/Introduction_Portfolio_video.mp4"
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Speaker toggle — bottom-right corner */}
      <button
        onClick={toggleMute}
        className="absolute bottom-8 right-6 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition hover:bg-black/70"
        title={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM17.78 9.22a.75.75 0 1 0-1.06 1.06L18.44 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06l1.72-1.72 1.72 1.72a.75.75 0 1 0 1.06-1.06L20.56 12l1.72-1.72a.75.75 0 1 0-1.06-1.06l-1.72 1.72-1.72-1.72Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path d="M13.5 4.06c0-1.336-1.616-2.005-2.56-1.06l-4.5 4.5H4.508c-1.141 0-2.318.664-2.66 1.905A9.76 9.76 0 0 0 1.5 12c0 .898.121 1.768.35 2.595.341 1.24 1.518 1.905 2.659 1.905h1.93l4.5 4.5c.945.945 2.561.276 2.561-1.06V4.06ZM18.584 5.106a.75.75 0 0 1 1.06 0c3.808 3.807 3.808 9.98 0 13.788a.75.75 0 0 1-1.06-1.06 8.25 8.25 0 0 0 0-11.668.75.75 0 0 1 0-1.06ZM15.932 7.757a.75.75 0 0 1 1.061 0 6 6 0 0 1 0 8.486.75.75 0 0 1-1.06-1.061 4.5 4.5 0 0 0 0-6.364.75.75 0 0 1 0-1.06Z" />
          </svg>
        )}
      </button>

      {/* Text anchored bottom-left — keeps the person's face clear */}
      <div
        className={`absolute bottom-24 left-0 z-10 ${styles.paddingX} flex flex-row items-end gap-3`}
      >
        <div className="mb-1 flex flex-col items-center">
          <div className="violet-gradient h-16 w-1 sm:h-24" />
          <div className="h-4 w-4 rounded-full bg-[#915EFF]" />
        </div>

        <div className="rounded-xl bg-black/40 px-4 py-3 backdrop-blur-sm">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915EFF]">{config.hero.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-1`}>
            {config.hero.p[0]} <br className="hidden sm:block" />
            {config.hero.p[1]}
          </p>
        </div>
      </div>

      <div className="absolute bottom-6 z-10 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
