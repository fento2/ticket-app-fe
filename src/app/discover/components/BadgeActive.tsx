import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { X } from "lucide-react"

type BadgeActiveProps = {
    countSelected: () => number
    contentActive: () => string | undefined
    resetBadge: () => void
}
const BadgeActive = ({ contentActive, countSelected, resetBadge }: BadgeActiveProps) => {
    return (
        <div
            className="bg-primary h-6 flex items-center justify-center gap-2 px-3 rounded-full"
        >
            <Tooltip>
                <TooltipTrigger asChild>
                    <span className="text-white text-xs">
                        {countSelected()}
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    {contentActive()}
                </TooltipContent>
            </Tooltip>

            <X
                size={14}
                strokeWidth={3}
                className="text-destructive cursor-pointer transition-all duration-200 hover:scale-125 hover:text-red-600"
                onClick={(e) => {
                    e.stopPropagation()
                    resetBadge()
                }}
            />

        </div>
    )
}
export default BadgeActive