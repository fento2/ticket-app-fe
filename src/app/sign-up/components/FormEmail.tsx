"use client";

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
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "@/components/ui/dialog";
import { Spinner } from "@/components/ui/spinner";
import { useSendOtp } from "@/features/auth/api/sendOtp";
import { useFormEmail } from "@/features/auth/sign-up/useFormEmail";

export const FormEmail = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useFormEmail();

    const { mutate, isPending, router, sessionId, showDialog, setShowDialog } = useSendOtp()

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
                    <form className="grid gap-4" onSubmit={handleSubmit((payload) => mutate(payload))}>
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
                            disabled={isPending}
                            type="submit"
                            className="w-full text-md"
                        >
                            {isPending ? (
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
