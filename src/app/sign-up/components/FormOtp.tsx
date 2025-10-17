'use client'

import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useController, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import { Button } from "@/components/ui/button";
import { apiCall } from "@/helper/apiCall";
import { Dispatch, SetStateAction } from "react";
import { VerifyOtpInput, verifyOtpSchema } from "@/features/auth/schema/signUpSchema";


export const FormOtp = ({ setShowForm }: { setShowForm: Dispatch<SetStateAction<boolean>> }) => {
    const router = useRouter();
    const searchParams = useSearchParams()

    const { handleSubmit, control, formState: { errors } } = useForm<VerifyOtpInput>({
        resolver: zodResolver(verifyOtpSchema),
    });

    const { field } = useController({
        name: "otp",
        control,
    });


    const onSubmit = async (payload: VerifyOtpInput) => {
        try {
            const sessionId = searchParams.get('sessionId')
            const { data: { result }, status } = await apiCall.post('/auth/verify-otp', { ...payload, sessionId })
            if (status === 200) {
                router.replace(`/sign-up?sessionId=${result.data.sessionId}`)
                setShowForm(true)
            }
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <Card className="w-full max-w-lg shadow-lg mx-8">
            <CardHeader>
                <CardTitle className="text-center">Verifikasi OTP</CardTitle>
                <CardDescription className="text-center">
                    Masukkan kode 6 digit yang dikirim ke email kamu
                </CardDescription>
            </CardHeader>

            <CardContent className="">
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-2">
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
