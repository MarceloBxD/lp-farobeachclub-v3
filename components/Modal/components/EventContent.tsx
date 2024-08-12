import React from "react"
import styles from "../styles.module.scss"
import Image from "next/legacy/image"
import { useApp } from "@/context/AppContext"
import { Description, Title } from "@/components/Texts"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { markdownOptions } from "@/utils/markdownOptions"
import Button from "@/components/Button"

const EventContent: React.FC = () => {
  const { modalActive } = useApp()

  if (!modalActive) return null

  return (
    <div className={styles.eventContent}>
      <div className={styles.eventBanner}>
        <Image
          src={modalActive.banner}
          layout="fill"
          objectFit="cover"
          alt="Programação"
        />
      </div>
      <div className={styles.textContent}>
        <div
          style={{
            height: `calc(100% - ${modalActive.instagram ? "120px" : "60px"})`,
          }}
        >
          <Title>{modalActive.title}</Title>
          <Description
            style={{
              overflowY: "auto",
            }}
          >
            {documentToReactComponents(
              modalActive?.description,
              markdownOptions
            )}
          </Description>
        </div>
        <div>
          <Button link={modalActive.link} id="comprar_ingresso_click">
            Comprar <b>ingressos</b>
          </Button>
          {modalActive.instagram && (
            <Button variant="brand-white" link={modalActive.instagram}>
              Ver no instagram do evento
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default EventContent
