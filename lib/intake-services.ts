export const INTAKE_SERVICES = [
  { value: "condo-rentals", label: "Condo rentals" },
  { value: "commercial-rentals", label: "Commercial space for your business" },
  { value: "property-sales", label: "Property sales" },
  { value: "development", label: "Development" },
  { value: "investor-pool-bulk", label: "Investor groups & bulk condos" },
] as const;

export type IntakeServiceValue = (typeof INTAKE_SERVICES)[number]["value"];
