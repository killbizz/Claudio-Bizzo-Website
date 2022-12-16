import { sendAdminEmail, sendCustomerEmail } from "./../../services/email";
import type { NextApiRequest, NextApiResponse } from "next";
import { EmailInfo } from "../../types/Email";
import { validateEmailForm } from "../../lib/utility";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  const infoEmail: EmailInfo = {
    name: req.body.infoEmail.name,
    surname: req.body.infoEmail.surname,
    email: req.body.infoEmail.email,
    phone: req.body.infoEmail.phone,
    message: req.body.infoEmail.message,
  };

  const errors = validateEmailForm(infoEmail);

  if (errors.size > 0) {
    const errorsResult: any = {};
    errors.forEach((value, key) => {
      errorsResult[key] = value;
    });
    return res.status(400).json(errorsResult);
  }

  const isAdminEmailSent = await sendAdminEmail(infoEmail);
  const isCustomerEmailSent = await sendCustomerEmail(infoEmail);

  if (!isAdminEmailSent || !isCustomerEmailSent) {
    return res.status(502).json({ error: `Failed to send ${isAdminEmailSent ? "admin" : "customer"} email` });
  }

  return res.status(200).json({ message: "Email sent correctly" });
};

export default sendEmail;
