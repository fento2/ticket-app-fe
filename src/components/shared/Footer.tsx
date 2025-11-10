import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn button
import { Instagram, Twitter, Linkedin } from "lucide-react"; // lucide icons

export const Footer = () => {
    return (
        <footer className="border-t py-10 mt-16 bg-white ">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Brand / Info */}
                <div className="">
                    <h2 className="text-2xl font-bold">Even Tix</h2>
                    <p className="mt-2 text-sm">
                        Platform terbaik untuk menemukan dan mengelola event favoritmu.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Menu</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <Link href="/" className="hover:underline">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/events" className="hover:underline">
                                Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:underline">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Button asChild variant="ghost" size="icon">
                            <Link href="https://instagram.com">
                                <Instagram />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link href="https://twitter.com">
                                <Twitter />
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon">
                            <Link href="https://linkedin.com">
                                <Linkedin />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm">
                © {new Date().getFullYear()} Event Tix. All rights reserved.
            </div>
        </footer>
    );
};

