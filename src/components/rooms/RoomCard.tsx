
import React from 'react';
import { Room } from '@/types';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { 
  BedDoubleIcon, 
  UsersIcon, 
  TagIcon,
  WifiIcon,
  TvIcon,
  GlassWaterIcon,
  UtensilsIcon,
  MountainIcon
} from 'lucide-react';

interface RoomCardProps {
  room: Room;
  index: number;
}

const getStatusColor = (status: Room['status']) => {
  switch (status) {
    case 'available':
      return 'bg-green-100 text-green-800';
    case 'occupied':
      return 'bg-blue-100 text-blue-800';
    case 'maintenance':
      return 'bg-amber-100 text-amber-800';
    case 'cleaning':
      return 'bg-purple-100 text-purple-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getAmenityIcon = (amenity: string) => {
  if (amenity.includes('Wi-Fi')) return <WifiIcon size={14} />;
  if (amenity.includes('TV')) return <TvIcon size={14} />;
  if (amenity.includes('Bar')) return <GlassWaterIcon size={14} />;
  if (amenity.includes('Service')) return <UtensilsIcon size={14} />;
  if (amenity.includes('View')) return <MountainIcon size={14} />;
  return null;
};

export const RoomCard: React.FC<RoomCardProps> = ({ room, index }) => {
  return (
    <TransitionWrapper delay={100 + (index * 50)} animation="scale">
      <div className="glass rounded-xl overflow-hidden hover:shadow-md transition-all duration-300 animate-hover animate-press">
        <div className="relative">
          <AspectRatio ratio={16 / 9}>
            <img 
              src={room.image} 
              alt={`Room ${room.number}`} 
              className="object-cover w-full h-full rounded-t-xl"
            />
          </AspectRatio>
          <div className="absolute top-3 right-3">
            <Badge className={cn("font-medium", getStatusColor(room.status))}>
              {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
            </Badge>
          </div>
        </div>
        
        <div className="p-5 space-y-4">
          <div className="space-y-1">
            <div className="flex justify-between items-start">
              <h3 className="font-medium text-lg">Room {room.number}</h3>
              <div className="flex items-center text-primary">
                <TagIcon size={16} className="mr-1" />
                <span className="font-semibold">${room.price}</span>
                <span className="text-xs text-muted-foreground">/night</span>
              </div>
            </div>
            <p className="text-muted-foreground">{room.type}</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BedDoubleIcon size={16} />
              <span>{room.type.includes('Twin') ? 'Twin Beds' : 'King Bed'}</span>
            </div>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <UsersIcon size={16} />
              <span>{room.capacity} Guests</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {room.amenities.slice(0, 5).map((amenity, i) => (
              <Badge key={i} variant="secondary" className="flex items-center gap-1 font-normal">
                {getAmenityIcon(amenity)}
                <span className="text-xs">{amenity}</span>
              </Badge>
            ))}
            {room.amenities.length > 5 && (
              <Badge variant="secondary" className="font-normal">
                +{room.amenities.length - 5} more
              </Badge>
            )}
          </div>
          
          <div className="flex gap-2 pt-2">
            <Button variant="default" className="flex-1">View Details</Button>
            <Button variant="outline">Check Availability</Button>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};
