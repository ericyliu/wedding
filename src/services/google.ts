import { google } from "googleapis";

if (!process.env.GOOGLE_API_JSON) {
  throw new Error("No google api json found");
}
const key = JSON.parse(process.env.GOOGLE_API_JSON);

const client = new google.auth.JWT({
  email: key.client_email,
  key: key.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export const submit = async (values: string[]): Promise<void> => {
  await new Promise<void>((resolve) =>
    client.authorize((error) => {
      if (error) {
        throw new Error(`Error authorizing google api client: ${error}`);
      }
      resolve();
    })
  );

  const sheets = google.sheets({ version: "v4", auth: client });

  await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: "RSVP",
    valueInputOption: "RAW",
    requestBody: {
      values: [values],
    },
  });
};
