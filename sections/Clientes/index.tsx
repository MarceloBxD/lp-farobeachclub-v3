import React from "react";
import Image from "next/legacy/image";
import { CustomerProps } from "@/types/content";
import { Badge } from "@/components/Badge";
import styles from "./styles.module.scss";

type ClientesProps = {
  customers: CustomerProps[];
};

const Clientes: React.FC<ClientesProps> = ({ customers }) => {
  if (customers.length < 1) return null;
  return (
    <div className={styles.clientesContainer}>
      <div className={styles.customersContainer}>
        <Badge text="Marcas que celebraram conosco" color="black" />
        <div className={styles.customersWrapper}>
          {customers.map((customer, index) => (
            <div key={index} className={styles.customerItem}>
              <Image
                src={customer.banner}
                alt={customer.title}
                width={120}
                height={90}
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clientes;
