"use client";

import React from "react";
import styles from "./styles.module.scss";
import {
  Swiper as SwiperContainer,
  SwiperRef,
  SwiperSlide,
} from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useApp } from "@/context/AppContext";
import Load from "../Load";
import { Tokens } from "@/data/tokens";

interface SwiperProps extends React.HTMLAttributes<HTMLDivElement> {
  childrenArray?: React.ReactNode[] ;
  slidesPerView?: number | "auto";
  spaceBetween?: number;
  breakpoints?: {
    [key: string]: {
      slidesPerView: number;
      spaceBetween: number;
    };
  };
  hasPadding?: boolean;
  style?: React.CSSProperties;
  classes?: "mobile" | "desktop";
  autoplay?: boolean;
}

const Swiper: React.FC<SwiperProps> = ({
  childrenArray,
  slidesPerView = "auto",
  breakpoints,
  hasPadding,
  spaceBetween,
  autoplay = false,
  style,
  classes,
}) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const {
    pageMargin,
    device: { isMobile },
  } = useApp();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1200);

    return () => clearTimeout(timeout);
  }, []);

  if (!childrenArray) return null;
  if (isLoading)
    return (
      <div className={styles.fallback}>
        <Load
          color={Tokens.colors.brand.beachclub_rooftop}
          size="120px"
          variant="balls"
        />
      </div>
    );

  return (
    <SwiperContainer
      modules={[Pagination, Navigation, Autoplay]}
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween ? spaceBetween : isMobile ? 24 : 48}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      // loop={true}
      autoplay={
        autoplay
          ? {
              delay: 7000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }
          : false
      }
      navigation={true}
      breakpoints={breakpoints}
      style={{
        width: isMobile ? "100%" : "70%",
        paddingLeft: hasPadding ? pageMargin : 0,
        paddingRight: hasPadding ? pageMargin : 0,
        paddingBottom: childrenArray.length > 1 ? 64 : 0,
        overflowY: "visible",
        ...style,
      }}
    >
      {childrenArray.map((child, index) => (
        <SwiperSlide
          className={classes}
          key={index}
          style={{
            width: "fit-content",
            height: "100%",
          }}
        >
          {child}
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};

export default Swiper;
