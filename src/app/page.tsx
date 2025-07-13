'use client';
import React from 'react'
import { format } from 'date-fns';
import { WeekGroups } from "./components"
import { Button } from "@/components/ui/button"
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

export default function Home() {
  const [date, setDate] = React.useState<Date>(new Date('01-01-2000'));

  return (
    <div className="items-center justify-items-start mx-auto w-[900px]">
      <header className='mt-5 justify-start'>
        <h1 className='text-2xl font-bold'>Your life in weeks</h1>
        <h3>How many weeks passed and how many you have left based on your expected life span</h3>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              data-empty={!date}
              className="data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal my-5"
            >
              {date ? format(date, "PPP") : <span>Pick birthday</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar required captionLayout="dropdown" mode="single" selected={date} onSelect={setDate} />
          </PopoverContent>
        </Popover>
      </header>
      <WeekGroups birthDay={date || new Date()} />
    </div>
  );
}
