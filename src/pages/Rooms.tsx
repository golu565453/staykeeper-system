
import React from 'react';
import { RoomsList } from '@/components/rooms/RoomsList';
import { mockRooms } from '@/data/mockData';

const Rooms = () => {
  return <RoomsList rooms={mockRooms} />;
};

export default Rooms;
