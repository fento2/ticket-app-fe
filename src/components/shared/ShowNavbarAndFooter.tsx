"use client"
import { usePathname } from "next/navigation";
import { Navbar, Topbar } from "./Navbar";
import { Footer } from "./Footer";

interface ShowNavbarAndFooterProps {
    children: React.ReactNode;
}

const ShowNavbarAndFooter = ({ children }: ShowNavbarAndFooterProps) => {
    const pathname = usePathname()
    const hideOn = ["/sign-up"]
    const shouldHide = hideOn.some((v) => pathname.startsWith(v))
    if (shouldHide) return children
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Topbar />
                <Navbar />

                <main className="flex-1">
                    {children}
                </main>

                <Footer />
            </div>
        </>
    )

}
export default ShowNavbarAndFooter