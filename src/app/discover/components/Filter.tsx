"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { FilterIcon, MapIcon, Minus, RotateCw, SparklesIcon, TagsIcon, TimerIcon } from "lucide-react"
import AccordionFIlter, { AccordionFilterItem, } from "./AccordionFilter"
import { useRouter, useSearchParams } from "next/navigation"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import BadgeActive from "./BadgeActive"
import { Calendar } from "@/components/ui/calendar"
import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import type { DateRange } from "react-day-picker"
import { Button } from "@/components/ui/button"
import { useFilterStore } from "@/lib/zustand/filterStore"



export const Filter = () => {
    const listCategory = [
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
    const categories = useFilterStore((state) => state.value.categories);
    const setCategories = useFilterStore((state) => state.action.setCategories)
    const resetFilter = useFilterStore((state) => state.action.resetFilter)
    const eventTypes = useFilterStore((state) => state.value.eventTypes)
    const setEventTypes = useFilterStore((state) => state.action.setEventTypes)

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

    const categoryAccordion: AccordionFilterItem = {
        Icon: TagsIcon,
        label: "Category",
        countSelected: () => categories.length,
        setReset: () => resetFilter('categories'),
        isActive: categories.length > 0,
        toolTipContent: categories.join(' ,'),
        renderContent: (
            <div className="grid grid-cols-2 gap-2">
                {listCategory.map((vm, i) => (
                    <Button
                        key={i}
                        size="sm"
                        variant="outline"
                        className={`cursor-pointer text-sm font-medium tracking-wider rounded-full
                        ${categories.includes(vm) ? 'bg-primary hover:bg-primary hover:text-white text-white' : ''}`}
                        onClick={() => {
                            if (categories.includes(vm)) {
                                setCategories(categories.filter((v) => v !== vm))
                            } else {
                                setCategories([...categories, vm])
                            }
                        }}
                    >
                        {vm}
                    </Button>
                ))}
            </div>
        ),
    }
    const eventTypeAccordion: AccordionFilterItem = {
        Icon: SparklesIcon,
        label: "Type Event",
        countSelected: () => eventTypes.length,
        setReset: () => resetFilter('eventTypes'),
        isActive: eventTypes.length > 0,
        toolTipContent: eventTypes.join(' ,'),
        renderContent: (
            <div className="grid grid-cols-2 gap-2">
                {tipeEvent.map((vm, i) => (
                    <Button
                        key={i}
                        size="sm"
                        variant="outline"
                        className={`cursor-pointer text-sm font-medium tracking-wider rounded-full
                        ${eventTypes.includes(vm) ? 'bg-primary hover:bg-primary hover:text-white text-white' : ''}`}
                        onClick={() => {
                            if (eventTypes.includes(vm)) {
                                setEventTypes(eventTypes.filter((v) => v !== vm))
                            } else {
                                setEventTypes([...eventTypes, vm])
                            }
                        }}
                    >
                        {vm}
                    </Button>
                ))}
            </div>
        )
    }

    return (
        <Card className="max-w-[300px] shadow-none border-none">

            <CardHeader className="text-2xl flex items-center justify-center tracking-wide font-bold">
                <p className="">
                    Filter Event
                </p>
            </CardHeader>

            <CardContent className="space-y-4">

                <AccordionFIlter
                    accordionItemData={
                        [
                            categoryAccordion,
                            eventTypeAccordion
                        ]
                    }
                />
                {/* <AccordionItem value="lokasi">
                    <Command className="">
                        <AccordionTrigger className="hover:no-underline items-center py-2" size={27}>
                            <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                                <MapIcon className="text-primary" />
                                Lokasi
                                {selectedLokasi.length > 0 &&
                                    <>
                                        <BadgeActive
                                            countSelected={selectedLokasi.length}
                                            toolTipContent={selectedLokasi.join(', ')}
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
                    <AccordionTrigger className="hover:no-underline items-center py-2" size={27}>
                        <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                            <TimerIcon className="text-primary" />
                            Waktu
                            {selectedWaktu &&
                                <>
                                    <BadgeActive
                                        countSelected={1}
                                        toolTipContent={
                                            <div className="flex items-center gap-1.5">
                                                {selectedWaktu.from?.toDateString()}
                                                <Minus size={10} />
                                                {selectedWaktu.to?.toDateString()}
                                            </div>
                                        }
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

                </AccordionItem> */}

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
            <CardFooter className="flex justify-between  gap-4">
                <Button variant={'destructive'} className="rounded-full">
                    <RotateCw /> Reset
                </Button>
                <Button className="rounded-full">
                    <FilterIcon />Apply
                </Button>
            </CardFooter>
        </Card >
    )
}
