import { EmailInfo } from "../types/Email";

export function nthOccurrenceIndexOfString(
  str: string,
  pattern: string,
  index: number
) {
  var L = str.length,
    i = -1;
  while (index-- && i++ < L) {
    i = str.indexOf(pattern, i);
    if (i < 0) break;
  }
  return i;
}

export function validateEmailForm(infoForm: EmailInfo): Map<string, string> {
    
  const rejectEmojiRegexp = /[\ud800-\udbff][\udc00-\udfff]|[^\0-\x7f]/;
  const emailRegexp = new RegExp(
    /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  );
  const phoneRegexp = new RegExp(/^([0|\+[0-9]{1,5})?([0-9]{10})$/);

  const errors: Map<string, string> = new Map<string, string>();

  // name
  if (infoForm.name === "") {
    errors.set("name", "Il campo Nome è obbligatorio");
  } else if (infoForm.name.length < 2) {
    errors.set("name", "Il campo Nome deve contenere almeno 2 caratteri");
  } else if (infoForm.name.match(rejectEmojiRegexp)) {
    errors.set("name", "Il campo Nome non può contenere emoji");
  }

  // surname
  if (infoForm.surname === "") {
    errors.set("surname", "Il campo Cognome è obbligatorio");
  } else if (infoForm.surname.length < 2) {
    errors.set("surname", "Il campo Cognome deve contenere almeno 2 caratteri");
  } else if (infoForm.surname.match(rejectEmojiRegexp)) {
    errors.set("surname", "Il campo Cognome non può contenere emoji");
  }

  // email
  if (infoForm.email === "") {
    errors.set("email", "Il campo Email è obbligatorio");
  } else if (!emailRegexp.test(infoForm.email)) {
    errors.set(
      "email",
      "Il campo Email deve contenere un indirizzo email valido"
    );
  } else if (infoForm.email.match(rejectEmojiRegexp)) {
    errors.set("email", "Il campo Email non può contenere emoji");
  }

  // phone
  if (!phoneRegexp.test(infoForm.phone)) {
    errors.set(
      "phone",
      "Il campo Telefono deve contenere un numero telefonico valido"
    );
  } else if (infoForm.phone.match(rejectEmojiRegexp)) {
    errors.set("phone", "Il campo Telefono non può contenere emoji");
  }

  // message
  if (infoForm.message === "") {
    errors.set("message", "Il campo Messaggio è obbligatorio");
  } else if (infoForm.message.length > 5000) {
    errors.set(
      "message",
      "Il campo Messaggio deve contenere al massimo 5000 caratteri"
    );
  }

  return errors;
}
