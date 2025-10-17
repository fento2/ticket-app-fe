import { useMutation } from "@tanstack/react-query";
import { EmailInput } from "../schema/signUpSchema";
import { apiCall } from "@/helper/apiCall";
import { isAxiosError } from "axios";

export const useSendOtpMutation = (options?: {
  onSuccess?: <T>(data: T) => void;
  onError?: <T>(error: T) => void;
}) => {
  return useMutation({
    mutationFn: async (payload: EmailInput) => {
      const { data } = await apiCall.post("/auth/send-otp", payload);
      return data;
    },
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
