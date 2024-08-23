"use client";
import { useApp } from "@/context/AppContext";
import React from "react";

import styles from "./styles.module.scss";
import { animated, config, useSpring } from "react-spring";
import CloseIcon from "@/assets/icons/CloseIcon";
import EventContent from "./components/EventContent";
import { MidiaContent } from "./components/MidiaContent";

const Modal: React.FC = () => {
  const { modalActive, setModalActive } = useApp();

  const animatedProps = useSpring({
    opacity: modalActive ? 1 : 0,
    visibility: modalActive ? "visible" : "hidden",

    config: config.stiff,
  });

  const isMidia = modalActive?.type === "Midia";

  return (
    <animated.div
      className={styles.container}
      style={{
        ...(animatedProps as any),
      }}
      onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (e.target === e.currentTarget) {
          setModalActive(null);
        }
      }}
    >
      {modalActive && (
        <div
          className={styles.content}
          style={{
            padding: isMidia ? "0" : "48px",
          }}
        >
          {modalActive.type === "Programação" ? (
            <EventContent />
          ) : (
            <MidiaContent />
          )}
        </div>
      )}
      <div className={styles.modalHead}>
        <CloseIcon
          className={styles.exitButton}
          onClick={() => setModalActive(null)}
          color={isMidia ? "white" : "white"}
        />
      </div>
    </animated.div>
  );
};

export default Modal;
