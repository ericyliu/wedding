import React, { useRef } from "react";
import styles from "./index.module.css";
import { Section } from "../section";
import Image from "next/image";
import { useInView, Variants, motion } from "framer-motion";

export const TravelAccommodations = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3 });
  const variants: Variants = {
    in: {
      top: 0,
      transition: { duration: 1 },
    },
    out: {
      top: "-40%",
      transition: { duration: 1 },
    },
  };
  return (
    <Section ref={ref}>
      <h2 className={styles.title}>Travel & Accommodations</h2>
      <p className={`${styles.text} ${styles.center}`}>
        We recommend flying into{" "}
        <a
          href="https://maps.app.goo.gl/6c5qubwE2VX2pNCM9"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Laguardia Airport
        </a>{" "}
        or
        <br />
        <a
          href="https://maps.app.goo.gl/eW3ywA6A7Nq9iA3RA"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          John F. Kennedy International Airport
        </a>
      </p>

      <div className={styles.columns}>
        <div className={`${styles.column} ${styles.right}`}>
          <p className={styles.text}>We will have a hotel block for</p>
          <p className={`${styles.text} ${styles.bold}`}>
            Hyatt Place Flushing/LaGuardia Airport
          </p>
          <p className={styles.text}>133-42 39th Ave, Flushing, NY 11354</p>
          <a
            href="https://www.hyatt.com/hyatt-place/en-US/nyczf-hyatt-place-flushing-laguardia-airport?corp_id=G-WBYL"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Book here
          </a>
          <p className={`${styles.text} ${styles.small}`}>
            (Hotel block bookings must be within the following dates: 4/18 -
            4/20)
          </p>
        </div>
        <div className={`${styles.column} ${styles.map}`}>
          <iframe
            className={styles.mapInner}
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-Zrmli7Gew3vvg9h3-_qPdR0igFm9Fcs
    &q=Hyatt+Place+Flushing/LaGuardia+Airport"
          />
          <motion.div
            initial="in"
            animate={inView ? "out" : "in"}
            variants={variants}
            className={styles.teemo}
          >
            <Image className={styles.image} src="/teemo.png" alt="teemo" fill />
          </motion.div>
        </div>
      </div>

      <p className={`${styles.text} ${styles.long}`}>
        If you are not staying by Flushing NY, there are a couple modes of
        transportation to get to the venue. Uber/Lyft/Taxi are all very easy to
        find. If you are looking for a more local experience, the NYC subway or
        Long Island Railroad are both options that stop in Flushing. The subway
        has the 7 train which has the final stop{" "}
        <a
          href="https://maps.app.goo.gl/ikgiMBEhSsDktswE8"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Flushing-Main St
        </a>{" "}
        located in the heart of Flushing and only two blocks for the venue. The{" "}
        <a
          href="https://maps.app.goo.gl/gochodCkMoswbmrd6"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          Long Island Railroad stop
        </a>{" "}
        is only a little further which is about three blocks from the venue.
      </p>

      <p className={`${styles.text} ${styles.center}`}>
        There are plenty of great dining options near the venue and hotel. Check
        out some of our favorite spots.
      </p>
      <ul className={styles.favoriteSpots}>
        <li className={styles.spot}>
          <a
            href="https://maps.app.goo.gl/JMhAaV2aHfA9PbWG6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/jue-wei-bbq-cart.jpg"
              fill
              className={styles.image}
              alt="Jue Wei BBQ Cart"
            />
            <div className={styles.name}>
              Jue Wei BBQ Cart
              <p className={styles.description}>
                The beef and lamb skewers are a must try!
              </p>
            </div>
          </a>
        </li>
        <li className={styles.spot}>
          <a
            href="https://maps.app.goo.gl/Bp74Kq4TvzPJLytT9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/joes-steam-rice-roll.jpg"
              fill
              className={styles.image}
              alt="Joe's Steam Rice Roll"
            />
            <div className={styles.name}>
              Joe&apos;s Steam Rice Roll
              <p className={styles.description}>
                We enjoy the shrimp rice rolls!
              </p>
            </div>
          </a>
        </li>
        <li className={styles.spot}>
          <a
            href="https://maps.app.goo.gl/omquBsHWqjfYPijh7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/spot-dessert-bar.jpg"
              fill
              className={styles.image}
              alt="Spot Dessert Bar"
            />
            <div className={styles.name}>
              Spot Dessert Bar
              <p className={styles.description}>
                Try the Golden Toast or the Matcha Lava Cake!
              </p>
            </div>
          </a>
        </li>
        <li className={styles.spot}>
          <a
            href="https://maps.app.goo.gl/NgUQ4GN6c4RQesKFA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/new-york-food-court.jpg"
              fill
              className={styles.image}
              alt="New York Food Court"
            />
            <div className={styles.name}>
              New York Food Court
              <p className={styles.description}>
                For those who can&apos;t decide on only one thing!
              </p>
            </div>
          </a>
        </li>
      </ul>
    </Section>
  );
};
