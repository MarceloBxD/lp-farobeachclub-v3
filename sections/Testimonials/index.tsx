import { Wrapper } from "@/components";
import { Feedback } from "@/components/Feedback/FeedbackRoot";

import { FEEDBACKS_DATA } from "@/data/feedbacks";

import styles from "./styles.module.scss";
import { Description, Subtitle, Title } from "@/components/Texts";
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
        DEPOIMENTOS
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
            <Feedback.Image imageUrl={feedback.companyLogo} />
            <Feedback.Content text={feedback.content} />
            <div className={styles.divider} />
            <div className={styles.authorData}>
              <Subtitle
                style={{
                  fontWeight: 500,
                }}
              >
                {feedback.author}
              </Subtitle>
              <Description
                style={{
                  fontStyle: "italic",
                  color: "#e29696",
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
