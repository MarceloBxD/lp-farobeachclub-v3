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
  childrenArray?: React.ReactNode[];
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
  navigation?: boolean;
}

const Swiper: React.FC<SwiperProps> = ({
  childrenArray,
  slidesPerView = "auto",
  breakpoints,
  hasPadding,
  spaceBetween,
  autoplay = false,
  navigation = true,
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
      spaceBetween={spaceBetween ? spaceBetween :20}
      pagination={{
        clickable: true,
        dynamicBullets: true,
        dynamicMainBullets: 3,
      }}
      autoplay={
        autoplay
          ? {
              delay: 2000,
              pauseOnMouseEnter: true,
            }
          : false
      }
      navigation={navigation}
      breakpoints={breakpoints}
      style={{
        width: "100%",
        paddingLeft: 20,
        paddingRight: 20,
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
