'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction } from "react";
import { useVerifyOtp } from "@/features/auth/api/verifyOtp";
import { useFormOtp } from "@/features/auth/sign-up/useFormOtp";

export const FormOtp = ({ setShowForm }: { setShowForm: Dispatch<SetStateAction<boolean>> }) => {

    const { handleSubmit, formState: { errors }, field } = useFormOtp();

    const { mutate } = useVerifyOtp({
        onSuccess: () => setShowForm(true)
    });

    return (
        <Card className="w-full max-w-lg shadow-lg mx-8">
            <CardHeader>
                <CardTitle className="text-center">Verifikasi OTP</CardTitle>
                <CardDescription className="text-center">
                    Masukkan kode 6 digit yang dikirim ke email kamu
                </CardDescription>
            </CardHeader>

            <CardContent className="">
                <form onSubmit={handleSubmit((payload) => mutate(payload))} className="flex flex-col items-center gap-2">
                    <InputOTP
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        value={field.value}
                        onChange={(v) => field.onChange(v.toUpperCase())}
                    >
                        <InputOTPGroup>
                            {Array.from({ length: 6 }).map((_, i) => (
                                <InputOTPSlot key={i} index={i} className="uppercase" />
                            ))}
                        </InputOTPGroup>
                    </InputOTP>
                    <p className="text-xs text-red-500"> {errors.otp?.message}</p>

                    <Button
                        type="submit"
                        className="w-full text-md"
                    >
                        Verifikasi
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
