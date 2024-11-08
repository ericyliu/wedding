import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView, Variants } from "framer-motion";
import { useRouter } from "next/navigation";
import styles from "./index.module.css";

interface Props {
  language: string | null;
}

export const Hero = ({ language }: Props) => {
  const router = useRouter();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const lokiVariants: Variants = {
    in: {
      rotate: -60,
      transition: { delay: 0, duration: 2 },
    },
    out: {
      rotate: 0,
    },
  };
  const teemoVariants: Variants = {
    in: {
      rotate: 60,
      transition: { delay: 0, duration: 2 },
    },
    out: {
      rotate: 0,
    },
  };
  return (
    <section className={styles.container} ref={ref}>
      <div>
        <div>
          <div className={styles.backgroundLantern}>
            <Image
              className={styles.image}
              src="/background-lantern.png"
              alt="lantern"
              fill
            />
          </div>
          <div className={styles.backgroundLantern}>
            <Image
              className={styles.image}
              src="/background-lantern.png"
              alt="lantern"
              fill
            />
          </div>
        </div>
        <div>
          <motion.div
            initial={{ y: "-65%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              delay: 1.5,
              bounce: 0.3,
              type: "spring",
            }}
            className={styles.foregroundLantern}
          >
            <Image
              className={styles.image}
              src="/foreground-lantern.png"
              alt="lantern"
              fill
            />
          </motion.div>
          <motion.div
            initial={{ y: "-65%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 1.2,
              delay: 1.65,
              bounce: 0.3,
              type: "spring",
            }}
            className={styles.foregroundLantern}
          >
            <Image
              className={styles.image}
              src="/foreground-lantern.png"
              alt="lantern"
              fill
            />
          </motion.div>
        </div>
        <motion.div
          style={{ originY: 1.2 }}
          initial="in"
          animate={inView ? "out" : "in"}
          variants={lokiVariants}
          transition={{ duration: 3, delay: 2 }}
          className={styles.loki}
        >
          <Image className={styles.image} src="/loki.png" alt="loki" fill />
        </motion.div>
        <motion.div
          style={{ originY: 1.2 }}
          initial="in"
          animate={inView ? "out" : "in"}
          variants={teemoVariants}
          transition={{ duration: 3, delay: 2 }}
          className={styles.teemo}
        >
          <Image className={styles.image} src="/teemo.png" alt="loki" fill />
        </motion.div>
      </div>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 2,
          }}
          className={styles.h1}
        >
          囍
        </motion.h1>
        <div className={styles.couple}>
          <Image className={styles.image} src="/couple.png" alt="couple" fill />
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 2.5,
          }}
          className={styles.p1}
          style={
            language === "cn" ? {} : { fontFamily: "Merienda", fontWeight: 700 }
          }
        >
          {language === "cn" ? "請和我們一起慶祝" : "Angela and Eric"}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 2.5,
          }}
          className={styles.p2}
          style={
            language === "cn"
              ? {}
              : {
                  fontFamily: "Merienda",
                  fontWeight: 700,
                  fontSize: "24px",
                }
          }
        >
          {language === "cn" ? (
            <>
              <b className={styles.bold}>刘宇辉</b> 和{" "}
              <b className={styles.bold}>袁詠欣</b>
            </>
          ) : (
            "joyfully invite you to their wedding celebration on"
          )}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 3,
            delay: 3,
          }}
          className={styles.info}
          style={{
            fontFamily: language === "cn" ? "LXGW WenKai TC" : "",
          }}
        >
          <p>{language === "cn" ? "2025 年 4 月 19 日" : "April 19, 2025"}</p>
          <p>{language === "cn" ? "法拉盛, 纽约" : "Flushing, NY"}</p>
          <a href="/rsvp" className={styles.link}>
            RSVP
          </a>
        </motion.div>
        <div className={styles.languageContainer}>
          <div
            className={styles.language}
            style={
              language !== "cn"
                ? {
                    background: "#d20c1d",
                    color: "#fff7a5",
                  }
                : {}
            }
            onClick={() => {
              router.push("?language=en");
            }}
          >
            EN
          </div>
          <div
            className={styles.language}
            style={
              language === "cn"
                ? {
                    background: "#d20c1d",
                    color: "#fff7a5",
                  }
                : {}
            }
            onClick={() => {
              router.push("?language=cn");
            }}
          >
            中文
          </div>
        </div>
      </div>
    </section>
  );
};
