import { useMutation } from "@tanstack/react-query";
import { EmailInput } from "../schema/signUpSchema";
import { apiCall, ApiResponseBase } from "@/helper/apiCall";
import { MutationOptionType } from "@/lib/reacQuery";
import { useState } from "react";
import { useToast } from "@/components/toast-1";
import { useRouter } from "next/navigation";
import { isAxiosError } from "axios";

type ResponseData = {
  sessionId: string;
};
const apiCallFn = async (payload: EmailInput) => {
  return await apiCall.post<ApiResponseBase<ResponseData>>(
    "/auth/send-otp",
    payload
  );
};

type UseSendOtpType = MutationOptionType<typeof apiCallFn, EmailInput>;

const useSendOtp = (option?: UseSendOtpType) => {
  const { showToast } = useToast();
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false);
  const [sessionId, setSessionId] = useState<string | undefined>();

  const sendOtp = useMutation({
    mutationFn: apiCallFn,
    onSuccess: ({ data }) => {
      setShowDialog(true);
      setSessionId(data.result.data?.sessionId);
      showToast(data.result.message, "success");
    },
    onError: (error) => {
      if (isAxiosError(error)) {
        showToast(error.response?.data.result.message, "error");
      }
      console.error(error);
    },
    ...option,
  });
  return {
    ...sendOtp,
    router,
    showDialog,
    sessionId,
    setShowDialog,
  };
};

export { useSendOtp };
