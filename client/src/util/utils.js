import { baseUrl } from "../config/config";
import { toast } from "react-toastify";

export const copyLink = async (shortLink) => {
  await navigator.clipboard.writeText(generateLink(shortLink));
  toast.info("Copied", {
    autoClose: 2000,
    hideProgressBar: true,
    isLoading: false,
    closeButton: false,
    icon: false,
  });
};

export const generateLink = (shortLink) => {
  if (shortLink) {
    return `${baseUrl}/to/${shortLink}`;
  }
};
