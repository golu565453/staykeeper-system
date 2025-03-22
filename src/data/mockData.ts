
import { Room, Guest, Reservation, Stats } from '../types';

export const mockRooms: Room[] = [
  {
    id: '1',
    number: '101',
    type: 'Deluxe King',
    capacity: 2,
    price: 250,
    status: 'available',
    amenities: ['King Bed', 'Sea View', 'Mini Bar', 'Free Wi-Fi', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '2',
    number: '102',
    type: 'Deluxe Twin',
    capacity: 2,
    price: 220,
    status: 'occupied',
    amenities: ['Twin Beds', 'City View', 'Mini Bar', 'Free Wi-Fi', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '3',
    number: '103',
    type: 'Executive Suite',
    capacity: 4,
    price: 450,
    status: 'maintenance',
    amenities: ['King Bed', 'Sofa Bed', 'Sea View', 'Mini Bar', 'Free Wi-Fi', 'Room Service', 'Kitchenette'],
    image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '4',
    number: '104',
    type: 'Deluxe King',
    capacity: 2,
    price: 250,
    status: 'cleaning',
    amenities: ['King Bed', 'Mountain View', 'Mini Bar', 'Free Wi-Fi', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '5',
    number: '105',
    type: 'Presidential Suite',
    capacity: 6,
    price: 1200,
    status: 'available',
    amenities: ['King Bed', 'Sea View', 'Mini Bar', 'Free Wi-Fi', 'Room Service', 'Jacuzzi', 'Private Terrace', 'Dining Area'],
    image: 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: '6',
    number: '201',
    type: 'Deluxe Twin',
    capacity: 2,
    price: 220,
    status: 'available',
    amenities: ['Twin Beds', 'Garden View', 'Mini Bar', 'Free Wi-Fi', 'Room Service'],
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074&auto=format&fit=crop'
  },
];

export const mockGuests: Guest[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 234 567 8901',
    checkIn: '2023-05-01',
    checkOut: '2023-05-05',
    roomId: '2',
    status: 'checked-in',
    image: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@example.com',
    phone: '+1 234 567 8902',
    checkIn: '2023-05-02',
    checkOut: '2023-05-06',
    roomId: '4',
    status: 'pending',
    image: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: '3',
    name: 'Michael Davis',
    email: 'michael.davis@example.com',
    phone: '+1 234 567 8903',
    checkIn: '2023-04-28',
    checkOut: '2023-05-03',
    roomId: '3',
    status: 'checked-out',
    image: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: '4',
    name: 'Emma Wilson',
    email: 'emma.wilson@example.com',
    phone: '+1 234 567 8904',
    checkIn: '2023-05-03',
    checkOut: '2023-05-10',
    roomId: '1',
    status: 'pending',
    image: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
];

export const mockReservations: Reservation[] = [
  {
    id: '1',
    guestId: '1',
    guestName: 'John Smith',
    roomId: '2',
    roomNumber: '102',
    checkIn: '2023-05-01',
    checkOut: '2023-05-05',
    status: 'confirmed',
    totalAmount: 880
  },
  {
    id: '2',
    guestId: '2',
    guestName: 'Sarah Johnson',
    roomId: '4',
    roomNumber: '104',
    checkIn: '2023-05-02',
    checkOut: '2023-05-06',
    status: 'pending',
    totalAmount: 1000
  },
  {
    id: '3',
    guestId: '3',
    guestName: 'Michael Davis',
    roomId: '3',
    roomNumber: '103',
    checkIn: '2023-04-28',
    checkOut: '2023-05-03',
    status: 'completed',
    totalAmount: 2250
  },
  {
    id: '4',
    guestId: '4',
    guestName: 'Emma Wilson',
    roomId: '1',
    roomNumber: '101',
    checkIn: '2023-05-03',
    checkOut: '2023-05-10',
    status: 'confirmed',
    totalAmount: 1750
  },
];

export const mockStats: Stats = {
  occupancyRate: 65,
  availableRooms: 25,
  occupiedRooms: 18,
  pendingCheckIns: 7,
  pendingCheckOuts: 4,
  revenue: {
    daily: 3500,
    weekly: 24500,
    monthly: 105000
  }
};
