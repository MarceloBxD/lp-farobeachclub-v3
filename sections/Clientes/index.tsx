import React from "react";
import Image from "next/legacy/image";
import Swiper from "@/components/Swiper";
import { CustomerProps } from "@/types/content";
import { Badge } from "@/components/Badge";

type ClientesProps = {
  customers: CustomerProps[];
};

const Clientes: React.FC<ClientesProps> = ({ customers }) => {
  if (customers.length < 1) return null;
  return (
    <>
      <Badge text='Marcas que celebraram conosco' color='black' />

      <div
        className="mobile"
        style={{
          margin: "24px 0",
        }}
      >
        <Swiper
          navigation={false}
          slidesPerView={2}
          style={{
            width: "100%",
            overflowY: "visible",
            height: "100%",
          }}
          childrenArray={customers.map((customer, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "120px",
                  pointerEvents: "none",
                }}
                key={index}
              >
                <Image
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                  }}
                  alt={customer.title}
                  width={120}
                  height={120}
                  src={customer.banner}
                />
              </div>
            );
          })}
        />
      </div>
      <div
        className="desktop"
        style={{
          marginBottom: "24px",
        }}
      >
        <Swiper
          navigation={false}
          autoplay
          slidesPerView={5}
          style={{
            width: "100%",
            overflowY: "visible",
            height: "100%",
            padding: "84px 0",
          }}
          childrenArray={customers.map((customer, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "120px",
                  pointerEvents: "none",
                }}
                key={index}
              >
                <Image
                  style={{
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                  }}
                  alt={customer.title}
                  width={120}
                  height={120}
                  src={customer.banner}
                />
              </div>
            );
          })}
        />
      </div>
    </>
  );
};

export default Clientes;
