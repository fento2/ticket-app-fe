"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { RotateCw, SparklesIcon, TagsIcon } from "lucide-react"
import AccordionFIlter from "./AccordionFilter"
import { useRouter } from "next/navigation"

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
        "Hybrid"];

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

            <CardContent className="space-y-6">

                <AccordionFIlter
                    accordionItemData={
                        [
                            categoryAccordion,
                            typeEventAccordion
                        ]
                    }
                />

                <div>
                    <h3 className="font-semibold mb-2">Lokasi</h3>
                    <div className="space-y-1">
                        {lokasi.map((v, i) => (
                            <Label key={i} className="flex items-center gap-2 cursor-pointer">
                                <Checkbox
                                    checked={selectedLokasi.includes(v)}
                                    onCheckedChange={() =>
                                        handleCheck(v, selectedLokasi, setSelectedLokasi)
                                    }
                                />
                                {v}
                            </Label>
                        ))}
                    </div>
                </div>


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
