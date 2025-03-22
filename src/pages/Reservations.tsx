
import React from 'react';
import { ReservationsCalendar } from '@/components/reservations/Calendar';
import { mockReservations } from '@/data/mockData';

const Reservations = () => {
  return <ReservationsCalendar reservations={mockReservations} />;
};

export default Reservations;
