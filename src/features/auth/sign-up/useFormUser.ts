import { useState } from "react";
import { useController, useForm } from "react-hook-form";
import { SignUpInput, signUpSchema } from "../schema/signUpSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const useFormUser = () => {
  const [showPassword, setShowPassword] = useState(false);

  const formUser = useForm<SignUpInput>({
    resolver: zodResolver(signUpSchema),
    defaultValues: { terms: false },
  });

  const constroller = useController({
    name: "terms",
    control: formUser.control,
  });

  return {
    ...formUser,
    ...constroller,
    showPassword,
    setShowPassword,
  };
};

export { useFormUser };
