'use client'
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormUser } from "./components/FormUser";
import { FormEmail } from "./components/FormEmail";
import { FormOtp } from "./components/FormOtp";
import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { apiCall } from "@/helper/apiCall";
import { isAxiosError } from "axios";

const SignUp = () => {
    const [showFormUser, setShowForm] = useState(false);
    const [showOtp, setShowOtp] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const verifySessinId = useCallback(async () => {
        try {
            const { status } = await apiCall.get(
                `/auth/verify/${searchParams.get("sessionId")}`
            );
            if (status === 204) setShowForm(true);
        } catch (error) {
            if (isAxiosError(error)) {
                const status = error.response?.status;
                if (status === 404 || status === 400) {
                    router.replace("/sign-up");
                } else if (status === 401) {
                    setShowOtp(true);
                }
            }
            console.log(error);
        }
    }, [router, searchParams]);

    useEffect(() => {
        const sessionId = searchParams.get("sessionId");
        if (sessionId) {
            setShowOtp(true);
            verifySessinId();
        } else {
            setShowOtp(false);
        }
    }, [searchParams, verifySessinId]);

    return (
        <section className="min-h-screen">
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg')",
                }}
            >
                <Link href="/" className="absolute top-4 left-4">
                    <Button variant="ghost" className="text-white">
                        <ChevronLeft /> Home
                    </Button>
                </Link>

                <div className="flex items-center justify-center z-40 h-screen bg-black/60">
                    {showFormUser ? (
                        <FormUser />
                    ) : showOtp ? (
                        <FormOtp setShowForm={setShowForm} />
                    ) : (
                        <FormEmail />
                    )}
                </div>
            </div>
        </section>
    );
};

export default SignUp;
