import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { X } from "lucide-react"

export type BadgeActiveProps = {
    countSelected: number | string | React.ReactElement
    toolTipContent: string | React.ReactElement | undefined
    resetBadge: () => void
}
const BadgeActive = ({ toolTipContent: contentActive, countSelected, resetBadge }: BadgeActiveProps) => {
    return (
        <div
            className="bg-accent h-6 flex items-center justify-center gap-2 px-3 rounded-full"
        >
            <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                    <span className="text-xs">
                        {countSelected}
                    </span>
                </TooltipTrigger>
                <TooltipContent>
                    {contentActive}
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