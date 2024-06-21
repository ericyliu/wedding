"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.middle}>
        <div className={styles.decoration}>
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
            <div className={styles.foregroundLantern}>
              <Image
                className={styles.image}
                src="/foreground-lantern.png"
                alt="lantern"
                fill
              />
            </div>
            <div className={styles.foregroundLantern}>
              <Image
                className={styles.image}
                src="/foreground-lantern.png"
                alt="lantern"
                fill
              />
            </div>
          </div>
          <div className={styles.loki}>
            <Image className={styles.image} src="/loki.png" alt="loki" fill />
          </div>
          <div className={styles.teemo}>
            <Image className={styles.image} src="/teemo.png" alt="loki" fill />
          </div>
        </div>
        <div className={styles.content}>
          <h1 className={styles.h1}>囍</h1>
          <div className={styles.couple}>
            <Image
              className={styles.image}
              src="/couple.png"
              alt="couple"
              fill
            />
          </div>
          <p className={styles.p1}>請和我們一起慶祝</p>
          <p className={styles.p2}>
            <b className={styles.bold}>刘宇辉</b> 和{" "}
            <b className={styles.bold}>袁詠欣</b>
          </p>
          <div className={styles.info}>
            <p>April 19, 2025</p>
            <p>Queens, NY</p>
          </div>
        </div>
      </div>
      <div className={styles.doorContainer}>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 1.7 }}
          className={styles.door}
        >
          <Image src="/door.png" alt="door" fill />
        </motion.div>
        <motion.div
          animate={{ x: "100%" }}
          transition={{ duration: 1.7 }}
          className={styles.door}
        >
          <Image src="/door.png" alt="door" fill />
        </motion.div>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
      </div>
    </main>
  );
}
