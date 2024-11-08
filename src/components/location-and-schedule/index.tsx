import React, { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import { Section } from "../section";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";

export const LocationAndSchedule = () => {
  const [countdown, setCountdown] = useState("");

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const variants: Variants = {
    in: {
      top: 0,
      transition: { duration: 1 },
    },
    out: {
      top: "-34%",
      transition: { duration: 1 },
    },
  };

  useEffect(() => {
    const weddingDate = new Date("2025-04-19T17:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      const timeLeft = weddingDate.getTime() - now.getTime();

      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

      setCountdown(`${days}`);

      if (timeLeft < 0) {
        clearInterval(interval);
        setCountdown("The event has started!");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section ref={ref}>
      <div className={styles.columns}>
        <div className={`${styles.column} ${styles.right}`}>
          <h2 className={styles.header}>Location</h2>
          <p className={`${styles.text} ${styles.bold}`}>Asian Jewels</p>
          <p className={styles.text}>133-30 39th Ave, Flushing, NY 11354</p>
        </div>
        <iframe
          className={`${styles.column} ${styles.map}`}
          width="600"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-Zrmli7Gew3vvg9h3-_qPdR0igFm9Fcs
    &q=Asian+Jewels,Flushing+NY"
        />
      </div>
      <div className={styles.columns}>
        <div className={`${styles.column} ${styles.countdown}`}>
          <h3>Only</h3>
          <p className={styles.countdownText}>{countdown}</p>
          <p>days to go!</p>
          <motion.div
            initial="in"
            animate={inView ? "out" : "in"}
            variants={variants}
            className={styles.loki}
          >
            <Image className={styles.image} src="/loki.png" alt="loki" fill />
          </motion.div>
        </div>
        <div className={styles.column}>
          <h2 className={styles.header}>Schedule</h2>
          <p className={styles.text}>
            5:00pm - Doors open with dinner and refreshments
          </p>
          <p className={`${styles.text} ${styles.bold}`}>Cocktail attire</p>
        </div>
      </div>
    </Section>
  );
};
