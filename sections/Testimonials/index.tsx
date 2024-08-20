import { Wrapper } from "@/components";
import { Feedback } from "@/components/Feedback/FeedbackRoot";

import { FEEDBACKS_DATA } from "@/data/feedbacks";

import styles from "./styles.module.scss";
import { Description, Title } from "@/components/Texts";

const Testimonials = () => {
  return (
    <Wrapper>
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
            <Title>{feedback.author}</Title>
            <Description>{feedback.company}</Description>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};

export default Testimonials;
