import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import BadgeActive from "./BadgeActive";
import React from "react";
import { LucideProps } from "lucide-react";

export type AccordionFilterItem = {
    label: string;
    Icon: React.ComponentType<LucideProps>;
    toolTipContent: string | React.ReactElement | undefined
    isActive: boolean;
    countSelected: (label: string) => string | number | React.ReactElement
    setReset: (label: string) => void;
    /**renderContent For Render html content element */
    renderContent: () => React.ReactElement;
};

export type AccordionFilterProps = {
    accordionItemData: AccordionFilterItem[];
};

const AccordionFilter = ({
    accordionItemData,
}: AccordionFilterProps) => {

    return (
        <Accordion type="single" collapsible={false} defaultValue={accordionItemData[0].label}>
            <Separator />
            {accordionItemData.map((v, i) => (
                <AccordionItem key={i} value={v.label}>
                    <AccordionTrigger className="hover:no-underline items-center py-2" size={27}>
                        <span className="flex gap-2 items-center font-semibold tracking-widest">
                            <v.Icon size={19} className="text-primary" />
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
                        {v.renderContent()}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AccordionFilter;
