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
            Somos um local que combina o estilo de vida europeu com a energia
            única do Rio de Janeiro. Oferecemos conforto, alta gastronomia e
            alegria carioca, proporcionando uma experiência incrível para todas
            as tribos, celebrando diversidade, igualdade e mantendo sempre o
            respeito ao meio ambiente como uma de nossas principais
            preocupações.
            <br />
            <br />
            Nosso espaço dispõe de estrutura altamente versátil para atender
            você de forma única e exclusiva para receber
          </p>

          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              justifyContent: "center",
              gap: "1rem",
              width: "100%",
              maxWidth: "750px",
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
                  fontSize: "19px"
                }}
            >
              <b>Shows</b>
            </li>
            <li
              style={{
                fontWeight: 900,
                color: "#83A3A1",
                fontSize: "19px"
              }}
            >
              <b>Eventos Corporativos</b>
            </li>
            <li
              style={{
                fontWeight: 900,
                color: "#83A3A1",
                fontSize: "19px"
              }}
            >
              <b>Formaturas</b>
            </li>
            <li
              style={{
                fontWeight: 900,
                color: "#83A3A1",
                fontSize: "19px"
              }}
            >
              <b>Casamentos</b>
            </li>
            <li
              style={{
                fontWeight: 900,
                color: "#83A3A1",
                fontSize: "19px"
              }}
            >
              <b>Muito Mais!</b>
            </li>
          </ul>
        </>
      ),
      title: (
        <div
          style={{
            textAlign: "center",
          }}
        >
          O LOCAL <br className="desktop" />
          <span
            style={{
              fontWeight: 900,
              color: "#83A3A1",
            }}
          >
            EXCLUSIVO{" "}
          </span>
          <br />
          PARA EVENTOS{" "}
          <span
            style={{
              fontWeight: 900,
              color: "#83A3A1",
            }}
          >
            INESQUECÍVEIS
          </span>
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
