'use client'
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormUser } from "./components/FormUser";
import { FormEmail } from "./components/FormEmail";
import { FormOtp } from "./components/FormOtp";
import { useVerifySessionId } from "@/features/auth/api/verifySessionId";

const SignUp = () => {
    const { showFormUser, showOtp, setShowForm } = useVerifySessionId();

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
