"use client";

import React, { FormEventHandler, useCallback, useState } from "react";
import ReactLoading from "react-loading";
import Image from "next/image";
import styles from "./page.module.css";
import { RSVPRequestBody } from "../../types/routes";

export default function RSVP() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [additionalGuestCount, setAdditionalGuestCount] = useState<number>(0);
  const [additionalGuests, setAdditionalGuests] = useState<string[]>([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string>("");
  const [otherComments, setOtherComments] = useState<string>("");
  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      setError(null);
      event.preventDefault();
      if (email.length === 0) {
        setError("Email is required");
        return;
      }
      if (name.length === 0) {
        setError("Name is required");
        return;
      }
      setLoading(true);
      const body: RSVPRequestBody = {
        email,
        name,
        additionalGuestCount,
        additionalGuests,
        dietaryRestrictions,
        otherComments,
      };
      const response = await fetch("/rsvp/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.ok) {
        setSuccess(true);
        setLoading(false);
      }
    },
    [
      email,
      name,
      additionalGuestCount,
      additionalGuests,
      dietaryRestrictions,
      otherComments,
      setError,
    ]
  );
  return (
    <main className={styles.main}>
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
      {success && !loading && (
        <div className={`${styles.form} ${styles.loading}`}>
          <h1 className={styles.title}>
            Thanks for your RSVP {name}!<br />
            We can&apos;t wait to celebrate with you!
          </h1>
          <a className={styles.link} href="/">
            Click here for more information
          </a>
        </div>
      )}
      {loading && (
        <div className={`${styles.form} ${styles.loading}`}>
          <h1 className={styles.title}>Submitting your RSVP, please wait!</h1>
          <ReactLoading type="bubbles" color="#f5e4a3" />
        </div>
      )}
      {!loading && !success && (
        <form className={styles.form} onSubmit={onSubmit}>
          <h1 className={styles.title}>RSVP</h1>
          <div className={styles.row}>
            <label>Email</label>
            <input
              className={styles.input}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label>Name (First and Last)</label>
            <input
              className={styles.input}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className={styles.row}>
            <label>Additional Guests</label>
            <select
              className={styles.guestcount}
              value={additionalGuestCount}
              onChange={(event) => {
                const newGuestCount = parseInt(event.target.value);
                if (newGuestCount < additionalGuestCount) {
                  const guestsToRemove = additionalGuestCount - newGuestCount;
                  additionalGuests.splice(-guestsToRemove, guestsToRemove);
                  setAdditionalGuests(additionalGuests);
                } else {
                  setAdditionalGuests(
                    additionalGuests.concat(
                      new Array(newGuestCount - additionalGuestCount).fill(
                        undefined
                      )
                    )
                  );
                }
                setAdditionalGuestCount(newGuestCount);
              }}
            >
              <option value={0}>0</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
            </select>
          </div>
          {new Array(additionalGuestCount).fill(undefined).map((_, index) => (
            <div className={styles.row} key={index}>
              <label>Guest {index + 1}</label>
              <input
                className={styles.input}
                onChange={(event) => {
                  additionalGuests[index] = event.target.value;
                  setAdditionalGuests(additionalGuests);
                }}
              />
            </div>
          ))}
          <div className={`${styles.row} ${styles.textarearow}`}>
            <label>Dietary Restrictions</label>
            <textarea
              className={styles.textarea}
              onChange={(event) => setDietaryRestrictions(event.target.value)}
              value={dietaryRestrictions}
            />
          </div>
          <div className={`${styles.row} ${styles.textarearow}`}>
            <label>Any other comments or well wishes</label>
            <textarea
              className={styles.textarea}
              onChange={(event) => setOtherComments(event.target.value)}
              value={otherComments}
            />
          </div>
          {error && <p className={styles.error}>*{error}</p>}
          <input className={styles.button} type="submit" value="Submit" />
        </form>
      )}
    </main>
  );
}
