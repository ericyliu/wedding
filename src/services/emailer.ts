import { ServerClient } from "postmark";
import rsvpResponse from "./rsvp-response.html";

if (!process.env.POSTMARK_API_KEY) throw new Error("No postmark API key found");
const client = new ServerClient(process.env.POSTMARK_API_KEY);

export const sendRSVPEmail = (to: string) =>
  client.sendEmail({
    To: to,
    From: "notify@ericangela.love",
    Subject: "Thank you for RSVPing to Eric and Angela's Wedding!",
    HtmlBody: rsvpResponse,
  });
