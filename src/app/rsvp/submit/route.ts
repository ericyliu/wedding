import { submit } from "@/services/google";
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
    additionalGuestCount,
    additionalGuests,
    dietaryRestrictions,
    otherComments,
  }: RSVPRequestBody = await request.json();
  await submit([
    name,
    additionalGuestCount.toString(),
    additionalGuests.filter((guest) => !!guest).join(", "),
    dietaryRestrictions,
    otherComments,
  ]);
  return new Response("Success", { status: 200 });
};
