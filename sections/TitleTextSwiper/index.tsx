import React from "react";
import TitleText, { TitleTextProps } from "../../components/TitleText";
import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/legacy/image";
import Swiper from "@/components/Swiper";
import { useApp } from "@/context/AppContext";

export interface TitleTextSwiperProps extends TitleTextProps {
  inverse?: boolean;
  video?: string;
  swiperdata?: {
    src: string | StaticImageData;
    alt: string;
  }[];
}

const TitleTextSwiper: React.FC<TitleTextSwiperProps> = ({
  button,
  swiperdata,
  inverse,
  texts: { title, description, bullets },
  anchor,
  video,
  ...props
}) => {
  const {
    device: { isMobile },
  } = useApp();
  const isMuted = true;
  const isSectionInHome = !!title // if title is empty, it's the section in home

  return (
    <div
      {...props}
      className={styles.wrapper + " " + props.className}
      style={{
        flexDirection: inverse ? "row-reverse" : "row",
        height: "fit-content",
        minHeight: isMobile ? "fit-content" : "450px",
        alignItems: "center",
        ...props.style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-80px",
        }}
        id={anchor}
      />

      <TitleText
        button={button}
        texts={{
          title,
          description,
          bullets,
        }}
        centered={isSectionInHome}
        hasMidia={!!video || !!swiperdata}
      />
      {video ? (
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            zIndex: 0,
          }}
        >
          <video
            muted={isMuted}
            autoPlay={true}
            loop={true}
            playsInline={true}
            controls={false}
            preload="auto"
            poster="public/home.jpg"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          >
            <source src={video} />
          </video>
        </div>
      ) : swiperdata ? (
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay
          childrenArray={swiperdata?.map((data, index) => (
            <div key={index} className={styles.imgSwiper}>
              <Image
                src={data.src}
                alt={data.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
          style={{
            width: isMobile ? "100%" : "50%",
          }}
        />
      ) : null}
    </div>
  );
};

export default TitleTextSwiper;
