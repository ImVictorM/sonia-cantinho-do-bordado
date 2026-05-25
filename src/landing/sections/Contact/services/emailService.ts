import { sendEmailUsingWeb3Forms } from "./web3formsService";

// General abstraction for email sending, always use this instead of concrete implementations

export type SendEmailRequest = {
  name: string;
  email: string;
  message: string;
};

export type SendEmailResponse = {
  success: boolean;
  message: string;
};

export type EmailSender = (
  request: SendEmailRequest,
) => Promise<SendEmailResponse>;

export const sendEmail: EmailSender = sendEmailUsingWeb3Forms;
