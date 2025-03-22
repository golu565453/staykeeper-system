
import React from 'react';
import { Guest } from '@/types';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { 
  CalendarIcon, 
  PhoneIcon, 
  MailIcon,
  BedDoubleIcon,
  MoreHorizontalIcon
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';

interface GuestCardProps {
  guest: Guest;
  index: number;
}

const getStatusColor = (status: Guest['status']) => {
  switch (status) {
    case 'checked-in':
      return 'bg-green-100 text-green-800';
    case 'checked-out':
      return 'bg-blue-100 text-blue-800';
    case 'pending':
      return 'bg-amber-100 text-amber-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export const GuestCard: React.FC<GuestCardProps> = ({ guest, index }) => {
  return (
    <TransitionWrapper delay={100 + (index * 50)} animation="scale">
      <div className="glass rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 animate-hover animate-press">
        <div className="p-5 space-y-4">
          <div className="flex justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-medium text-lg">{guest.name}</h3>
                <Badge className={cn("font-medium", getStatusColor(guest.status))}>
                  {guest.status.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                </Badge>
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <MoreHorizontalIcon size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Profile</DropdownMenuItem>
                <DropdownMenuItem>Edit Details</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Check-out</DropdownMenuItem>
                <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MailIcon size={14} />
              <span>{guest.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <PhoneIcon size={14} />
              <span>{guest.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <BedDoubleIcon size={14} />
              <span>Room {guest.roomId}</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/30">
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CalendarIcon size={12} />
                Check-in
              </span>
              <span className="font-medium">{guest.checkIn}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground flex items-center gap-1">
                <CalendarIcon size={12} />
                Check-out
              </span>
              <span className="font-medium">{guest.checkOut}</span>
            </div>
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button variant="default" className="flex-1">View Details</Button>
            <Button variant="outline">Send Message</Button>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};
