"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { MapIcon, Minus, SparklesIcon, TagsIcon, TimerIcon } from "lucide-react"
import AccordionFIlter from "./AccordionFilter"
import { useRouter, useSearchParams } from "next/navigation"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import BadgeActive from "./BadgeActive"
import { Calendar } from "@/components/ui/calendar"
import { AccordionFIlterType } from "@/features/event/discover/useAccordionFilter"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { DateRange } from "react-day-picker"

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
    const [selectedWaktu, setSelectedWaktu] = useState<DateRange | undefined>()
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
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

    const formatNumber = (value: string) => {
        // Hilangkan semua karakter non-digit
        const numericValue = value.replace(/\D/g, "")
        // Format jadi ribuan dengan titik
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    const categoryAccordion: AccordionFIlterType = {
        data: category,
        Icon: TagsIcon,
        label: "Category"
    }
    const typeEventAccordion: AccordionFIlterType = {
        data: tipeEvent,
        Icon: SparklesIcon,
        label: "Type Event",
    }

    return (
        <Card className="max-w-[300px] shadow-none ml-1">

            <CardHeader className="text-2xl flex items-center justify-center -tracking-wide font-extrabold">
                <p className="">
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
                >
                    <AccordionItem value="lokasi">
                        <Command className="">
                            <AccordionTrigger className="hover:no-underline items-center" size={30}>
                                <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                                    <MapIcon className="text-primary" />
                                    Lokasi
                                    {selectedLokasi.length > 0 &&
                                        <>
                                            <BadgeActive
                                                countSelected={() => selectedLokasi.length}
                                                contentActive={() => selectedLokasi.join(', ')}
                                                resetBadge={() => setSelectedLokasi([])}
                                            />
                                        </>
                                    }
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div className="border rounded-lg">
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
                            </AccordionContent>
                        </Command>
                    </AccordionItem>

                    <AccordionItem value="waktu">
                        <AccordionTrigger className="hover:no-underline items-center" size={30}>
                            <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                                <TimerIcon className="text-primary" />
                                Waktu
                                {selectedWaktu &&
                                    <>
                                        <BadgeActive
                                            countSelected={() => 1}
                                            contentActive={() => (
                                                <div className="flex items-center gap-1.5">
                                                    {selectedWaktu.from?.toDateString()}
                                                    <Minus size={10} />
                                                    {selectedWaktu.to?.toDateString()}
                                                </div>
                                            )}
                                            resetBadge={() => setSelectedWaktu(undefined)}
                                        />
                                    </>}
                            </span>
                        </AccordionTrigger>

                        <AccordionContent>
                            <Calendar
                                mode="range"
                                numberOfMonths={1}
                                className="border rounded-lg"
                                captionLayout="dropdown"
                                selected={selectedWaktu}
                                onSelect={setSelectedWaktu}

                            />
                        </AccordionContent>

                    </AccordionItem>
                </AccordionFIlter>


                {/* Harga */}
                <div>
                    <h3 className="font-semibold mb-2">Rentang Harga (Rp)</h3>
                    <div className="flex items-center gap-2">
                        <Input
                            type="text"
                            placeholder="Min"
                            value={minPrice}
                            onChange={(e) => setMinPrice(() => formatNumber(e.target.value))}
                        />
                        <span>-</span>
                        <Input
                            type="text"
                            placeholder="Max"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(() => formatNumber(e.target.value))}
                        />
                    </div>
                </div>
            </CardContent>
        </Card >
    )
}
