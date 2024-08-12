import React from "react";
import Image from "next/legacy/image";
import Swiper from "@/components/Swiper";
import { Title } from "@/components/Texts";
import { Wrapper } from "@/components";
import { CustomerProps } from "@/types/content";
import styles from "./styles.module.scss";
import scssStyles from "@/utils/scssStyles";

type ClientesProps = {
  customers: CustomerProps[];
};

const Clientes: React.FC<ClientesProps> = ({ customers }) => {
  if (customers.length < 1) return null;
  return (
    <>
      <Wrapper
        style={{
          paddingBottom: 0,
        }}
        contentStyle={{
          display: "flex",
          flexDirection: "column",
          gap: 16,
          margin: "30px auto",
        }}
      >
        <Title style={{ margin: "-20px auto 24px" }}>Clientes</Title>
        <div className={scssStyles(["desktop", styles.customersContainer])}>
          {customers.map((client, index) => (
            <div className={styles.customerItem} key={index}>
              <Image
                style={{
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  objectFit: "contain",
                }}
                alt={client.title}
                width={120}
                height={120}
                src={client.banner}
              />
            </div>
          ))}
        </div>
      </Wrapper>
      <div
        className="mobile"
        style={{
          marginBottom: "24px",
        }}
      >
        <Swiper
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
    </>
  );
};

export default Clientes;
