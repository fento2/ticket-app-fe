'use clinet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { LucideProps, X } from "lucide-react"
import { useSearchParams } from "next/navigation"
import React, { useState } from "react"

type AccordionFIlterProps<DataType> = {
    label: string,
    Icon: React.ComponentType<LucideProps>
    data: DataType[],
}

const AccordionFIlter = <DataType extends React.ReactNode>({ data, Icon, label }: AccordionFIlterProps<DataType>) => {
    const [selectedData, setSelectedData] = useState<typeof data>([])
    const searchParam = useSearchParams()
    const currentCategories = searchParam.getAll("category")
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value={label}>

                <div className="mb-4">
                    <AccordionTrigger className="hover:no-underline items-center" size={30}>
                        <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                            <Icon size={20} className="text-primary" />
                            {label}
                            {(selectedData.length !== 0) &&
                                <>
                                    <div
                                        className="bg-primary h-6 flex items-center justify-center gap-2 px-3 rounded-full"
                                    >
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <span className="text-white text-xs">
                                                    {selectedData.length}
                                                </span>
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                {selectedData.join(", ")}
                                            </TooltipContent>
                                        </Tooltip>

                                        <X
                                            size={14}
                                            strokeWidth={3}
                                            className="text-destructive cursor-pointer transition-all duration-200 hover:scale-125 hover:text-red-600"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                setSelectedData([])
                                            }}
                                        />

                                    </div>
                                </>
                            }
                        </span>
                    </AccordionTrigger>
                    <div className="bg-black/20 w-full h-0.5 rounded"></div>
                </div>

                <AccordionContent>
                    <div className="grid grid-cols-2 gap-2">
                        {data.map((v, i) => (

                            <Button
                                key={i}
                                variant={"outline"}
                                className={`cursor-pointer text-sm font-semibold tracking-widest
                               ${selectedData.includes(v) ? 'bg-primary hover:bg-primary hover:text-white text-white' : ''}`}
                                onClick={() => {
                                    if (selectedData.includes(v)) {
                                        setSelectedData((prev) => prev.filter((fv) => fv !== v))
                                    } else {
                                        setSelectedData((prev) => [...prev, v])
                                    }
                                }}

                            >
                                {v}
                            </Button>

                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion >
    )
}

export default AccordionFIlter