"use client";

import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";
import { ContentProps } from "@/types/content";

type ContextProps = {
  pageMargin: number;
  setPageMargin: React.Dispatch<React.SetStateAction<number>>;

  bookingActive: boolean;
  setBookingActive: React.Dispatch<React.SetStateAction<boolean>>;

  device: {
    isMobile: boolean;
    isDesktop: boolean;
  };
  setDevice: React.Dispatch<
    React.SetStateAction<{
      isMobile: boolean;
      isDesktop: boolean;
    }>
  >;

  modalActive: ContentProps | null;
  setModalActive: React.Dispatch<React.SetStateAction<ContentProps | null>>;

};

const AppContext = createContext({} as ContextProps);

export function AppProvider({ children }: { children: ReactNode }) {
  const [pageMargin, setPageMargin] = useState(0);
  const [bookingActive, setBookingActive] = useState(false);
  const [modalActive, setModalActive] = useState<ContentProps | null>(null);

  const [device, setDevice] = useState<{
    isMobile: boolean;
    isDesktop: boolean;
  }>({
    isMobile: false,
    isDesktop: false,
  });

  const checkWidth = () => {
    setDevice({
      isMobile: window.innerWidth <= 768,
      isDesktop: window.innerWidth >= 769,
    });
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  const contextValue = useMemo(
    () => ({
      pageMargin,
      setPageMargin,
      bookingActive,
      setBookingActive,
      device,
      setDevice,
      modalActive,
      setModalActive,
    }),
    [
      pageMargin,
      setPageMargin,
      bookingActive,
      setBookingActive,
      device,
      setDevice,
      modalActive,
      setModalActive,
    ]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}
