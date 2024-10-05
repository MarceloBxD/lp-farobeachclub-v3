import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import Logo from "@/components/Logo";
import styles from "./styles.module.scss";
import { ArrowDownBanner } from "@/components/ArrowDownBanner";
import DisclosureEvent from "@/components/DisclosureEvent";
import { ContentProps } from "@/types/content";
import SoundWave from "@/components/SoundWave";
import { isVideoUrl } from "@/utils/isVideo";
import bannerPoster from "@/public/home.jpg";

type BannerProps = {
  event?: ContentProps;
  content: {
    mobile: string[];
    desktop: string[];
  };
};

const Banner: React.FC<BannerProps> = ({ event, content }) => {
  const [url, setUrl] = useState<string>(content.desktop[0]);
  const [isMuted, setIsMuted] = useState<boolean>(true);

  const toggleMute = () => setIsMuted(!isMuted);

  useEffect(() => {
    const handleResize = () => {
      setUrl(window.innerWidth < 768 ? content.mobile[0] : content.desktop[0]);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [content.desktop, content.mobile]);
  
  useEffect(() => {
    console.log('url', url);
  }, [url]);

  return (
    <div className={styles.wrapper}>
      <>
        <DisclosureEvent event={event} />
        {!isVideoUrl(url) ? (
          <Image
            src={bannerPoster}
            alt="Faro Beach Club"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        ) : (
          <video
            src={url}
            width="100%"
            height="100vh"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster={bannerPoster.src}
            onLoad={() => {
              const video = document.querySelector("video");
              video?.play();
            }}
          />
        )}
      </>

      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className="absolute h-[100dvh] w-screen">
        {isVideoUrl(url) && <SoundWave onClick={toggleMute} muted={isMuted} />}
        <ArrowDownBanner />
      </div>
    </div>
  );
};

export default Banner;
