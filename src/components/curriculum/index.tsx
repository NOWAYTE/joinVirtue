// Curriculum.tsx
import CourseCurriculum from "./Course";

const curriculumTitle = "Build Smarter, Not Harder";

const curriculumSubtitle = "What You'll Learn Inside the Program";

const faqData = {
  title: "FAQs",
  subtitle: "Clearing doubts and concerns.",
  faqs: [
    {
      question: "How much content is there?",
      answer: "There is a mix of text and video. Text covering the fundamentals and main concepts. With video covering more high level concepts and sharing my thoughts. We estimate there is around 30-40 hours of content"
    },
    {
      question: "Do I need a large following to make money online?",
      answer: "No! I started making money from digital products without any followers. I grew my audience alongside selling products. This course focuses on proven methods that don't rely on having thousands of followers. You'll learn how to grow an engaged audience from scratch and attract customers the right way. I started from nothing, with no followers. I will show how to do the same."
    },
    {
      question: "How much time will I need to complete the course?",
      answer: "The course is designed to fit your schedule. You can finish it in as little time as possible, or take it step-by-step at your own pace."
    },
    {
      question: "Is this course beginner friendly?",
      answer: "Yes! The course is perfect for beginners. Everything is explained in simple, actionable steps, with templates and examples to guide you. My aim is to share everything as if I were to start from zero."
    },
    {
      question: "What if I don't know what online business I want to start yet?",
      answer: "No worries! There's a dedicated section to help you brainstorm and choose your first online idea based on your strengths and interests."
    },
    {
      question: "How do I get support if I get stuck?",
      answer: "You'll have access to our private community where you can ask questions, get feedback, and even get direct advice from me. This is part of the Accelerator package."
    },
    {
      question: "Will this work if I'm not tech-savy?",
      answer: "Absolutely! I've included simple tech walkthroughs to make setting everything up easy — even if you've never done it before."
    }
  ]
};

const Curriculum = () => {
  return (
    <CourseCurriculum
      title={faqData.title}
      subtitle={faqData.subtitle}
      faqs={faqData.faqs}
    />
  );
};

export default Curriculum;
