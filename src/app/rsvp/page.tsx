"use client";

import React, { FormEventHandler, useCallback, useState } from "react";

import styles from "./page.module.css";
import { RSVPRequestBody } from "../../types/routes";

export default function RSVP() {
  const [name, setName] = useState<string>("");
  const [additionalGuestCount, setAdditionalGuestCount] = useState<number>(0);
  const [additionalGuests, setAdditionalGuests] = useState<string[]>([]);
  const [dietaryRestrictions, setDietaryRestrictions] = useState<string>("");
  const [otherComments, setOtherComments] = useState<string>("");
  const onSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (event) => {
      event.preventDefault();
      const body: RSVPRequestBody = {
        name,
        additionalGuestCount,
        additionalGuests,
        dietaryRestrictions,
        otherComments,
      };
      await fetch("/rsvp/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
    },
    [
      name,
      additionalGuestCount,
      additionalGuests,
      dietaryRestrictions,
      otherComments,
    ]
  );
  return (
    <main className={styles.main}>
      <form onSubmit={onSubmit}>
        <label>Name (First and Last)</label>
        <input onChange={(event) => setName(event.target.value)} />
        <label>Additional Guests</label>
        <select
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
        {new Array(additionalGuestCount).fill(undefined).map((_, index) => (
          <div key={index}>
            <label>Guest {index + 1}</label>
            <input
              onChange={(event) => {
                additionalGuests[index] = event.target.value;
                setAdditionalGuests(additionalGuests);
              }}
            />
          </div>
        ))}
        <label>Dietary Restrictions</label>
        <textarea
          onChange={(event) => setDietaryRestrictions(event.target.value)}
          value={dietaryRestrictions}
        />
        <label>Any other comments or well wishes</label>
        <textarea
          onChange={(event) => setOtherComments(event.target.value)}
          value={otherComments}
        />
        <input type="submit" />
      </form>
    </main>
  );
}
