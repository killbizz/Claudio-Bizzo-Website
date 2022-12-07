import { sendAdminEmail } from "./../../services/email";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailInfo } from "../../types/Email";

const validateHuman = async (token: string): Promise<boolean> => {
  return true;
};

const validateForm = (infoForm: EmailInfo): boolean => {
  if (
    !infoForm.name ||
    !infoForm.surname ||
    !infoForm.email ||
    !infoForm.message
  ) {
    return false;
  }
  return true;
};

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const human: boolean = await validateHuman(req.body.token);

  if (!human) {
    return res.status(429).json("Bot not allowed!");
  }

  const infoEmail: EmailInfo = {
    name: req.body.infoEmail.name,
    surname: req.body.infoEmail.surname,
    email: req.body.infoEmail.email,
    phone: req.body.infoEmail.phone,
    message: req.body.infoEmail.message,
  };

  if (!validateForm(infoEmail)) {
    return res.status(400).json("Fill in all the required data.");
  }

  const isSent = await sendAdminEmail(infoEmail);

  if (!isSent) {
    return res.status(502).json({ error: "Failed to send email" });
  }

  return res.status(200).json({ message: "Email sent correctly" });
};

export default sendEmail;
