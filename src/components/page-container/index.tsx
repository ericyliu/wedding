import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { motion } from "framer-motion";

export const PageContainer = ({ children }: React.PropsWithChildren) => {
  return (
    <main className={styles.main}>
      <motion.div
        animate={{ zIndex: 99 }}
        transition={{ delay: 1.5, duration: 0.1 }}
        className={styles.middle}
      >
        {children}
      </motion.div>
      <div className={styles.doorContainer}>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
        <motion.div
          animate={{ x: "-100%" }}
          transition={{ duration: 1.7, delay: 0.5 }}
          className={styles.door}
        >
          <Image src="/door.png" alt="door" fill />
        </motion.div>
        <motion.div
          animate={{ x: "100%" }}
          transition={{ duration: 1.7, delay: 0.5 }}
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
};
