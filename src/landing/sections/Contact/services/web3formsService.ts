import axios from "axios";
import type {
  EmailSender,
  SendEmailRequest,
  SendEmailResponse,
} from "./emailService";

const web3FormsClient = axios.create({
  baseURL: "https://api.web3forms.com",
});

type Web3FormsResponse = SendEmailResponse;

export const sendEmailUsingWeb3Forms: EmailSender = async ({
  name,
  email,
  message,
}: SendEmailRequest): Promise<SendEmailResponse> => {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Missing VITE_WEB3FORMS_ACCESS_KEY environment variable.");
  }

  const formData = new FormData();

  formData.append("access_key", accessKey);
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  const response = await web3FormsClient.post<Web3FormsResponse>(
    "/submit",
    formData,
  );

  return response.data;
};
