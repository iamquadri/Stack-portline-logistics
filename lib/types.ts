export interface NavItem {
  label: string;
  href: string;
}

export type ServiceSlug =
  | "air-freight"
  | "ocean-freight"
  | "road-transportation"
  | "warehousing"
  | "customs-clearance"
  | "door-to-door";

export interface Service {
  slug: ServiceSlug;
  name: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  idealFor: string[];
}

export type ShipmentStatus =
  | "received"
  | "processing"
  | "in-transit"
  | "arrived"
  | "out-for-delivery"
  | "delivered";

export interface TrackingEvent {
  status: ShipmentStatus;
  label: string;
  location: string;
  timestamp: string;
  completed: boolean;
}

export interface ShipmentRecord {
  trackingNumber: string;
  origin: string;
  destination: string;
  service: string;
  estimatedDelivery: string;
  currentStatus: ShipmentStatus;
  events: TrackingEvent[];
}

export interface QuoteFormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  origin: string;
  destination: string;
  shipmentType: string;
  cargoDescription: string;
  approximateWeight: string;
  preferredMethod: string;
  additionalInfo: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}
