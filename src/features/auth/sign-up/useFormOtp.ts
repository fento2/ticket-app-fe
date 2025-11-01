import { zodResolver } from "@hookform/resolvers/zod";
import { VerifyOtpInput, verifyOtpSchema } from "../schema/signUpSchema";
import { useController, useForm, UseFormProps } from "react-hook-form";

const useFormOtp = (options?: UseFormProps<VerifyOtpInput>) => {
  const formOtp = useForm<VerifyOtpInput>({
    resolver: zodResolver(verifyOtpSchema),
    ...options,
  });

  const controller = useController({
    name: "otp",
    control: formOtp.control,
  });
  return {
    ...formOtp,
    ...controller,
  };
};
export { useFormOtp };
