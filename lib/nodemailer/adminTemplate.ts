import { EmailInfo } from "../../types/Email";

export const emailToAdminHTMLTemplate = (emailInfo: EmailInfo): string => {
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

export const emailToAdminTXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao Claudio, hai ricevuto un nuovo messaggio:\n\n
    - Nome: ${emailInfo.name}\n
    - Cognome: ${emailInfo.surname}\n
    - Email: ${emailInfo.email}\n
    - Telefono: ${emailInfo.phone ? emailInfo.phone : "Non fornito"}\n
    - Messaggio: \n${emailInfo.message}\n\n
    email ricevuta da www.claudiobizzo.com`;

  return text;
};