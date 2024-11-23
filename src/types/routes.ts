export interface RSVPRequestBody {
  email: string;
  name: string;
  additionalGuestCount: number;
  additionalGuests: string[];
  dietaryRestrictions: string;
  otherComments: string;
}
