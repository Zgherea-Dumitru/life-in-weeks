import React, { FC } from 'react'
import { cn } from '@/lib/utils'
import { differenceInCalendarWeeks } from 'date-fns/differenceInCalendarWeeks'

export type WeekGroupsProps = {
  birthDay: Date
}

export const WeekGroups: FC<WeekGroupsProps> = ({ birthDay }) => {
  const weeksLapsedSinceBirth = Math.abs(differenceInCalendarWeeks(birthDay, new Date()));

  return (
    <div className='grid grid-cols-52 gap-1.5'>
      {[...Array(80 * 52).keys()].map((w) => (
        <span key={w} className={cn('bg-white h-2 w-2 hover:', weeksLapsedSinceBirth >= w + Math.round(w / 52 / 4) && 'bg-gray-500')} />
      ))}
    </div>
  )
}
