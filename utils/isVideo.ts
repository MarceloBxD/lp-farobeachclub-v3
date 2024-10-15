export const isVideoUrl = (url: string) => {
  if (!url) return false;

  if (
    url.includes("youtube") ||
    url.includes("youtu.be") ||
    url.includes("player.vimeo") ||
    url.includes(".mp4") ||
    url.includes("video")
  ) {
    return true;
  }

  return false;
};
