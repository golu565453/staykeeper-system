
import React, { useState } from 'react';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Reservation } from '@/types';
import { mockReservations } from '@/data/mockData';
import { 
  CalendarIcon, 
  PlusIcon, 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ListFilterIcon,
  Search as SearchIcon
} from 'lucide-react';
import { format, addDays, isSameDay } from 'date-fns';

interface ReservationsCalendarProps {
  reservations: Reservation[];
}

const getReservationStatusColor = (status: Reservation['status']) => {
  switch (status) {
    case 'confirmed':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'pending':
      return 'bg-amber-100 text-amber-800 border-amber-200';
    case 'cancelled':
      return 'bg-red-100 text-red-800 border-red-200';
    case 'completed':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const ReservationsCalendar: React.FC<ReservationsCalendarProps> = ({ reservations }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [view, setView] = useState<'day' | 'week' | 'month'>('day');
  
  // Generate dates for week view
  const weekDates = Array.from({ length: 7 }, (_, i) => addDays(date, i));
  
  // Filter reservations for the selected date or week
  const filteredReservations = reservations.filter(reservation => {
    const checkInDate = new Date(reservation.checkIn);
    if (view === 'day') {
      return isSameDay(checkInDate, date);
    } else if (view === 'week') {
      return weekDates.some(d => isSameDay(checkInDate, d));
    }
    return true;
  });

  return (
    <div className="space-y-6">
      <TransitionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-semibold tracking-tight">Reservations</h1>
            <p className="text-muted-foreground">Manage hotel bookings</p>
          </div>
          <Button className="shrink-0">
            <PlusIcon className="mr-2 h-4 w-4" />
            New Reservation
          </Button>
        </div>
      </TransitionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TransitionWrapper delay={100} className="glass rounded-xl p-6 lg:col-span-1">
          <div className="space-y-4">
            <h3 className="font-medium text-lg">Calendar</h3>
            <div className="flex flex-col items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => newDate && setDate(newDate)}
                className="p-0 pointer-events-auto"
              />
            </div>
            <div className="flex gap-2 pt-4">
              <Button 
                variant={view === 'day' ? 'default' : 'outline'} 
                size="sm" 
                className="flex-1"
                onClick={() => setView('day')}
              >
                Day
              </Button>
              <Button 
                variant={view === 'week' ? 'default' : 'outline'} 
                size="sm" 
                className="flex-1"
                onClick={() => setView('week')}
              >
                Week
              </Button>
              <Button 
                variant={view === 'month' ? 'default' : 'outline'} 
                size="sm" 
                className="flex-1"
                onClick={() => setView('month')}
              >
                Month
              </Button>
            </div>
            <div className="space-y-2 pt-4 border-t border-border/40">
              <h4 className="text-sm font-medium">Quick Filters</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  All Reservations
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Today's Check-ins
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Today's Check-outs
                </Button>
              </div>
            </div>
          </div>
        </TransitionWrapper>

        <TransitionWrapper delay={150} className="glass rounded-xl p-6 lg:col-span-2">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CalendarIcon size={20} />
                <h3 className="font-medium text-lg">
                  {view === 'day' 
                    ? format(date, 'MMMM d, yyyy')
                    : view === 'week'
                    ? `${format(weekDates[0], 'MMM d')} - ${format(weekDates[6], 'MMM d, yyyy')}`
                    : format(date, 'MMMM yyyy')
                  }
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="icon" onClick={() => setDate(addDays(date, -1))}>
                  <ChevronLeftIcon size={16} />
                </Button>
                <Button variant="outline" size="icon" onClick={() => setDate(addDays(date, 1))}>
                  <ChevronRightIcon size={16} />
                </Button>
                <Button variant="outline" size="icon">
                  <ListFilterIcon size={16} />
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">
                <SearchIcon size={18} />
              </div>
              <Input 
                placeholder="Search reservations..." 
                className="pl-10 w-full" 
              />
            </div>

            <div className="space-y-3 max-h-[calc(100vh-24rem)] overflow-y-auto">
              {filteredReservations.length > 0 ? (
                filteredReservations.map((reservation) => (
                  <div 
                    key={reservation.id}
                    className={cn(
                      "p-4 rounded-lg border-l-4 animate-hover animate-press",
                      getReservationStatusColor(reservation.status)
                    )}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{reservation.guestName}</h4>
                        <p className="text-sm text-muted-foreground">Room {reservation.roomNumber}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">${reservation.totalAmount}</p>
                        <p className="text-xs text-muted-foreground capitalize">{reservation.status}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-2 pt-2 border-t border-border/30">
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Check-in</span>
                        <span className="text-sm">{reservation.checkIn}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs text-muted-foreground">Check-out</span>
                        <span className="text-sm">{reservation.checkOut}</span>
                      </div>
                      <div className="ml-auto">
                        <Button variant="outline" size="sm">View</Button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center p-8">
                  <h3 className="text-lg font-medium">No reservations found</h3>
                  <p className="text-muted-foreground">There are no bookings for this period.</p>
                </div>
              )}
            </div>
          </div>
        </TransitionWrapper>
      </div>
    </div>
  );
};
