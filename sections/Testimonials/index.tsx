import { Wrapper } from "@/components";
import { Feedback } from "@/components/Feedback/FeedbackRoot";

import { FEEDBACKS_DATA } from "@/data/feedbacks";

import styles from "./styles.module.scss";
import { Description, Title } from "@/components/Texts";
import { useApp } from "@/context/AppContext";
import Swiper from "@/components/Swiper";

const Testimonials = () => {
  const {
    device: { isMobile },
  } = useApp();

  return (
    <Wrapper>
      {isMobile ? (
        <Swiper
          slidesPerView={1}
          childrenArray={FEEDBACKS_DATA.map((feedback, index) => (
            <div className={styles.feedbackCard} key={index}>
              <div className={styles.upperCard}>
                <Feedback.Content text={feedback.content} />
                {/* <Feedback.Image imageUrl={feedback.companyLogo} /> */}
              </div>
              {/* Divider */}
              <div className={styles.divider} />
              {/* Divider */}
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
                  }}
                >
                  {feedback.company}
                </Description>
              </div>
            </div>
          ))}
        />
      ) : (
        <>
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
            }}
          >
            {FEEDBACKS_DATA.map((feedback, index) => (
              <div className={styles.feedbackCard} key={index}>
                <div className={styles.upperCard}>
                  <Feedback.Content text={feedback.content} />
                  {/* <Feedback.Image imageUrl={feedback.companyLogo} /> */}
                </div>
                {/* Divider */}
                <div className={styles.divider} />
                {/* Divider */}
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
                    }}
                  >
                    {feedback.company}
                  </Description>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </Wrapper>
  );
};

export default Testimonials;
