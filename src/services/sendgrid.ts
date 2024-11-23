import sgMail from "@sendgrid/mail";

if (!process.env.SENDGRID_API_KEY) {
  throw new Error("No sendgrid API key found");
}

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmail = async (to: string) => {
  const response = await sgMail.send({
    to,
    from: "inquire@vulcancollective.io",
    templateId: "d-1e1722c81a0743d89a0fdd56db03ad90",
  });
};
