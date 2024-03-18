import React, { useState } from "react";
import { motion } from "framer-motion";
import "../faqs/Faqs.css";

// import Line70 from "../../Assets/images/Line70.png";

const data = [
  {
    question: "How does URL shortening work?",
    answer:
      "URL shortening works by taking a long URL and creating a shorter, condensed version that redirects to the original URL. When a user clicks on the shortened link, they are redirected to the intended destination.",
  },
  {
    question:
      "Is it necessary to create an account to use the URL shortening service?",
    answer:
      "There are many benefits to participating in the mentorship program: Increased knowledge and skills, Improved career development, Enhanced confidence and self-esteem, Stronger professional networks",
  },
  {
    question: "Are the shortened links permanent? Will they expire?",
    answer:
      "Anyone can participate in this mentorship program, regardless of their age, experience, or background. The program can be beneficial for people in all stages of their lives, from students and young professionals to experienced executives looking to switch career tracks.",
  },
  {
    question: "Are there any limitations on the number of URLs I can shorten?",
    answer:
      "There are two tracks in the mentorship (Beginner and Intermediate). Mentors and mentees meet on a weekly basis to discuss their goals, challenges, progress and give tasks depending on their tracks. Mentors also provide mentees with feedback, advice, and resources.",
  },
  {
    question:
      "Can I customize the shortened URLs to reflect my brand or content?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
  {
    question:
      "How secure is the URL shortening service? Are the shortened links protected against spam or malicious activity?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
  {
    question: "What is a QR code and what can it do?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
  {
    question: "Can I track the performance of my shortened URLs?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
  {
    question:
      "Is there an API available for integrating the URL shortening service into my own applications or websites?",
    answer:
      "Mentees are expected to show up for weekly sessions and dedicate about 2 hours to these sessions. They are expected to perform weekly tasks and contribute to conversations on team chats.",
  },
];

const Faq = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section id="faqs">
      <motion.div className="accordion_wrapper">
        <div className="main_faqwrapper">
          <div className="accordion_one">
            <div className="accordion_two">
              {data.map((item, i) => (
                <div className="item" key={i}>
                  <div className="accordion_three" onClick={() => toggle(i)}>
                    <h2>{item.question}</h2>

                    <span className="sign">{selected === i ? "-" : "+"} </span>
                  </div>

                  <div
                    className={
                      selected === i ? "accordion_four" : "accordion_five"
                    }
                  >
                    {item.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="faq_wrap">
        <div className="faq_container">
          <div className="faq_last_section">
            <h1>Revolutionizing Link Optimization</h1>
            <button> Get Started</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
