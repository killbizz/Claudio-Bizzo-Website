export interface EmailInfo {
  readonly name: string;
  readonly surname: string;
  readonly email: string;
  readonly phone?: string;
  readonly message: string;
}

export interface EmailOption {
  readonly from: string; // sender address
  readonly to: string; // list of receivers
  readonly subject: string; // Subject line
  readonly text: string; // plaintext body
  readonly html: string; // html body
}
