import type { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "air-freight",
    name: "Air Freight",
    shortDescription:
      "Time-critical cargo moved through a network of scheduled and chartered air routes.",
    description:
      "For shipments where transit time matters more than volume, our air freight service moves cargo through commercial and chartered routes with coordinated customs handling at both ends. We manage booking, documentation and ground transfer so a shipment leaving your facility arrives ready for delivery, not sitting in a bonded warehouse.",
    capabilities: [
      "Scheduled and chartered capacity",
      "Temperature-sensitive and time-critical cargo",
      "Consolidated and direct routings",
      "Airport-to-airport or door-to-door options",
    ],
    idealFor: [
      "Urgent replenishment orders",
      "High-value or perishable goods",
      "Shipments under tight delivery windows",
    ],
  },
  {
    slug: "ocean-freight",
    name: "Ocean Freight",
    shortDescription:
      "Full and part container loads on established international shipping lanes.",
    description:
      "Ocean freight remains the most cost-effective way to move volume across borders. We arrange full container load (FCL) and less-than-container load (LCL) shipments, coordinate with terminal operators, and track vessels through transit so you know where a shipment stands at every leg of the journey.",
    capabilities: [
      "FCL and LCL bookings",
      "Reefer and dry container options",
      "Port-to-port and door-to-door service",
      "Transshipment coordination",
    ],
    idealFor: [
      "Bulk and palletized freight",
      "Non-urgent, cost-sensitive shipments",
      "Recurring supply chain volumes",
    ],
  },
  {
    slug: "road-transportation",
    name: "Road Transportation",
    shortDescription:
      "Domestic and cross-border trucking for first-mile, last-mile and inland transfers.",
    description:
      "Road transportation connects ports, airports and warehouses to the final destination. We coordinate full truckload and less-than-truckload movements, including cross-border transfers, so cargo keeps moving between the legs of an international shipment without unnecessary handling.",
    capabilities: [
      "Full truckload (FTL) and LTL",
      "Cross-border trucking",
      "Port and airport drayage",
      "Scheduled and on-demand pickups",
    ],
    idealFor: [
      "Inland distribution",
      "First- and last-mile delivery",
      "Regional distribution networks",
    ],
  },
  {
    slug: "warehousing",
    name: "Warehousing",
    shortDescription:
      "Short and long-term storage with inventory visibility between transport legs.",
    description:
      "Not every shipment moves in a straight line. Our warehousing service provides secure short- and long-term storage between transport legs, with inventory tracking so stored goods stay visible and accounted for until they're ready to move again.",
    capabilities: [
      "Short and long-term storage",
      "Inventory tracking and reporting",
      "Cross-docking",
      "Pick, pack and consolidation",
    ],
    idealFor: [
      "Seasonal inventory buffers",
      "Distribution hub storage",
      "Consolidation before onward shipping",
    ],
  },
  {
    slug: "customs-clearance",
    name: "Customs & Clearance",
    shortDescription:
      "Documentation and coordination to move cargo through customs without delay.",
    description:
      "Customs delays are one of the most common causes of missed delivery windows. We prepare and coordinate the documentation required at each border crossing, working with local authorities and brokers so shipments clear as predictably as possible.",
    capabilities: [
      "Import and export documentation",
      "Tariff classification support",
      "Coordination with customs brokers",
      "Compliance guidance by shipment type",
    ],
    idealFor: [
      "International shipments crossing multiple borders",
      "Regulated or classified goods",
      "Businesses new to import/export",
    ],
  },
  {
    slug: "door-to-door",
    name: "Door-to-Door Delivery",
    shortDescription:
      "One coordinated service from pickup at origin to delivery at final destination.",
    description:
      "Door-to-door service combines freight, customs coordination, and inland transportation into a single managed shipment. Instead of coordinating separate providers for each leg, you work with one point of contact from pickup to final delivery.",
    capabilities: [
      "Single point of contact end-to-end",
      "Combined freight, customs and inland legs",
      "Delivery scheduling coordination",
      "Suitable for commercial and residential destinations",
    ],
    idealFor: [
      "Businesses without in-house logistics staff",
      "Time-sensitive commercial deliveries",
      "Shipments requiring multiple coordinated legs",
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
