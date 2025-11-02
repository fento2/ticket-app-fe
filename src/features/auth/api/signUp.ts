import { useMutation } from "@tanstack/react-query";
import { SignUpInput } from "../schema/signUpSchema";
import { apiCall, ApiResponseBase } from "@/helper/apiCall";
import { MutationOptionType } from "@/lib/reacQuery";
import { useSearchParams } from "next/navigation";
import { isAxiosError } from "axios";
import { useToast } from "@/components/toast-1";

const apiCallFn = async (
  payload: SignUpInput & { sessionId: string | null }
) => {
  return await apiCall.post<ApiResponseBase<undefined>>(
    "/auth/sign-up",
    payload
  );
};

type UseSignUpType = MutationOptionType<typeof apiCallFn, SignUpInput>;

const useSignUp = (option?: UseSignUpType) => {
  const searchParams = useSearchParams();
  const { showToast } = useToast();
  const sessionId = searchParams.get("sessionId");

  const signUp = useMutation({
    mutationFn: (payload: SignUpInput) => apiCallFn({ ...payload, sessionId }),
    onSuccess: option?.onSuccess,
    onError: (error) => {
      if (isAxiosError<ApiResponseBase<undefined>>(error)) {
        console.log(error);
      }
    },
    ...option,
  });
  return { ...signUp };
};

export { useSignUp };
