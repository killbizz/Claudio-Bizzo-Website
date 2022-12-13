import transporter from "./configuration";
import { EmailOption } from "../../types/Email";

const Nodemailer = {
  sendEmail: (mailOption: EmailOption): Promise<boolean> => {
    return new Promise((resolve) => {
      transporter.sendMail(mailOption, (error: any) => {
        if (error !== null) {
          console.error(error);
          console.log(mailOption);
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  },
};

export default Nodemailer;
