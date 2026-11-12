"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import type { QuoteFormData } from "@/lib/types";

const shipmentTypes = [
  { label: "Air Freight", value: "air-freight" },
  { label: "Ocean Freight", value: "ocean-freight" },
  { label: "Road Transportation", value: "road-transportation" },
  { label: "Not sure yet", value: "unsure" },
];

const preferredMethods = [
  { label: "Fastest available", value: "fastest" },
  { label: "Most cost-effective", value: "cost-effective" },
  { label: "No preference", value: "no-preference" },
];

type Errors = Partial<Record<keyof QuoteFormData, string>>;

const initialData: QuoteFormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  origin: "",
  destination: "",
  shipmentType: "",
  cargoDescription: "",
  approximateWeight: "",
  preferredMethod: "",
  additionalInfo: "",
};

export default function QuoteForm() {
  const [data, setData] = useState<QuoteFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof QuoteFormData>(key: K, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.companyName.trim()) next.companyName = "Company name is required.";
    if (!data.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!data.phone.trim()) next.phone = "Phone number is required.";
    if (!data.origin.trim()) next.origin = "Origin is required.";
    if (!data.destination.trim()) next.destination = "Destination is required.";
    if (!data.shipmentType) next.shipmentType = "Select a shipment type.";
    if (!data.cargoDescription.trim())
      next.cargoDescription = "Describe the cargo being shipped.";
    if (!data.approximateWeight.trim())
      next.approximateWeight = "Approximate weight is required.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // TODO: connect to a route handler, email service, or CRM.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-blue-tint)] p-8">
        <CheckCircle2 size={28} className="text-[var(--color-blue)]" />
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">
            Quote request received
          </h3>
          <p className="mt-2 max-w-md text-sm text-[var(--color-ink-muted)]">
            A member of our team will review the details and follow up at{" "}
            {data.email}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Input
          label="Full Name"
          name="fullName"
          value={data.fullName}
          onChange={(e) => update("fullName", e.target.value)}
          error={errors.fullName}
        />
        <Input
          label="Company Name"
          name="companyName"
          value={data.companyName}
          onChange={(e) => update("companyName", e.target.value)}
          error={errors.companyName}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={data.email}
          onChange={(e) => update("email", e.target.value)}
          error={errors.email}
        />
        <Input
          label="Phone Number"
          type="tel"
          name="phone"
          value={data.phone}
          onChange={(e) => update("phone", e.target.value)}
          error={errors.phone}
        />
        <Input
          label="Origin"
          name="origin"
          placeholder="City, country"
          value={data.origin}
          onChange={(e) => update("origin", e.target.value)}
          error={errors.origin}
        />
        <Input
          label="Destination"
          name="destination"
          placeholder="City, country"
          value={data.destination}
          onChange={(e) => update("destination", e.target.value)}
          error={errors.destination}
        />
        <Select
          label="Shipment Type"
          name="shipmentType"
          options={shipmentTypes}
          placeholder="Select shipment type"
          value={data.shipmentType}
          onChange={(e) => update("shipmentType", e.target.value)}
          error={errors.shipmentType}
        />
        <Input
          label="Approximate Weight"
          name="approximateWeight"
          placeholder="e.g. 400 kg"
          value={data.approximateWeight}
          onChange={(e) => update("approximateWeight", e.target.value)}
          error={errors.approximateWeight}
        />
        <Select
          label="Preferred Shipping Method"
          name="preferredMethod"
          options={preferredMethods}
          placeholder="Select a preference"
          optional
          value={data.preferredMethod}
          onChange={(e) => update("preferredMethod", e.target.value)}
        />
      </div>

      <Textarea
        label="Cargo Description"
        name="cargoDescription"
        placeholder="What are you shipping?"
        value={data.cargoDescription}
        onChange={(e) => update("cargoDescription", e.target.value)}
        error={errors.cargoDescription}
      />

      <Textarea
        label="Additional Information"
        name="additionalInfo"
        optional
        placeholder="Delivery windows, special handling, or anything else we should know"
        value={data.additionalInfo}
        onChange={(e) => update("additionalInfo", e.target.value)}
      />

      <div>
        <Button type="submit">Request a Quote</Button>
      </div>
    </form>
  );
}
