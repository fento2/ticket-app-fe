"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/toast-1";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { apiCall } from "@/helper/apiCall";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { EmailInput, emailSchema } from "@/features/auth/schema/signUpSchema";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { isAxiosError } from "axios";
import { useSendOtpMutation } from "@/features/auth/api/sendOtpMutation";

export const FormEmail = () => {
    const { showToast } = useToast();
    const router = useRouter();
    const [showDialog, setShowDialog] = useState(false);
    const [sessionId, setSessionId] = useState<string | undefined>();

    // --- setup form ---
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<EmailInput>({
        resolver: zodResolver(emailSchema),
    });

    // --- setup mutation ---
    const sendOtpMutation = useMutation({
        mutationFn: async (payload: EmailInput) => {
            const { data } = await apiCall.post("/auth/send-otp", payload);
            return data;
        },
        onSuccess: (data) => {
            setShowDialog(true);
            setSessionId(data.result.data.sessionId);
            showToast(data.result.message, "success");
        },
        onError: (error) => {
            if (isAxiosError(error)) {
                showToast(error.response?.data.result.message, 'error');
            }
            console.error(error);
        },
    });
    const sendOtp = useSendOtpMutation({
        onError: () => {

        }
    })
    // --- handle form submit ---
    const onSubmit = (payload: EmailInput) => {
        sendOtpMutation.mutate(payload);
    };

    return (
        <>
            <Card className="w-full max-w-md shadow-lg mx-8">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                    <CardDescription className="text-center">
                        Enter your email to receive OTP
                    </CardDescription>
                </CardHeader>

                <CardContent className="max-h-96 overflow-auto md:max-h-full">
                    <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                placeholder="Your email"
                                {...register("email")}
                                className="w-full"
                            />
                            {errors.email && (
                                <p className="text-xs text-red-500">{errors.email.message}</p>
                            )}
                        </div>

                        <Button
                            disabled={sendOtpMutation.isPending}
                            type="submit"
                            className="w-full text-md"
                        >
                            {sendOtpMutation.isPending ? (
                                <>
                                    <Spinner />
                                    Sending...
                                </>
                            ) : (
                                "Send OTP"
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>

            {/* Dialog */}
            <Dialog open={showDialog} onOpenChange={setShowDialog}>
                <DialogContent
                    className="sm:max-w-md"
                    showCloseButton={false}
                    onInteractOutside={(e) => e.preventDefault()}
                    onEscapeKeyDown={(e) => e.preventDefault()}
                >
                    <DialogHeader>
                        <DialogTitle>Check your email</DialogTitle>
                        <DialogDescription>
                            We&apos;ve sent an OTP to your email. Please check your inbox and
                            enter the code to continue.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <Button
                            onClick={() => {
                                setShowDialog(false);
                                router.push(`/sign-up?sessionId=${sessionId}`);
                            }}
                            className="w-full"
                        >
                            Continue
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
