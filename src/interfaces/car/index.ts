import { BookingInterface } from 'interfaces/booking';
import { LocationInterface } from 'interfaces/location';
import { OperationInterface } from 'interfaces/operation';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface CarInterface {
  id?: string;
  make: string;
  model: string;
  year: number;
  color: string;
  license_plate: string;
  company_id: string;
  created_at?: any;
  updated_at?: any;
  booking?: BookingInterface[];
  location?: LocationInterface[];
  operation?: OperationInterface[];
  company?: CompanyInterface;
  _count?: {
    booking?: number;
    location?: number;
    operation?: number;
  };
}

export interface CarGetQueryInterface extends GetQueryInterface {
  id?: string;
  make?: string;
  model?: string;
  color?: string;
  license_plate?: string;
  company_id?: string;
}
