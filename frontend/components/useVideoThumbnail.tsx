import { useState, useEffect } from "react";

export function useVideoThumbnail(
  src: string,
  seekTime = 1 // seconds; use 0 for very first frame
): string | null {
  const [thumb, setThumb] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const video = document.createElement("video");
    video.crossOrigin = "anonymous";
    video.src = src;

    // once enough data is loaded, seek to desired time
    const onLoaded = () => {
      video.currentTime = seekTime;
    };

    // when seek completes, draw frame to canvas
    const onSeeked = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.drawImage(video, 0, 0);
      const dataURL = canvas.toDataURL("image/jpeg");
      setThumb(dataURL);
    };

    video.addEventListener("loadeddata", onLoaded);
    video.addEventListener("seeked", onSeeked);

    return () => {
      cancelled = true;
      video.removeEventListener("loadeddata", onLoaded);
      video.removeEventListener("seeked", onSeeked);
    };
  }, [src, seekTime]);

  return thumb;
}
