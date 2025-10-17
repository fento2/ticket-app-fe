"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Eye, EyeOff, MailIcon } from "lucide-react";

export default function SignInModal() {
  const [open, setOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Tombol buka modal */}
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="px-6 border text-white shadow-sm font-medium transition-all hover:bg-sky-50"
        >
          Sign In
        </Button>
      </DialogTrigger>

      {/* Modal */}
      <DialogContent className="md:!max-w-md !max-w-xs">

        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Sign In
          </DialogTitle>
          <p className="text-base text-center text-muted-foreground">
            Please enter your credentials
          </p>
        </DialogHeader>

        <form className="grid gap-4">
          {/* Email */}
          <div className="relative">
            <Label htmlFor="email" className="text-md font-medium">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="pr-10"
            />
            <MailIcon className="absolute top-7.5 right-3 text-muted-foreground" />
          </div>

          {/* Password */}
          <div className="relative">
            <Label htmlFor="password" className="text-md font-medium">
              Password
            </Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="**********"
              className="pr-10"
            />
            {showPassword ? (
              <Eye
                className="absolute top-7.5 right-3 text-muted-foreground cursor-pointer"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <EyeOff
                className="absolute top-7.5 right-3 text-muted-foreground cursor-pointer"
                onClick={() => setShowPassword(true)}
              />
            )}
            <p className="mt-1 text-xs text-right text-blue-600 hover:underline cursor-pointer">
              Forgot Password?
            </p>
          </div>

          {/* Remember Me */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="rememberMe"
              className="border border-black scale-100"
            />
            <Label htmlFor="rememberMe" className="cursor-pointer text-md">
              Remember Me
            </Label>
          </div>

          {/* Sign In Button */}
          <Button className="w-full" type="button">
            Sign In
          </Button>

          {/* Link ke Sign Up */}
          <p className="text-base text-center">
            Don&apos;t have an account?{" "}
            <Link
              href="/sign-up"
              className="text-blue-600 hover:underline cursor-pointer"
              onClick={() => setOpen(false)}
            >
              Sign Up
            </Link>
          </p>
        </form>

      </DialogContent>
    </Dialog>
  );
}
