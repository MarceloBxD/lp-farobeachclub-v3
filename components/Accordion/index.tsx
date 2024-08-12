"use client";

import React, { useState, useEffect, useRef } from "react";
import Text from "../Text";

import styles from "./styles.module.scss";
import scssStyles from "@/utils/scssStyles";
import DataLayer from "@/utils/DataLayer";

type AccordionProps = {
  title: string | React.ReactNode;
  content: string | React.ReactNode;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = isActive
        ? `${contentRef.current.scrollHeight}px`
        : "0px";
    }
  }, [isActive]);

  const toggleIsActive = () => {
    setIsActive(!isActive)
    
    DataLayer.clickEvent({
      element: title?.toString() || "accordion",
      elementCategory: "accordion",
      pageSection: "perguntas_frequentes",
      pageSubsection: "faq",
    });
  };

  return (
    <div className={styles.container}>
      <button
        onClick={toggleIsActive}
        className={styles.button}
        aria-expanded={isActive}
      >
        <Text>{title}</Text>

        <svg
          className={scssStyles([
            styles.chevronIcon,
            isActive ? styles.rotate : "",
          ])}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div ref={contentRef} className={styles.content}>
        <div className={styles.contentText}>
          {typeof content === "string" ? (
            <Text className="w-full">{content}</Text>
          ) : (
            content
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
