
import React from 'react';
import { GuestsList } from '@/components/guests/GuestsList';
import { mockGuests } from '@/data/mockData';

const Guests = () => {
  return <GuestsList guests={mockGuests} />;
};

export default Guests;
