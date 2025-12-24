
export enum ViewType {
  DASHBOARD = 'DASHBOARD',
  CALENDAR = 'CALENDAR',
  INVENTORY = 'INVENTORY',
  CHANNELS = 'CHANNELS',
  ANALYTICS = 'ANALYTICS'
}

export interface Booking {
  id: string;
  guestName: string;
  roomType: string;
  checkIn: string;
  checkOut: string;
  status: 'confirmed' | 'checked-in' | 'checked-out' | 'cancelled';
  source: 'direct' | 'ota' | 'walk-in';
  totalPrice: number;
}

export interface RoomType {
  id: string;
  name: string;
  totalRooms: number;
  baseRate: number;
}

export interface Channel {
  id: string;
  name: string;
  status: 'live' | 'syncing' | 'error';
  lastSync: string;
  logo: string;
}

export interface InventoryDate {
  date: string;
  available: number;
  sold: number;
  rate: number;
}
