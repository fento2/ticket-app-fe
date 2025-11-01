import { useMutation } from "@tanstack/react-query";
import { VerifyOtpInput } from "../schema/signUpSchema";
import { apiCall, ApiResponseBase } from "@/helper/apiCall";
import { MutationOptionType } from "@/lib/reacQuery";
import { useRouter, useSearchParams } from "next/navigation";
import { isAxiosError } from "axios";
import { useToast } from "@/components/toast-1";

type ResponseData = {
  sessionId: string;
};

const apiCallFn = async (
  payload: VerifyOtpInput & { sessionId: string | null }
) => {
  return await apiCall.post<ApiResponseBase<ResponseData>>(
    "/auth/verify-otp",
    payload
  );
};

type UseVerifyOtpType = MutationOptionType<typeof apiCallFn, VerifyOtpInput>;

const useVerifyOtp = (option?: UseVerifyOtpType) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();

  const sessionId = searchParams.get("sessionId");

  const verifyOtp = useMutation({
    mutationFn: (payload: VerifyOtpInput) =>
      apiCallFn({ ...payload, sessionId }),
    onSuccess: ({ data: { result } }) => {
      router.replace(`/sign-up?sessionId=${result.data?.sessionId}`);
    },
    onError: (error) => {
      if (isAxiosError<ApiResponseBase<undefined>>(error)) {
        showToast(
          error.response?.data.result.message || error.message,
          "error"
        );
      }
    },
    ...option,
  });
  return { ...verifyOtp };
};

export { useVerifyOtp };
