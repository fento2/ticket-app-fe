"use client"
import { usePathname } from "next/navigation";
import { Navbar, Topbar } from "./Navbar";
import { Footer } from "./Footer";

interface ShowNavbarAndFooterProps {
    children: React.ReactElement;
}

const ShowNavbarAndFooter = ({ children }: ShowNavbarAndFooterProps) => {
    const pathname = usePathname()
    const hideOn = ["/sign-up"]
    const shouldHide = hideOn.some((v) => pathname.startsWith(v))
    if (shouldHide) return children
    return (
        <main>
            <Topbar />
            <Navbar />


            {children}


            <Footer />
        </main>
    )

}
export default ShowNavbarAndFooter