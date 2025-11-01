import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, UseFormProps } from "react-hook-form";
import { EmailInput, emailSchema } from "../schema/signUpSchema";

const useFormEmail = (options?: UseFormProps<EmailInput>) => {
  const formEmail = useForm<EmailInput>({
    resolver: zodResolver(emailSchema),
    ...options,
  });
  return { ...formEmail };
};
export { useFormEmail };
