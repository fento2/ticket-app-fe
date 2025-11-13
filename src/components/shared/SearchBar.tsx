"use client"
import React, { useRef, useState } from "react";
import { SearchIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const searchBarVariants = cva(
  "peer font-medium placeholder:font-normal focus:pl-11 pr-11 focus-visible:ring-1 focus-visible:ring-offset-0 shadow-none focus:bg-background focus:dark:bg-background transition-all",
  {
    variants: {
      variant: {
        default: "rounded-l-full",
        icon: "rounded-full",
      },
    },
  },
)



type SearchBarProps = {
  value?: string,
  onChange?: (value: string) => void
} &
  Omit<React.ComponentProps<"input">, 'value' | 'onChange'> &
  Required<VariantProps<typeof searchBarVariants>>


const SearchBar = ({ variant, className, value, onChange, ...props }: SearchBarProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null)

  // fungsi untuk toggle expand
  const handleToggle = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <form className="relative flex justify-between w-full">

      <div className="relative w-full">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search"
          className={cn(searchBarVariants({ className, variant }), value ? 'bg-background dark:bg-background' : 'bg-background/50 dark:bg-background/50')}
          value={value}
          onChange={(e) => {
            if (onChange) {
              onChange(e.target.value)
            }
          }}
          {...props}
        />
        {value && <Button
          type="button"
          size={"icon-sm"}
          variant={'ghost'}
          className="absolute top-0.5 right-1"
          onMouseDown={(e) => e.preventDefault()}
          onClick={(e) => {
            if (onChange) {
              onChange('')
              inputRef.current?.focus()
            }
          }}
        >
          <X
            strokeWidth={3}
            className="size-4 "
          />
        </Button>}
        <SearchIcon
          className="absolute top-2.5 left-4 size-4 opacity-0 translate-x-2 transition-all duration-300 peer-focus:opacity-100 peer-focus:translate-x-0"
          strokeWidth={3}
        />
      </div>

      <Button
        variant="secondary"
        type="submit"
        onClick={(e) => {
          e.preventDefault()
          console.log('run')
        }}
        className={`cursor-pointer
           ${variant === "default" ? "rounded-r-full px-6!" : "absolute right-0.5"}
           `}
      >
        <SearchIcon strokeWidth={3} />
      </Button>
    </form>
  );

};

export default SearchBar;
