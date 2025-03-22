
import React, { useState } from 'react';
import { Guest } from '@/types';
import { GuestCard } from './GuestCard';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { SearchIcon, UserPlusIcon, FilterIcon } from 'lucide-react';

interface GuestsListProps {
  guests: Guest[];
}

export const GuestsList: React.FC<GuestsListProps> = ({ guests }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredGuests = guests.filter(guest => {
    const matchesSearch = guest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          guest.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || guest.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <TransitionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-semibold tracking-tight">Guests</h1>
            <p className="text-muted-foreground">Manage hotel guests</p>
          </div>
          <Button className="shrink-0">
            <UserPlusIcon className="mr-2 h-4 w-4" />
            Add Guest
          </Button>
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={100}>
        <div className="glass rounded-xl p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search guests..." 
              className="pl-10 w-full" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <div className="w-40">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All statuses" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All statuses</SelectItem>
                  <SelectItem value="checked-in">Checked In</SelectItem>
                  <SelectItem value="checked-out">Checked Out</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button variant="outline" size="icon">
              <FilterIcon size={18} />
            </Button>
          </div>
        </div>
      </TransitionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuests.length > 0 ? (
          filteredGuests.map((guest, index) => (
            <GuestCard key={guest.id} guest={guest} index={index} />
          ))
        ) : (
          <TransitionWrapper className="col-span-full text-center p-8">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">No guests found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          </TransitionWrapper>
        )}
      </div>
    </div>
  );
};
