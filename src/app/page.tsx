import Image from "next/image";
import styles from "./page.module.css";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <div className={styles.backgroundLantern}>
          <Image src="/background-lantern.png" alt="lantern" fill />
        </div>
        <div className={styles.backgroundLantern}>
          <Image src="/background-lantern.png" alt="lantern" fill />
        </div>
      </div>
      <div className={styles.doorContainer}>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
        <div className={styles.door}>
          <Image src="/door.png" alt="door" fill />
        </div>
      </div>
    </main>
  );
}
