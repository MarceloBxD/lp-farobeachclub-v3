import { useApp } from "@/context/AppContext";
import React from "react";

export const MidiaContent = () => {
  const { modalActive } = useApp();

  if (!modalActive) return null;

  const isYoutube = modalActive?.link.includes("youtube");

  if (isYoutube) {
    return (
      <iframe
        width="100%"
        height="100%"
        src={modalActive?.link + "?autoplay=1&mute=1"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        title="YouTube video player"
        allowFullScreen
      ></iframe>
    );
  }

  return <iframe src={modalActive?.link} width="100%" height="100%"></iframe>;
};
