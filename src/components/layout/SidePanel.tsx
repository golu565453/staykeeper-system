
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TransitionWrapper } from '@/components/shared/TransitionWrapper';
import {
  LayoutDashboardIcon,
  BedDoubleIcon,
  UsersIcon,
  CalendarIcon,
  SettingsIcon,
  HotelIcon,
  LogOutIcon
} from 'lucide-react';

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  delay: number;
}

const NavItem: React.FC<NavItemProps> = ({ to, icon: Icon, label, delay }) => {
  return (
    <TransitionWrapper delay={delay} animation="slide-right">
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            'flex items-center gap-3 px-4 py-3 rounded-lg transition-all',
            'hover:bg-accent/10 hover:text-accent-foreground animate-hover animate-press',
            isActive ? 'bg-accent/10 text-accent-foreground' : 'text-foreground/70'
          )
        }
      >
        <Icon size={20} />
        <span className="font-medium">{label}</span>
      </NavLink>
    </TransitionWrapper>
  );
};

export const SidePanel: React.FC<SidePanelProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Backdrop for mobile */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Side panel */}
      <aside
        className={cn(
          'glass-dark fixed left-0 top-0 bottom-0 w-64 z-50 border-r border-border/40 transition-transform duration-300 ease-in-out',
          'flex flex-col',
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        )}
      >
        <div className="p-4 flex items-center justify-center border-b border-border/40 h-16">
          <TransitionWrapper animation="fade">
            <div className="flex items-center gap-2">
              <HotelIcon size={24} className="text-primary" />
              <h1 className="text-xl font-display font-semibold tracking-tight">StayKeeper</h1>
            </div>
          </TransitionWrapper>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
          <NavItem to="/" icon={LayoutDashboardIcon} label="Dashboard" delay={100} />
          <NavItem to="/rooms" icon={BedDoubleIcon} label="Rooms" delay={150} />
          <NavItem to="/guests" icon={UsersIcon} label="Guests" delay={200} />
          <NavItem to="/reservations" icon={CalendarIcon} label="Reservations" delay={250} />
          <NavItem to="/settings" icon={SettingsIcon} label="Settings" delay={300} />
        </nav>

        <div className="p-4 border-t border-border/40">
          <TransitionWrapper delay={350} animation="fade">
            <button className="flex items-center gap-3 w-full px-4 py-3 rounded-lg text-foreground/70 hover:bg-accent/10 hover:text-accent-foreground transition-all animate-hover animate-press">
              <LogOutIcon size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </TransitionWrapper>
        </div>
      </aside>
    </>
  );
};
