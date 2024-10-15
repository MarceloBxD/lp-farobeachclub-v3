import React, { useEffect, useState } from "react"
import Image from "next/legacy/image"
import Logo from "@/components/Logo"
import styles from "./styles.module.scss"
import { ArrowDownBanner } from "@/components/ArrowDownBanner"
import DisclosureEvent from "@/components/DisclosureEvent"
import { ContentProps } from "@/types/content"
import SoundWave from "@/components/SoundWave"
import { isVideoUrl } from "@/utils/isVideo"
import bannerPoster from "@/public/home.jpg"

type BannerProps = {
  event?: ContentProps
  content: {
    mobile: string[]
    desktop: string[]
  }
}

const Banner: React.FC<BannerProps> = ({ event, content }) => {
  const [isMuted, setIsMuted] = useState<boolean>(true)

  const [videoUrl, setVideoUrl] = useState('https://player.vimeo.com/progressive_redirect/playback/1016544594/rendition/1080p/file.mp4?loc=external&signature=e60d7c349b096055e4bb3211a80571bc995ceeaad3837f1d0c1fef1d55e458f2');

  const toggleMute = () => setIsMuted(!isMuted)

  useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 768) {
          setVideoUrl('https://player.vimeo.com/progressive_redirect/playback/1016544619/rendition/1080p/file.mp4?loc=external&signature=abe98db71152194fc5516436697fa5c293656d28ecbd1cdcdd3244bbb0d09005')
        } else {
          setVideoUrl('https://player.vimeo.com/progressive_redirect/playback/1016544594/rendition/1080p/file.mp4?loc=external&signature=e60d7c349b096055e4bb3211a80571bc995ceeaad3837f1d0c1fef1d55e458f2')
        }
      }

      handleResize()

      window.addEventListener('resize', handleResize)

      return () => window.removeEventListener('resize', handleResize)
  }, [])


  return (
    <div className={styles.wrapper}>
      <>
        <DisclosureEvent event={event} />
        {!isVideoUrl(videoUrl) ? (
          <Image
            src={bannerPoster}
            alt="Faro Beach Club"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        ) : (
          <video
            src={videoUrl}
            width="100%"
            height="100vh"
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            onLoad={() => {
              const video = document.querySelector("video")
              video?.play()
            }}
          />
        )}
      </>

      <div className={styles.logo_wrapper}>
        <Logo />
      </div>
      <div className="absolute h-[100dvh] w-screen">
        {isVideoUrl(videoUrl) && <SoundWave onClick={toggleMute} muted={isMuted} />}
        <ArrowDownBanner />
      </div>
    </div>
  )
}

export default Banner
