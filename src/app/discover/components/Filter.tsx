"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"

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

    const tipeEvent = ["Online", "Offline", "Hybrid"]

    const [selectedCategory, setSelectedCategory] = useState<string[]>([])
    const [selectedLokasi, setSelectedLokasi] = useState<string[]>([])
    const [selectedTipe, setSelectedTipe] = useState<string[]>([])
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const [date, setDate] = useState("")

    const handleCheck = (
        value: string,
        list: string[],
        setter: React.Dispatch<React.SetStateAction<string[]>>
    ) => {
        if (list.includes(value)) setter(list.filter((v) => v !== value))
        else setter([...list, value])
    }

    return (
        <Card className="p-2">
            <CardHeader>
                <CardTitle className="text-2xl">Filter</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                {/* Category */}
                <div>
                    <h3 className="font-semibold mb-2">Category</h3>
                    <div className="space-y-1">
                        {category.map((v, i) => (
                            <Label key={i} className="flex items-center gap-2 cursor-pointer">
                                <Checkbox
                                    checked={selectedCategory.includes(v)}
                                    onCheckedChange={() =>
                                        handleCheck(v, selectedCategory, setSelectedCategory)
                                    }
                                />
                                {v}
                            </Label>
                        ))}
                    </div>
                </div>

                {/* Lokasi */}
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

                {/* Tipe Event */}
                <div>
                    <h3 className="font-semibold mb-2">Tipe Event</h3>
                    <div className="space-y-1">
                        {tipeEvent.map((v, i) => (
                            <Label key={i} className="flex items-center gap-2 cursor-pointer">
                                <Checkbox
                                    checked={selectedTipe.includes(v)}
                                    onCheckedChange={() =>
                                        handleCheck(v, selectedTipe, setSelectedTipe)
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
