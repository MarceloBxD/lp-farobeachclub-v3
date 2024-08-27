import { TitleTextSwiperProps } from "@/sections/TitleTextSwiper";
import { TitleTextProps } from "@/components/TitleText";
import { Tokens } from "../tokens";

interface ContentProps extends TitleTextSwiperProps, TitleTextProps {}

export const eventContent: ContentProps[] = [
  {
    texts: {
      description: (
        <>
          <p>
            Nos últimos dois anos, estabelecemos conexões memoráveis com mais de
            150 clientes, proporcionando experiências extraordinárias em eventos
            Corporativos, Festas de Fim de Ano, Formaturas, Aniversários,
            Casamentos, Plenárias e muito mais. Além disso, orgulhamo-nos de ter
            realizado mais de 120 shows inesquecíveis, trazendo artistas
            renomados do cenário mundial para nossos palcos.
            <br />
            <br />
            Estamos prontos para construir parcerias estratégicas e oferecer a
            você toda nossa expertise para transformar o seu evento em uma
            experiencia única
          </p>
        </>
      ),

      title: (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            fontSize: "2.35rem",
          }}
        >
          <p>
            O Local <br className="desktop" />
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Exclusivo{" "}
            </span>
            Para Eventos{" "}
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Inesquecíveis
            </span>
          </p>
        </div>
      ),
    },
  },
  {
    button: {
      openBooking: true,
      children: (
        <>
          Quero um <b>orçamento</b>
        </>
      ),
      id: "orcamento_click",
    },
    texts: {
      title: (
        <>
          <b>Beach</b> Club
        </>
      ),

      description: (
        <ul>
          <li>Capacidade de até 900 pessoas (Pista livre)</li>
          <li>01 bar (estrutura fixa)</li>
          <li>01 Copa</li>
          <li>01 camarim com banheiro ou sala de Produção</li>
          <li>Acesso a Praia</li>
          <li>
            02 banheiros, masculino e feminino (capacidade para até 1.000
            pessoas)
          </li>
          <li>01 banheiro PNE </li>
          <li>01 gerador 180Kva</li>
          <li>01 cozinha (equipamentos sob consulta)</li>
          <li>Sistema de monitoramento e segurança</li>
        </ul>
      ),
    },
    anchor: "beachclub",
  },
  {
    button: {
      openBooking: true,
      children: (
        <>
          Quero um <b>orçamento</b>
        </>
      ),
      id: "orcamento_click",
    },
    texts: {
      title: (
        <>
          <b>Rooftop</b>
        </>
      ),
      description: (
        <ul>
          <li>Capacidade de até 1800 pessoas (Pista livre)</li>
          <li>Tenda Acústica</li>
          <li>02 bares (estrutura fixa)</li>
          <li>01 Copa (atendimento garçons)</li>
          <li>01 camarim com banheiro ou sala de produção</li>
          <li>
            02 banheiros, masculino e feminino (capacidade para até 1.800
            pessoas)
          </li>
          <li>01 cozinha (equipamentos sob consulta)</li>
          <li>01 câmara frigorifica</li>
          <li>01 gerador 180Kva</li>
          <li>12 ventiladores industrial / 12 exaustores / 4 climatizadores</li>
          <li>Sistema de monitoramento e segurança</li>
        </ul>
      ),
    },
    anchor: "rooftop",
  },
  {
    texts: {
      title: (
        <>
          O QUE{" "}
          <b style={{ color: Tokens.colors.brand.beachclub_rooftop }}>
            OFERECEMOS
          </b>
        </>
      ),
    },

    anchor: "servicos",
  },
];
