"use client";

import React from "react";
import { useSpring, animated } from "react-spring";
import styles from "./styles.module.scss";
import { useApp } from "@/context/AppContext";
import BookingForm from "@/components/BookingForm";
import { ContentProps } from "@/types/content";

export type BookingProps = {
  formId: string;
  portalId: string;
  phone?: string;

};

const Booking = ({ formId, portalId, phone }: BookingProps) => {
  const { setBookingActive, bookingActive } = useApp();

  const overlayAnimation = useSpring({
    from: {
      opacity: 0,
      pointerEvents: "none",
    },
    to: {
      opacity: bookingActive ? 1 : 0,
      pointerEvents: bookingActive ? "all" : "none",
    },
    reverse: !bookingActive,
  });

  const formAnimation = useSpring({
    from: {
      transform: "translateX(100%)",
    },
    to: {
      transform: bookingActive ? `translateX(0)` : `translateX(100%)`,
    },
    reverse: !bookingActive,
  });

  const onOverlayClick = (e: any) => {
    if (e.target.id === "overlay-booking") {
      setBookingActive(false);
    }
  };

  return (
    <animated.div
      className={styles.overlay}
      style={{
        ...(overlayAnimation as any),
      }}
      onClick={onOverlayClick}
      id="overlay-booking"
    >
      <BookingForm
        formId={formId}
        portalId={portalId}
        formAnimation={formAnimation}
        phone={phone}
      />
    </animated.div>
  );
};

export default Booking;
