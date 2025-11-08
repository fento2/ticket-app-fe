'use clinet'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { AccordionFilterProps, useAccordionFilter } from "@/features/event/discover/useAccordionFilter"
import React from "react"
import BadgeActive from "./BadgeActive"
import { Separator } from "@/components/ui/separator"

const AccordionFIlter = ({ accordionItemData }: AccordionFilterProps) => {

    const {
        addSelected,
        countSelect,
        delateAllSelectedByLabel,
        accordionData
    } = useAccordionFilter({ accordionItemData })

    return (

        <Accordion type="single" collapsible>
            <Separator />
            {accordionItemData.map((v, i) => (
                <>
                    {v.type === "select" && <AccordionItem key={i} value={v.label} >

                        <div className="mb-2">
                            <AccordionTrigger className="hover:no-underline items-center" size={30}>
                                <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                                    <v.Icon size={20} className="text-primary" />
                                    {v.label}
                                    {countSelect(v.label) > 0 &&
                                        <>
                                            <BadgeActive
                                                contentActive={() => accordionData.find((a) => a.label === v.label)?.data.join(", ")}
                                                countSelected={() => countSelect(v.label)}
                                                resetBadge={() => delateAllSelectedByLabel(v.label)}
                                            />
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
                    </AccordionItem>}
                </>
            ))}
        </Accordion >
    )
}

export default AccordionFIlter