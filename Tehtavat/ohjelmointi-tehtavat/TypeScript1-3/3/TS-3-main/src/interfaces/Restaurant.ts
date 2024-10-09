import { Point } from './Point';

export interface Restaurant {
  _id: string;
  name: string;
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  company: string;
  location: Point;
}
