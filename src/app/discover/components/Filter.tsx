"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { MapIcon, SparklesIcon, TagsIcon } from "lucide-react"
import AccordionFIlter from "./AccordionFilter"
import { useRouter, useSearchParams } from "next/navigation"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"
import BadgeActive from "./BadgeActive"
import { Calendar } from "@/components/ui/calendar"
import { AccordionFIlterType } from "@/features/event/discover/useAccordionFilter"

export const Filter = () => {
    const category = [
        "Music",
        "Tech",
        "Art",
        "Sport",
        "Education",
        "Business",
        "Others",
    ]

    const lokasi = [
        "Jakarta",
        "Bandung",
        "Surabaya",
        "Medan",
        "Bali",
        "Yogyakarta",
        "Makassar",
    ]

    const tipeEvent = [
        "Online",
        "Offline",
        "Hybrid",
        "Online",
        "Offline",
        "Hybrid",
        "Online",
        "Offline",
        "Hybrid"
    ];

    const [selectedLokasi, setSelectedLokasi] = useState<string[]>([])
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [date, setDate] = useState("")
    const router = useRouter()
    const searchParam = useSearchParams()

    const handleCheck = (
        value: string,
        list: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (list.includes(value)) setter(list.filter((v) => v !== value))
        else setter([...list, value])

        const params = new URLSearchParams(searchParam.toString());
        if (params.getAll('lokasi').includes(value)) {
            const updated = params.getAll('lokasi').filter((v) => v !== value);
            params.delete('lokasi');
            updated.forEach((v) => params.append('lokasi', v));
        } else {
            params.append('lokasi', value);
        }

        router.replace(`?${encodeURI(params.toString())}`, { scroll: false });
    }

    const categoryAccordion: AccordionFIlterType = {
        type: "select",
        data: category,
        Icon: TagsIcon,
        label: "Category"
    }
    const typeEventAccordion: AccordionFIlterType = {
        type: "select",
        data: tipeEvent,
        Icon: SparklesIcon,
        label: "Type Event",
    }

    return (
        <Card className="max-w-[300px]  m-2">

            <CardHeader className="text-2xl flex items-center justify-center -tracking-wide font-extrabold">
                <p>
                    Filter Event
                </p>
            </CardHeader>



            <CardContent className="space-y-4">

                <AccordionFIlter
                    accordionItemData={
                        [
                            categoryAccordion,
                            typeEventAccordion
                        ]
                    }
                />

                <Command className="space-y-4">
                    <Separator />
                    <div>
                        <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                            <MapIcon className="text-primary" />
                            Lokasi
                            {selectedLokasi.length > 0 && <>
                                <BadgeActive
                                    countSelected={() => selectedLokasi.length} contentActive={() => selectedLokasi.join(', ')} resetBadge={() => setSelectedLokasi([])}
                                />
                            </>}
                        </span>
                        <CommandInput />
                        <CommandList className="scroll-thin max-h-56" >
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup >
                                {lokasi.map((v, i) => (
                                    <CommandItem key={i}
                                        value={v}
                                        onSelect={() => handleCheck(v, selectedLokasi, setSelectedLokasi)}
                                        className={`${selectedLokasi.includes(v) ? 'bg-primary text-white data-[selected=true]:text-white data-[selected=true]:bg-primary' : ''}`}
                                    >
                                        {v}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </div>
                </Command>


                {/* Waktu */}
                <div>
                    <h3 className="font-semibold mb-2">Waktu</h3>
                    <Calendar
                        mode="range"
                        numberOfMonths={1}
                        className="border rounded-lg"
                        captionLayout="dropdown"
                    />
                </div>


                {/* Harga */}
                <div>
                    <h3 className="font-semibold mb-2">Rentang Harga (Rp)</h3>
                    <div className="flex items-center gap-2">
                        <Input
                            type="number"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                        />
                        <span>-</span>
                        <Input
                            type="number"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
