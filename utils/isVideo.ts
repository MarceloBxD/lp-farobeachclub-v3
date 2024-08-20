export const isVideoUrl = (url: string) => {
  if (!url) return false;

  if (
    url.includes("youtube") ||
    url.includes("youtu.be") ||
    url.includes("vimeo") ||
    url.includes(".mp4") ||
    url.includes("video")
  ) {
    return true;
  }

  return false;
};
