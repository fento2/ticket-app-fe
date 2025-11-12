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
import { ActionType } from "@/types/shared"


const listCategory = [
    "Music",
    "Tech",
    "Art",
    "Sport",
    "Education",
    "Business",
    "Others",
]

const listLokasi = [
    "Jakarta",
    "Bandung",
    "Surabaya",
    "Medan",
    "Bali",
    "Yogyakarta",
    "Makassar",
]

const listEventTypes = [
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

type RenderGridCol2Props = {
    listOption: string[]
    state: string[]
    setState: (value: string) => void
}
const RenderGridCol2 = ({ listOption, setState, state }: RenderGridCol2Props) => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {listOption.map((vm, i) => (
                <Button
                    key={i}
                    size="sm"
                    variant={`${state.includes(vm) ? 'default' : 'secondary'}`}
                    className={`cursor-pointer font-medium tracking-wider rounded-full`}
                    onClick={() => setState(vm)}
                >
                    {vm}
                </Button>
            ))}
        </div>
    )
}

type KeyFilter = 'categories' | 'eventTypes' | 'locations' | 'timeRange';

const keyFilterArray: KeyFilter[] = ['categories', 'eventTypes', 'locations', 'timeRange'];

type ApplyFilterItem<ValueType> = {
    key: KeyFilter,
    value: ValueType
}
type ApplyFilterArr<ValueType> = ApplyFilterItem<ValueType>[]

export const Filter = () => {
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")
    const router = useRouter()
    const searchParam = useSearchParams()
    const categories = useFilterStore((state) => state.value.categories);
    const setCategories = useFilterStore((state) => state.action.setCategories)
    const resetFilter = useFilterStore((state) => state.action.resetFilter)
    const eventTypes = useFilterStore((state) => state.value.eventTypes)
    const setEventTypes = useFilterStore((state) => state.action.setEventTypes)
    const locations = useFilterStore((state) => state.value.locations)
    const setLocations = useFilterStore((state) => state.action.setLocations)
    const timeRange = useFilterStore((state) => state.value.timeRange)
    const setTimeRange = useFilterStore((state) => state.action.setTimeRange)





    const handleCheck = <StateType,>(
        value: StateType,
        state: StateType[],
        setState: ActionType<StateType[]>
    ) => {
        if (state.includes(value)) setState(state.filter((v) => v !== value))
        else setState([...state, value])

        // const params = new URLSearchParams(searchParam.toString());
        // if (params.getAll('lokasi').includes(value)) {
        //     const updated = params.getAll('lokasi').filter((v) => v !== value);
        //     params.delete('lokasi');
        //     updated.forEach((v) => params.append('lokasi', v));
        // } else {
        //     params.append('lokasi', value);
        // }

        // router.replace(`?${encodeURI(params.toString())}`, { scroll: false });
    }

    const formatNumber = (value: string) => {
        // Hilangkan semua karakter non-digit
        const numericValue = value.replace(/\D/g, "")
        // Format jadi ribuan dengan titik
        return numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }

    const applyFilter = () => {
        const params = new URLSearchParams();

        // Ambil dari state
        const categories = useFilterStore.getState().value.categories;
        const eventTypes = useFilterStore.getState().value.eventTypes;
        const locations = useFilterStore.getState().value.locations;
        const timeRange = useFilterStore.getState().value.timeRange;

        // Tambahin ke URLSearchParams kalo ada isinya
        if (categories.length) params.set("categories", categories.join(","));
        if (eventTypes.length) params.set("eventTypes", eventTypes.join(","));
        if (locations.length) params.set("locations", locations.join(","));
        if (timeRange) {
            if (timeRange.from) params.set("from", timeRange.from.toISOString());
            if (timeRange.to) params.set("to", timeRange.to.toISOString());
        }

        // Misal redirect ke halaman baru atau update URL
        const url = `${params.toString()}`;
        console.log(url);
    };

    const getValue = (key: KeyFilter) => {
        const params = new URLSearchParams(searchParam.toString());
        return params.getAll
    }

    const categoryAccordion: AccordionFilterItem = {
        Icon: TagsIcon,
        label: "Category",
        countSelected: () => categories.length,
        setReset: () => resetFilter('categories'),
        isActive: categories.length > 0,
        toolTipContent: categories.join(', '),
        renderContent: () => (
            <RenderGridCol2
                listOption={listCategory}
                setState={(value) => handleCheck(value, categories, setCategories)}
                state={categories}
            />
        )
    }

    const eventTypeAccordion: AccordionFilterItem = {
        Icon: SparklesIcon,
        label: "Event Type",
        countSelected: () => eventTypes.length,
        setReset: () => resetFilter('eventTypes'),
        isActive: eventTypes.length > 0,
        toolTipContent: eventTypes.join(', '),
        renderContent: () => (
            <RenderGridCol2
                listOption={listEventTypes}
                setState={(value) => handleCheck(value, eventTypes, setEventTypes)}
                state={eventTypes}
            />
        )
    }

    const locationAccordion: AccordionFilterItem = {
        countSelected: () => locations.length,
        Icon: MapIcon,
        isActive: locations.length > 0,
        label: "Location",
        setReset: () => resetFilter('locations'),
        toolTipContent: locations.join(', '),
        renderContent: () => (
            <Command >
                <div className="border rounded-2xl rounded-b-none border-b focus-within:border focus-within:border-primary">
                    <CommandInput className="outline-none" clasNameDiv="border-none" />
                </div>
                <div className="border border-t-0 rounded-b-2xl">
                    <CommandList className="scroll-thin max-h-56">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup>
                            {listLokasi.map((v, i) => (
                                <CommandItem key={i}
                                    value={v}
                                    onSelect={() => handleCheck(v, locations, setLocations)}
                                    className={`my-0.5 rounded-full ${locations.includes(v) ? 'bg-primary text-white data-[selected=true]:text-white data-[selected=true]:bg-primary' : ''}`}
                                >
                                    {v}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </div>
            </Command>
        )

    }

    const timeRangeAccordion: AccordionFilterItem = {
        countSelected: () => <TimerIcon size={13.5} />,
        Icon: TimerIcon,
        isActive: !!timeRange,
        label: 'Time Range',
        setReset: () => resetFilter('timeRange'),
        toolTipContent: (
            <div className="flex items-center gap-1.5">
                {timeRange?.from?.toDateString()}
                <Minus size={10} />
                {timeRange?.to?.toDateString()}
            </div>
        ),
        renderContent: () => (
            <Calendar
                mode="range"
                numberOfMonths={1}
                className="border rounded-xl w-full"
                captionLayout="dropdown"
                selected={timeRange}
                onSelect={setTimeRange}

            />
        )
    }

    return (
        <Card className="w-[310px] shadow-none border py-4">

            <CardContent className="space-y-4">
                <div className="flex items-center justify-center tracking-wide font-bold">
                    <p className="text-lg">
                        Filter Event
                    </p>
                </div>

                <AccordionFIlter
                    accordionItemData={
                        [
                            categoryAccordion,
                            eventTypeAccordion,
                            locationAccordion,
                            timeRangeAccordion,
                        ]
                    }
                />
                {/* Harga
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
                </div> */}
                <div className="flex justify-between">
                    <Button variant={'destructive'} className="rounded-full">
                        <RotateCw /> Reset
                    </Button>
                    <Button className="rounded-full"
                        variant={'default'}>
                        <FilterIcon />Apply
                    </Button>
                </div>
            </CardContent>
        </Card >
    )
}
