"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { MapIcon, RotateCw, SparklesIcon, TagsIcon } from "lucide-react"
import AccordionFIlter from "./AccordionFilter"
import { useRouter } from "next/navigation"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Separator } from "@/components/ui/separator"
import BadgeActive from "./BadgeActive"

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

    const handleCheck = (
        value: string,
        list: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (list.includes(value)) setter(list.filter((v) => v !== value))
        else setter([...list, value])
    }

    const categoryAccordion = {
        data: category,
        Icon: TagsIcon,
        label: "Category"
    }
    const typeEventAccordion = {
        data: tipeEvent,
        Icon: SparklesIcon,
        label: "Type Event",
    }

    return (
        <Card className="max-w-xs m-4">

            <CardHeader>
                <CardTitle className="text-2xl flex justify-between items-center gap-3 tracking-wider leading-loose font-extrabold">
                    Filter
                    <RotateCw className="text-destructive"
                        onClick={() => router.replace(window.location.pathname)}
                    />
                </CardTitle>
                <div className="bg-black/20 w-full h-0.5 rounded"></div>
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

                <Separator />

                <Command>
                    <span className="flex gap-2 items-center text-lg font-semibold tracking-widest">
                        <MapIcon className="text-primary" />
                        Lokasi
                        {selectedLokasi.length > 0 && <>
                            <BadgeActive
                                countSelected={() => selectedLokasi.length} contentActive={() => selectedLokasi.join(', ')} resetBadge={() => setSelectedLokasi([])} />
                        </>}
                    </span>
                    <CommandInput />
                    <CommandList className="scroll-thin">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
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
                </Command>

                {/* Waktu */}
                <div>
                    <h3 className="font-semibold mb-2">Waktu</h3>
                    <Input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
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
