'use client'
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FormUser } from "./components/FormUser";



const SignUp = () => {


    return (
        <section className="min-h-screen">
            {/* Kolom kiri - Banner */}
            <div
                className="relative w-full h-screen bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://images.pexels.com/photos/258804/pexels-photo-258804.jpeg')",
                }}
            >
                {/* Tombol back */}
                <Link href="/" className="absolute top-4 left-4">
                    <Button variant={"ghost"} className="text-white">
                        <ChevronLeft /> Home
                    </Button>
                </Link>

                {/* Konten Utama */}
                <div className="flex items-center justify-center z-40 h-screen bg-black/60">
                    <div className="flex gap-6 items-center justify-center">

                        <FormUser />

                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignUp;
