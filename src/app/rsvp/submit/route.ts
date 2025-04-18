import { submit } from "@/services/google";
import { sendRSVPEmail } from "@/services/emailer";
import { RSVPRequestBody } from "@/types/routes";
import { NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  if (request.method !== "POST") {
    return new Response(`Method ${request.method} Not Allowed`, {
      status: 405,
    });
  }
  const {
    name,
    email,
    additionalGuestCount,
    additionalGuests,
    dietaryRestrictions,
    otherComments,
  }: RSVPRequestBody = await request.json();
  await sendRSVPEmail(email);
  await submit([
    name,
    email,
    additionalGuestCount.toString(),
    additionalGuests.filter((guest) => !!guest).join(", "),
    dietaryRestrictions,
    otherComments,
  ]);
  return new Response("Success", { status: 200 });
};
