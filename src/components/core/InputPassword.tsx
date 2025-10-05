import { Eye, EyeOff } from "lucide-react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
interface InputPasswordProps {
    label: string
    showPassword: boolean
    setShowPassword: (val: boolean) => void
    password: string
    setPassword: (val: string) => void
}
export const InputPassword = ({ label, showPassword, setShowPassword, password, setPassword }: InputPasswordProps) => {
    return (
        <>
            <div className="relative">
                <Label htmlFor={label} className="text-md">
                    {label}
                </Label>
                <Input
                    id={label}
                    type={showPassword ? "text" : "password"}
                    placeholder="********"
                    className="pr-10"
                    value={password}
                    onChange={(e) => {
                        const value = e.target.value;
                        setPassword(value)
                    }}
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
        </>
    )
}