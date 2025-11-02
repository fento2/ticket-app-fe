import { useState, useEffect } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { isAxiosError } from "axios";
import { apiCall, ApiResponseBase } from "@/helper/apiCall";
import { MutationOptionType } from "@/lib/reacQuery";

const callApiFn = async (sessionId: string) => {
  return await apiCall.get<ApiResponseBase<undefined>>(
    `/auth/verify/${sessionId}`
  );
};

type UseVerifySessionId = MutationOptionType<typeof callApiFn, string>;

export const useVerifySessionId = (options?: UseVerifySessionId) => {
  const [showFormUser, setShowForm] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  const verifyMutation = useMutation({
    mutationFn: callApiFn,
    onSuccess: (res) => {
      if (res.status === 204) setShowForm(true);
    },
    onError: (error, variables, onMutateResult, context) => {
      if (isAxiosError(error)) {
        const status = error.response?.status;
        if (status === 404 || status === 400) {
          router.replace("/sign-up");
        } else if (status === 401) {
          setShowOtp(true);
        }
      }
      console.log(error);
      options?.onError?.(error, variables, onMutateResult, context);
    },
    ...options,
  });

  useEffect(() => {
    const sessionId = searchParams.get("sessionId");
    if (!sessionId) return;

    if (!verifyMutation.isPending && !verifyMutation.isSuccess) {
      setShowOtp(true);
      console.log("run");
      verifyMutation.mutate(sessionId);
    }
  }, [searchParams]);

  return {
    ...verifyMutation,
    showFormUser,
    showOtp,
    setShowForm,
  };
};
