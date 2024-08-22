import { Wrapper } from "@/components";
import { Feedback } from "@/components/Feedback/FeedbackRoot";

import { FEEDBACKS_DATA } from "@/data/feedbacks";

import styles from "./styles.module.scss";
import { Description, Title } from "@/components/Texts";
import { useApp } from "@/context/AppContext";
import Swiper from "@/components/Swiper";
import { Tokens } from "@/data/tokens";

const Testimonials = () => {
  const {
    device: { isMobile },
  } = useApp();

  return (
    <Wrapper>
      <Title
        style={{
          textAlign: isMobile ? "center" : "left",
          marginBottom: "24px",
        }}
      >
        <b
          style={{
            color: Tokens.colors.brand.beachclub_rooftop,
          }}
        >
          Depoimentos
        </b>
      </Title>
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? "24px" : "16px",
          justifyContent: "center",
        }}
      >
        {FEEDBACKS_DATA.map((feedback, index) => (
          <div className={styles.feedbackCard} key={index}>
            <div className={styles.upperCard}>
              <Feedback.Content text={feedback.content} />
              {/* <Feedback.Image imageUrl={feedback.companyLogo} /> */}
            </div>
            <div className={styles.divider} />
            <div className={styles.authorData}>
              <Title
                style={{
                  fontWeight: 500,
                }}
              >
                {feedback.author}
              </Title>
              <Description
                style={{
                  fontStyle: "italic",
                  color: "#aaa",
                }}
              >
                {feedback.company}
              </Description>
            </div>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default Testimonials;
