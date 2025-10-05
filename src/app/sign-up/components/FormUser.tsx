'use client'
import { InputPassword } from "@/components/core/InputPassword";
import { useToast } from "@/components/toast-1";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export const FormUser = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [dataSignUp, setDataSignUp] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        addReferral: "",
    });
    caches.keys().then();
    const { showToast } = useToast();
    const handleCreateAccount = async () => {

    };

    const inputKey = [
        {
            label: 'Username',
            placeHolder: "Choose a username",
            value: dataSignUp.username,
            key: "username"
        },
        {
            label: 'Email',
            placeHolder: "You@example.com",
            value: dataSignUp.email,
            key: "email"
        }
    ]
    return (
        <>
            {/*Form User*/}
            <Card className="w-full max-w-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
                    <CardDescription className="text-center">
                        Please fill in your information to create an account
                    </CardDescription>
                </CardHeader>

                <CardContent>
                    <form
                        className="grid gap-4"
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}
                    >

                        <div className="flex gap-2">
                            <div className="w-full">
                                <Label htmlFor="firstName" className="text-md">
                                    First Name
                                </Label>
                                <Input
                                    id="firstName"
                                    placeholder="Your full name"
                                    className="pr-10"
                                    value={dataSignUp.firstName}
                                    onChange={(e) => {
                                        setDataSignUp({ ...dataSignUp, firstName: e.target.value });
                                    }}
                                />
                            </div>

                            <div className="w-full">
                                <Label htmlFor="lastName" className="text-md">
                                    Last Name
                                </Label>
                                <Input
                                    id="lastName"
                                    placeholder="Your full name"
                                    className="pr-10"
                                    value={dataSignUp.firstName}
                                    onChange={(e) => {
                                        setDataSignUp({ ...dataSignUp, firstName: e.target.value });
                                    }}
                                />
                            </div>
                        </div>
                        {inputKey.map((v, i) => (
                            <div key={i}>
                                <Label htmlFor={v.label} className="text-md">
                                    {v.label}
                                </Label>
                                <Input
                                    id={v.label}
                                    placeholder={v.placeHolder}
                                    className="pr-10"
                                    value={v.value}
                                    onChange={(e) => {
                                        setDataSignUp({ ...dataSignUp, [v.key]: e.target.value });
                                    }}
                                />
                            </div>
                        ))}
                        <InputPassword
                            label="Password"
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            password={dataSignUp.password}
                            setPassword={(val) => setDataSignUp((prev) => ({ ...prev, password: val }))}
                        />
                        <InputPassword
                            label="Confirm Password"
                            showPassword={showPassword}
                            setShowPassword={setShowPassword}
                            password={dataSignUp.confirmPassword}
                            setPassword={(val) => setDataSignUp((prev) => ({ ...prev, confirmPassword: val }))}
                        />
                        <div>
                            <Label htmlFor="referral" className="text-md">
                                Refferal Code (optional)
                            </Label>
                            <Input
                                id="referral"
                                type="text"
                                placeholder="USER1234"
                                className="pr-10"
                                value={dataSignUp.addReferral}
                                onChange={(e) => {
                                    setDataSignUp({
                                        ...dataSignUp,
                                        addReferral: e.target.value,
                                    });
                                }}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms" className="text-md">
                                I agree to the
                                <Button variant={'link'} className="-mx-4">
                                    Terms and Conditions
                                </Button>
                            </Label>
                        </div>

                        {/* Button submit */}
                        <Button
                            type="submit"
                            className="w-full text-md"
                            onClick={() => {
                                handleCreateAccount();
                            }}
                        >
                            Create Account
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}
