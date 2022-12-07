import Nodemailer from "../lib/nodemailer/nodemailer";
import {
  emailToAdminHTMLTemplate,
  emailToAdminTXTTemplate,
} from "../lib/nodemailer/adminTemplate";
import { EmailInfo, EmailOption } from "../types/Email";
import {
  emailToCustomerHTMLTemplate,
  emailToCustomerTXTTemplate,
} from "../lib/nodemailer/customerTemplate";

export const sendAdminEmail = async (
  emailInfo: EmailInfo
): Promise<boolean> => {
  const mailOption: EmailOption = {
    from: `"I Soli Di Claudio" <${process.env.NODEMAILER_EMAIL}>`, // sender address
    to: process.env.NODEMAILER_EMAIL, // list of receivers
    subject: `${emailInfo.name} ${emailInfo.surname} ti ha mandato un messaggio`, // Subject line
    text: emailToAdminTXTTemplate(emailInfo), // plaintext body
    html: emailToAdminHTMLTemplate(emailInfo), // html body
  };

  return Nodemailer.sendEmail(mailOption);
};

export const sendCustomerEmail = async (
  emailInfo: EmailInfo
): Promise<boolean> => {
  const mailOption: EmailOption = {
    from: `"I Soli Di Claudio" <${process.env.NODEMAILER_EMAIL}>`, // sender address
    to: emailInfo.email, // list of receivers
    subject: "Grazie per avermi contattato", // Subject line
    text: emailToCustomerTXTTemplate(emailInfo), // plaintext body
    html: emailToCustomerHTMLTemplate(emailInfo), // html body
  };

  return Nodemailer.sendEmail(mailOption);
};
