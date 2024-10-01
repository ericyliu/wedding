export interface RSVPRequestBody {
  name: string;
  additionalGuestCount: number;
  additionalGuests: string[];
  dietaryRestrictions: string;
  otherComments: string;
}
