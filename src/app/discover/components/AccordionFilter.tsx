'use clinet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { AccordionFilterProps, useAccordionFilter } from "@/features/event/discover/useAccordionFilter"
import { X } from "lucide-react"
import React from "react"

const AccordionFIlter = ({ accordionItemData }: AccordionFilterProps) => {

    const {
        addSelected,
        countSelect,
        delateAllSelectedByLabel,
        accordionData
    } = useAccordionFilter({ accordionItemData })

    return (
        <Accordion type="single" collapsible className="grid grid-cols-1 gap-1.5">
            {accordionItemData.map((v, i) => (
                <AccordionItem key={i} value={v.label} >

                    <div className="mb-4">
                        <AccordionTrigger className="hover:no-underline items-center" size={30}>
                            <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                                <v.Icon size={20} className="text-primary" />
                                {v.label}
                                {countSelect(v.label) > 0 &&
                                    <>
                                        <div
                                            className="bg-primary h-6 flex items-center justify-center gap-2 px-3 rounded-full"
                                        >
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <span className="text-white text-xs">
                                                        {countSelect(v.label)}
                                                    </span>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {accordionData.find((a) => a.label === v.label)?.data.join(", ")}
                                                </TooltipContent>
                                            </Tooltip>

                                            <X
                                                size={14}
                                                strokeWidth={3}
                                                className="text-destructive cursor-pointer transition-all duration-200 hover:scale-125 hover:text-red-600"
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    delateAllSelectedByLabel(v.label)
                                                }}
                                            />

                                        </div>
                                    </>
                                }
                            </span>
                        </AccordionTrigger>
                    </div>

                    <AccordionContent>
                        <div className="grid grid-cols-2 gap-2">
                            {v.data.map((vm, i) => (

                                <Button
                                    key={i}
                                    variant={"outline"}
                                    className={`cursor-pointer text-sm font-medium tracking-wider rounded-full
                               ${accordionData.some((vs) => vs.data.includes(vm)) ? 'bg-primary hover:bg-primary hover:text-white text-white' : ''}`}
                                    onClick={() => addSelected(vm, v.label)}

                                >
                                    {vm}
                                </Button>

                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}

        </Accordion >
    )
}

export default AccordionFIlter