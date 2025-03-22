
import React, { useState } from 'react';
import { Room } from '@/types';
import { RoomCard } from './RoomCard';
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
import { SearchIcon, PlusIcon, FilterIcon } from 'lucide-react';

interface RoomsListProps {
  rooms: Room[];
}

export const RoomsList: React.FC<RoomsListProps> = ({ rooms }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  const filteredRooms = rooms.filter(room => {
    const matchesSearch = room.number.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        room.type.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'all' || room.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <TransitionWrapper>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-3xl font-display font-semibold tracking-tight">Rooms</h1>
            <p className="text-muted-foreground">Manage hotel room inventory</p>
          </div>
          <Button className="shrink-0">
            <PlusIcon className="mr-2 h-4 w-4" />
            Add Room
          </Button>
        </div>
      </TransitionWrapper>

      <TransitionWrapper delay={100}>
        <div className="glass rounded-xl p-4 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search rooms..." 
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
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="occupied">Occupied</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                  <SelectItem value="cleaning">Cleaning</SelectItem>
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
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))
        ) : (
          <TransitionWrapper className="col-span-full text-center p-8">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">No rooms found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters.</p>
            </div>
          </TransitionWrapper>
        )}
      </div>
    </div>
  );
};
