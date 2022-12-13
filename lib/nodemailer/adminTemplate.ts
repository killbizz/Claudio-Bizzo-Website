import { EmailInfo } from "../../types/Email";

export const emailToAdminHTMLTemplate = (emailInfo: EmailInfo): string => {
  const titolo = "Claudio hai un nuovo messaggio";

  const html: string = `<!doctype html>
  <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
      <title>${titolo}</title>
      <style>
@media only screen and (max-width: 620px) {
  table.body h1 {
    font-size: 28px !important;
    margin-bottom: 10px !important;
  }

  table.body p,
table.body ul,
table.body ol,
table.body td,
table.body span,
table.body a {
    font-size: 16px !important;
  }

  table.body .wrapper,
table.body .article {
    padding: 10px !important;
  }

  table.body .content {
    padding: 0 !important;
  }

  table.body .container {
    padding: 0 !important;
    width: 100% !important;
  }

  table.body .main {
    border-left-width: 0 !important;
    border-radius: 0 !important;
    border-right-width: 0 !important;
  }

  table.body .btn table {
    width: 100% !important;
  }

  table.body .btn a {
    width: 100% !important;
  }

  table.body .img-responsive {
    height: auto !important;
    max-width: 100% !important;
    width: auto !important;
  }
}
@media all {
  .ExternalClass {
    width: 100%;
  }

  .ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
    line-height: 100%;
  }

  .apple-link a {
    color: inherit !important;
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    text-decoration: none !important;
  }

  #MessageViewBody a {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
    font-family: inherit;
    font-weight: inherit;
    line-height: inherit;
  }

  .btn-primary table td:hover {
    background-color: #34495e !important;
  }

  .btn-primary a:hover {
    background-color: #34495e !important;
    border-color: #34495e !important;
  }
}
</style>
    </head>
    <body style="background-color: #f6f6f6; font-family: sans-serif; -webkit-font-smoothing: antialiased; font-size: 14px; line-height: 1.4; margin: 0; padding: 0; -ms-text-size-adjust: 100%; -webkit-text-size-adjust: 100%;">
      <span class="preheader" style="color: transparent; display: none; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; mso-hide: all; visibility: hidden; width: 0;">Ciao Claudio, hai un nuovo messaggio</span>
      <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; background-color: #f6f6f6; width: 100%;" width="100%" bgcolor="#f6f6f6">
        <tr>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top">&nbsp;</td>
          <td class="container" style="font-family: sans-serif; font-size: 14px; vertical-align: top; undefined: padding10px0px; display: block; max-width: 580px; padding: 10px; width: 580px; margin: 0 auto;" width="580" valign="top">
            <div class="content" style="box-sizing: border-box; display: block; margin: 0 auto; max-width: 580px; padding: 10px;">
  
              <!-- START CENTERED WHITE CONTAINER -->
              <table role="presentation" class="main" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; background: #ffffff; border-radius: 3px; width: 100%;" width="100%">
  
                <!-- START MAIN CONTENT AREA -->
                <tr>
                  <td class="wrapper" style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px; box-sizing: border-box; padding: 20px;" valign="top">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; width: 100%;" width="100%">
                      <tr>
                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top">
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Ciao Claudio,</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">Hai ricevuto un nuovo messaggio da parte di un possibile cliente.
                          <br>Le sue informazioni di contatto sono:</p>
                          <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; width: 100%;" width="100%">
                            <tbody>
                              <tr>
                                <td align="center" style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top">
                                  <table role="presentation" border="0" cellpadding="0" cellspacing="10" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; width: 100%;" width="100%">
                                    <tbody>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top"> Nome: ${emailInfo.name} </td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top"> Cognome: ${emailInfo.surname} </td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top"> Email: <a href="mailto:${emailInfo.email}" style="color: #3498db; text-decoration: underline;">${emailInfo.email}</a> </td>
                                      </tr>
                                      <tr>
                                        <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top"> Numero telefonico: 
                                          ${(emailInfo.phone !== undefined) && (emailInfo.phone !== null) && (emailInfo.phone !== "") 
                                            ? emailInfo.phone : "Non Disponibile" } 
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">L'utente ti ha inviato il seguente messaggio:</p>
                          <p style="font-family: sans-serif; font-size: 14px; font-weight: normal; margin: 0; margin-bottom: 15px;">${emailInfo.message}</p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
  
              <!-- END MAIN CONTENT AREA -->
              </table>
              <!-- END CENTERED WHITE CONTAINER -->
  
              <!-- START FOOTER -->
              <div class="footer" style="clear: both; margin-top: 10px; text-align: center; width: 100%;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="mso-table-lspace: 10pt; mso-table-rspace: 10pt; width: 100%;" width="100%">
                  <tr>
                    <td class="content-block" style="font-family: sans-serif; vertical-align: top; margin: 4px; undefined: padding10px0px; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                      <span class="apple-link" style="color: #999999; font-size: 12px; text-align: center;">Claudio Bizzo, Scorzè, Venezia, 30037</span>
                    </td>
                  </tr>
                  <tr>
                    <td class="content-block powered-by" style="font-family: sans-serif; vertical-align: top; margin: 4px; undefined: padding10px0px; padding-bottom: 10px; padding-top: 10px; color: #999999; font-size: 12px; text-align: center;" valign="top" align="center">
                      Powered by <a href="https://www.linkedin.com/in/gabriel-bizzo-6b332b231/" style="color: #999999; font-size: 12px; text-align: center; text-decoration: none;">Gabriel Bizzo</a>.
                    </td>
                  </tr>
                </table>
              </div>
              <!-- END FOOTER -->
  
            </div>
          </td>
          <td style="font-family: sans-serif; font-size: 14px; vertical-align: top; margin: 4px; undefined: padding10px0px;" valign="top">&nbsp;</td>
        </tr>
      </table>
    </body>
  </html>
  `;

  return html;
};

export const emailToAdminTXTTemplate = (emailInfo: EmailInfo): string => {
  const text: string = `Ciao Claudio, hai ricevuto un nuovo messaggio da un possibile cliente:\n\n
    - Nome: ${emailInfo.name}\n
    - Cognome: ${emailInfo.surname}\n
    - Email: ${emailInfo.email}\n
    - Telefono: ${emailInfo.phone ? emailInfo.phone : "Non fornito"}\n
    - Messaggio: \n${emailInfo.message}\n\n
    email ricevuta da www.claudiobizzo.com`;

  return text;
};