import { EmailInfo } from "../../types/Email";

export const emailToCustomerHTMLTemplate = (emailInfo: EmailInfo): string => {
  const html: string = `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  
  </head>
  
  <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #34495e">
    <h1> DAGHE </h1>
  </body>
  
  </html>
  `;

  return html;
};

export const emailToCustomerTXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao ${emailInfo.name} ${emailInfo.surname},\n\n
    Ti ringrazio per avermi contattato.\n
    Il sistema ha provveduto a prendere in carico la tua richiesta e provvederò a rispondere personalmente al più presto.\n\n
    Cordiali Saluti.\n
    Claudio Bizzo\n\n
    Email ricevuta da www.claudiobizzo.com`;

  return text;
};