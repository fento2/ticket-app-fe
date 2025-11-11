'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import BadgeActive from "./BadgeActive";
import React from "react";
import { LucideProps } from "lucide-react";

export type FnMultipleParams = <ParamsTypes extends unknown[]>(...args: ParamsTypes) => void;

export type AccordionFilterItem = {
    label: string;
    Icon: React.ComponentType<LucideProps>;
    /** Optional: content (ex calendar, range slider, dll) */
    toolTipContent: string | React.ReactElement | undefined
    isActive: boolean;
    countSelected: (label: string) => string | number
    setReset: FnMultipleParams;
    renderContent: React.ReactElement;
};

export type AccordionFilterProps = {
    accordionItemData: AccordionFilterItem[];
};

const AccordionFilter = ({
    accordionItemData,
}: AccordionFilterProps) => {

    return (
        <Accordion type="single" collapsible defaultValue={accordionItemData[0].label}>
            <Separator />
            {accordionItemData.map((v, i) => (
                <AccordionItem key={i} value={v.label}>
                    <AccordionTrigger className="hover:no-underline items-center py-2" size={27}>
                        <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                            <v.Icon size={20} className="text-primary" />
                            {v.label}

                            {v.isActive && (
                                <BadgeActive
                                    toolTipContent={v.toolTipContent}
                                    countSelected={v.countSelected(v.label)}
                                    resetBadge={() => v.setReset(v.label)}
                                />
                            )}
                        </span>
                    </AccordionTrigger>

                    <AccordionContent>
                        {v.renderContent}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionFilter;
