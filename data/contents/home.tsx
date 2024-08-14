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
            150 clientes, proporcionando experiências extraordinárias em{" "}
            <b>
              eventos Corporativos, Festas de Fim de Ano, Formaturas,
              Aniversários, Casamentos, Plenárias
            </b>{" "}
            e muito mais. Além disso, orgulhamo-nos de ter realizado mais de 120
            shows inesquecíveis, trazendo artistas renomados do cenário mundial
            para nossos palcos.
          </p>
          <p>
            Estamos prontos para construir parcerias estratégicas e oferecer a
            você toda nossa <b>expertise</b> para
            <br /> transformar o <b>seu evento em uma experiencia de sucesso</b>
          </p>
        </>
      ),
      bullets: (
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
            maxWidth: "80%",
            margin: "0 auto",
            placeItems: "center",
          }}
        >
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Festas de Fim de Ano</b>
          </li>
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Shows</b>
          </li>
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Eventos Corporativos</b>
          </li>
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Formaturas</b>
          </li>
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Casamentos</b>
          </li>
          <li
            style={{
              fontWeight: 900,
              color: "#83A3A1",
              fontSize: "19px",
            }}
          >
            <b>Muito Mais!</b>
          </li>
        </ul>
      ),
      title: (
        <div
          style={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <div>
            O Local <br className="desktop" />
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Exclusivo{" "}
            </span>
            <br />
            Para Eventos{" "}
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Inesquecíveis
            </span>
          </div>

          <div
            style={{
              fontSize: "1.5rem",
            }}
          >
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Transforme{" "}
            </span>
            <br />
            Seu Evento com o{" "}
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Charme
            </span>
            <br /> do{" "}
            <span
              style={{
                fontWeight: 900,
                color: "#83A3A1",
              }}
            >
              Faro Beach Club
            </span>
          </div>
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
          <li>Capacidade de até 1000 pessoas (Pista livre)</li>
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
      description: (
        <p>
          <b
            style={{
              fontSize: "1.1rem",
            }}
          >
            Estamos prontos para construir parcerias estratégicas e oferecer a
            você toda nossa expertise para auxiliá-lo na produção do seu evento
            do início ao fim.
          </b>
        </p>
      ),
    },

    anchor: "infraestrutura",
  },
];
