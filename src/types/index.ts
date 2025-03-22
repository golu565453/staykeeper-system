
export interface Room {
  id: string;
  number: string;
  type: string;
  capacity: number;
  price: number;
  status: 'available' | 'occupied' | 'maintenance' | 'cleaning';
  amenities: string[];
  image: string;
}

export interface Guest {
  id: string;
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomId: string;
  status: 'checked-in' | 'checked-out' | 'pending';
  image?: string;
}

export interface Reservation {
  id: string;
  guestId: string;
  guestName: string;
  roomId: string;
  roomNumber: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'pending' | 'cancelled' | 'completed';
  totalAmount: number;
}

export interface Stats {
  occupancyRate: number;
  availableRooms: number;
  occupiedRooms: number;
  pendingCheckIns: number;
  pendingCheckOuts: number;
  revenue: {
    daily: number;
    weekly: number;
    monthly: number;
  };
}
