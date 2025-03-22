
import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from 'recharts';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import { cn } from '@/lib/utils';
import { mockStats } from '@/data/mockData';
import { 
  BedDoubleIcon, 
  UsersIcon, 
  CalendarCheckIcon, 
  ArrowUpIcon, 
  TrendingUpIcon,
  PercentIcon
} from 'lucide-react';

const revenueData = [
  { name: 'Mon', value: 2400 },
  { name: 'Tue', value: 1398 },
  { name: 'Wed', value: 3200 },
  { name: 'Thu', value: 2800 },
  { name: 'Fri', value: 4300 },
  { name: 'Sat', value: 5200 },
  { name: 'Sun', value: 4800 },
];

const occupancyData = [
  { name: 'Mon', available: 40, occupied: 60 },
  { name: 'Tue', available: 30, occupied: 70 },
  { name: 'Wed', available: 20, occupied: 80 },
  { name: 'Thu', available: 25, occupied: 75 },
  { name: 'Fri', available: 15, occupied: 85 },
  { name: 'Sat', available: 10, occupied: 90 },
  { name: 'Sun', available: 20, occupied: 80 },
];

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  positive?: boolean;
  icon: React.ReactNode;
  delay?: number;
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  positive = true, 
  icon,
  delay = 0
}) => {
  return (
    <TransitionWrapper delay={delay} animation="scale">
      <div className="glass rounded-2xl p-6 flex flex-col space-y-4">
        <div className="flex justify-between items-start">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <div className="rounded-full p-2 bg-secondary">
            {icon}
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-display font-semibold">{value}</h3>
          {change && (
            <div className="flex items-center gap-1 text-xs font-medium">
              <span className={cn(
                'flex items-center gap-0.5 rounded-full px-1.5 py-0.5',
                positive ? 'text-green-700 bg-green-100' : 'text-red-700 bg-red-100'
              )}>
                <ArrowUpIcon size={12} className={cn(!positive && 'rotate-180')} />
                {change}
              </span>
              <span className="text-muted-foreground">vs last week</span>
            </div>
          )}
        </div>
      </div>
    </TransitionWrapper>
  );
};

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <TransitionWrapper>
        <h1 className="text-3xl font-display font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Hotel performance at a glance</p>
      </TransitionWrapper>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Occupancy Rate" 
          value={`${mockStats.occupancyRate}%`} 
          change="12%"
          positive={true}
          icon={<PercentIcon size={18} />}
          delay={100}
        />
        <StatCard 
          title="Available Rooms" 
          value={mockStats.availableRooms}
          change="5%"
          positive={false}
          icon={<BedDoubleIcon size={18} />}
          delay={150}
        />
        <StatCard 
          title="Check-ins Today" 
          value={mockStats.pendingCheckIns}
          change="8%"
          positive={true}
          icon={<UsersIcon size={18} />}
          delay={200}
        />
        <StatCard 
          title="Revenue (Daily)" 
          value={`$${mockStats.revenue.daily.toLocaleString()}`}
          change="15%"
          positive={true}
          icon={<TrendingUpIcon size={18} />}
          delay={250}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TransitionWrapper delay={300} animation="slide">
          <div className="glass rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Weekly Revenue</h3>
              <p className="text-sm text-muted-foreground">Revenue trends for the past week</p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={revenueData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '0.5rem', 
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      border: 'none' 
                    }}
                    formatter={(value) => [`$${value}`, 'Revenue']}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8884d8"
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TransitionWrapper>

        <TransitionWrapper delay={350} animation="slide">
          <div className="glass rounded-2xl p-6 space-y-4">
            <div>
              <h3 className="text-lg font-medium">Occupancy Overview</h3>
              <p className="text-sm text-muted-foreground">Room occupancy for the past week</p>
            </div>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={occupancyData}
                  margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip 
                    contentStyle={{ 
                      borderRadius: '0.5rem', 
                      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                      border: 'none' 
                    }}
                  />
                  <Legend />
                  <Bar dataKey="occupied" fill="#8884d8" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="available" fill="#82ca9d" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </TransitionWrapper>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TransitionWrapper delay={400} animation="slide">
          <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Recent Check-ins</h3>
                <p className="text-sm text-muted-foreground">Latest guest arrivals</p>
              </div>
              <button className="text-sm text-primary hover:underline">View all</button>
            </div>
            <div className="space-y-4">
              {mockGuests.filter(guest => guest.status === 'checked-in').slice(0, 3).map((guest, index) => (
                <div key={guest.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={guest.image} alt={guest.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{guest.name}</h4>
                    <p className="text-sm text-muted-foreground">Room {mockRooms.find(room => room.id === guest.roomId)?.number}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="font-medium">Check-in</p>
                    <p className="text-muted-foreground">{guest.checkIn}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TransitionWrapper>

        <TransitionWrapper delay={450} animation="slide">
          <div className="glass rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-medium">Upcoming Reservations</h3>
                <p className="text-sm text-muted-foreground">Bookings for the next days</p>
              </div>
              <button className="text-sm text-primary hover:underline">View all</button>
            </div>
            <div className="space-y-4">
              {mockReservations.filter(res => res.status === 'confirmed').slice(0, 3).map((reservation) => (
                <div key={reservation.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CalendarCheckIcon size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{reservation.guestName}</h4>
                    <p className="text-sm text-muted-foreground">Room {reservation.roomNumber}</p>
                  </div>
                  <div className="text-sm text-right">
                    <p className="font-medium">{reservation.checkIn}</p>
                    <p className="text-muted-foreground">${reservation.totalAmount}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </TransitionWrapper>
      </div>
    </div>
  );
};
