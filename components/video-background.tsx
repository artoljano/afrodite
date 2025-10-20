"use client";

import type React from "react";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

interface VideoBackgroundProps {
  overlayOpacity?: number;
  children?: React.ReactNode;
  className?: string;
  videoSrc?: string;
  showControls?: boolean;
}

export default function VideoBackground({
  overlayOpacity = 0.7,
  children,
  className = "",
  videoSrc = "/placeholder-video.mp4",
  showControls = true,
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showControlsState, setShowControlsState] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ensure playbackRate & baseline flags once the element exists
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // iOS/Safari autoplay requirements
    v.muted = true;
    v.defaultMuted = true;
    v.playbackRate = 0.8; // your elegant look

    const tryPlay = () => {
      v.play().catch(() => {
        // Autoplay might be blocked until user gesture; ignore silently
      });
    };

    const onTime = () => {
      if (!Number.isFinite(v.duration) || v.duration <= 0) {
        setProgress(0);
        return;
      }
      setProgress((v.currentTime / v.duration) * 100);
    };

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    // Even with loop, some mobile Safari builds still fire "ended"
    const onEnded = () => {
      try {
        v.currentTime = 0;
      } catch {}
      tryPlay();
    };

    const onCanPlay = () => tryPlay();

    const onVisibility = () => {
      if (!document.hidden) tryPlay();
    };

    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    v.addEventListener("ended", onEnded);
    v.addEventListener("canplay", onCanPlay);
    document.addEventListener("visibilitychange", onVisibility);

    // initial nudge
    tryPlay();

    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
      v.removeEventListener("ended", onEnded);
      v.removeEventListener("canplay", onCanPlay);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [videoSrc]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !Number.isFinite(v.duration) || v.duration <= 0) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    v.currentTime = Math.max(0, Math.min(1, pct)) * v.duration;
  };

  const handleMouseEnter = () => {
    setShowControlsState(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowControlsState(false), 2000);
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element */}
      <video
        key={videoSrc} // reset element if source changes
        ref={videoRef}
        className="absolute top-0 left-0 min-w-full min-h-full object-cover w-full h-full bg-afrodite-creme"
        src={videoSrc}
        muted={isMuted}
        playsInline
        autoPlay
        loop
        preload="auto"
        controls={false}
      >
        {/* If you prefer <source>, keep it—but avoid forcing a mismatched type */}
        {/* <source src={videoSrc} /> */}
        Your browser does not support the video tag.
      </video>

      {/* Navy overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-navy-900"
        style={{ opacity: overlayOpacity }}
      />

      {/* Video controls (kept commented, exactly as requested) */}
      {/*
      {showControls && (
        <div
          className={`absolute bottom-4 right-4 z-20 flex flex-col items-end space-y-2 transition-opacity duration-300 ${
            showControlsState ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex space-x-2">
            <button
              onClick={togglePlay}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? (
                <Pause className="h-4 w-4 text-white" />
              ) : (
                <Play className="h-4 w-4 text-white" />
              )}
            </button>
            <button
              onClick={toggleMute}
              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? (
                <VolumeX className="h-4 w-4 text-white" />
              ) : (
                <Volume2 className="h-4 w-4 text-white" />
              )}
            </button>
          </div>
          <div
            className="w-32 h-1 bg-white/20 rounded-full cursor-pointer"
            onClick={handleProgressClick}
          >
            <div
              className="h-full bg-purple-500 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
      */}

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
