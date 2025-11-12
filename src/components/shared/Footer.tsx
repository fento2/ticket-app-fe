"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Linkedin, SunIcon, MonitorCogIcon, MoonIcon } from "lucide-react";
import SectionParentPage from "./SectionParentPage";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";

export const Footer = () => {
    const { setTheme, theme } = useTheme();
    const ListTheme = [
        {
            Icon: MonitorCogIcon,
            theme: 'system',
        },
        {
            Icon: SunIcon,
            theme: 'light',
        },
        {
            Icon: MoonIcon,
            theme: 'dark',
        }
    ]
    return (
        <footer className="border-t py-10 mt-16 relative">
            <SectionParentPage className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand / Info */}
                    <div>
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
                    <div className="space-y-2">
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
                <Separator />
                {/* Bottom */}
                <div className="relative flex items-center justify-center">
                    <div></div>
                    {/* Copyright */}
                    <span className="block text-center text-sm">
                        © {new Date().getFullYear()} Event Tix. All rights reserved.
                    </span>

                    <div className="flex items-center absolute right-0 border rounded-full">
                        <ToggleGroup
                            type="single"
                            value={theme}
                            size={'sm'}

                        >
                            {ListTheme.map((v, i) => (
                                <ToggleGroupItem
                                    key={i}
                                    value={v.theme}
                                    onClick={() => setTheme(v.theme)}
                                    aria-label={`Theme ${v.theme}`}
                                    className="p-2 !rounded-full"
                                >
                                    <v.Icon />
                                </ToggleGroupItem>
                            ))}
                        </ToggleGroup>
                    </div>
                </div>
            </SectionParentPage>
        </footer>
    );
};
