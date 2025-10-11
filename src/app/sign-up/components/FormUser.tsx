'use client'

import { useController, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/toast-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { SignUpInput, signUpSchema } from "@/validations/auth.validation";
import { Eye, EyeOff } from "lucide-react";

export const FormUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { showToast } = useToast();
    const { register, handleSubmit, formState: { errors }, reset, control } = useForm<SignUpInput>({
        resolver: zodResolver(signUpSchema),
        defaultValues: { terms: false }
    });
    const { field } = useController({
        name: 'terms',
        control
    })
    const onSubmit = async (data: SignUpInput) => {
        try {
            showToast("Account created successfully!", "success");
            reset();
        } catch (error) {
            console.log(error)
        }

    };

    return (
        <Card className="w-full max-w-lg shadow-lg mx-8">
            <CardHeader>
                <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                <CardDescription className="text-center">
                    Please fill in your information to create an account
                </CardDescription>
            </CardHeader>

            <CardContent className="max-h-96 overflow-auto md:max-h-full">
                <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex gap-2">
                        <div className="w-full">
                            <Label htmlFor="firstName">First Name</Label>
                            <Input id="firstName" placeholder="Your first name" {...register("firstName")} />
                            {errors.firstName && (
                                <p className="text-xs text-red-500">{errors.firstName.message}</p>
                            )}
                        </div>

                        <div className="w-full">
                            <Label htmlFor="lastName">Last Name</Label>
                            <Input id="lastName" placeholder="Your last name" {...register("lastName")} />
                            {errors.lastName && (
                                <p className="text-xs text-red-500">{errors.lastName.message}</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" placeholder="Choose a username" {...register("username")} />
                        {errors.username && (
                            <p className="text-xs text-red-500">{errors.username.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="you@example.com" {...register("email")} />
                        {errors.email && (
                            <p className="text-xs text-red-500">{errors.email.message}</p>
                        )}
                    </div>

                    <div className="relative">
                        <Label htmlFor='password' className="text-md">
                            Password
                        </Label>
                        <Input
                            id={'password'}
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="pr-10"
                            {...register('password')}
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
                    </div>

                    {errors.password && (
                        <p className="text-xs text-red-500">{errors.password.message}</p>
                    )}

                    <div className="relative">
                        <Label htmlFor='confirmPassword' className="text-md">
                            Confirm Password
                        </Label>
                        <Input
                            id={'confirmPassword'}
                            type={showPassword ? "text" : "password"}
                            placeholder="********"
                            className="pr-10"
                            {...register('confirmPassword')}
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
                    </div>
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
                    )}

                    <div>
                        <Label htmlFor="referral">Referral Code (optional)</Label>
                        <Input id="referral" placeholder="USER1234" {...register("addReferral")} />
                    </div>

                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" checked={field.value} onCheckedChange={field.onChange} />
                        <Label htmlFor="terms" className="text-md">
                            I agree to the
                            <Button variant={'link'} className="-mx-4">
                                Terms and Conditions
                            </Button>
                        </Label>
                    </div>
                    {errors.terms && (
                        <p className="text-xs text-red-500">{errors.terms.message}</p>
                    )}

                    <Button type="submit"
                        className="w-full text-md"
                    >
                        Create Account
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
};
