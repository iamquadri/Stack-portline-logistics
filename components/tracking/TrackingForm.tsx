"use client";

import { useState, type FormEvent } from "react";
import { Search } from "lucide-react";
import type { ShipmentRecord } from "@/lib/types";
import TrackingTimeline from "./TrackingTimeline";

// Mock data for the frontend demo. Replace with a real tracking API/database lookup.
const MOCK_SHIPMENTS: Record<string, ShipmentRecord> = {
  PL10023845: {
    trackingNumber: "PL10023845",
    origin: "Rotterdam, NL",
    destination: "Newark, US",
    service: "Ocean Freight",
    estimatedDelivery: "Oct 3, 2026",
    currentStatus: "in-transit",
    events: [
      { status: "received", label: "Shipment Received", location: "Rotterdam, NL", timestamp: "Sep 18, 2026 09:12", completed: true },
      { status: "processing", label: "Processing", location: "Rotterdam Terminal", timestamp: "Sep 19, 2026 14:40", completed: true },
      { status: "in-transit", label: "In Transit", location: "Atlantic Crossing", timestamp: "Sep 24, 2026 06:00", completed: true },
      { status: "arrived", label: "Arrived at Destination", location: "Newark, US", timestamp: "Pending", completed: false },
      { status: "out-for-delivery", label: "Out for Delivery", location: "Newark, US", timestamp: "Pending", completed: false },
      { status: "delivered", label: "Delivered", location: "Newark, US", timestamp: "Pending", completed: false },
    ],
  },
  PL10099211: {
    trackingNumber: "PL10099211",
    origin: "Shenzhen, CN",
    destination: "Los Angeles, US",
    service: "Air Freight",
    estimatedDelivery: "Sep 28, 2026",
    currentStatus: "out-for-delivery",
    events: [
      { status: "received", label: "Shipment Received", location: "Shenzhen, CN", timestamp: "Sep 22, 2026 08:00", completed: true },
      { status: "processing", label: "Processing", location: "Shenzhen Air Cargo Terminal", timestamp: "Sep 22, 2026 18:30", completed: true },
      { status: "in-transit", label: "In Transit", location: "In flight to LAX", timestamp: "Sep 24, 2026 02:15", completed: true },
      { status: "arrived", label: "Arrived at Destination", location: "Los Angeles, US", timestamp: "Sep 25, 2026 11:45", completed: true },
      { status: "out-for-delivery", label: "Out for Delivery", location: "Los Angeles, US", timestamp: "Sep 26, 2026 07:30", completed: true },
      { status: "delivered", label: "Delivered", location: "Los Angeles, US", timestamp: "Pending", completed: false },
    ],
  },
};

export default function TrackingForm() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<ShipmentRecord | null>(null);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const query = value.trim().toUpperCase();

    if (!query) {
      setError("Enter a tracking number to continue.");
      setResult(null);
      return;
    }

    const match = MOCK_SHIPMENTS[query];
    if (!match) {
      setError("No shipment found for that tracking number.");
      setResult(null);
      return;
    }

    setError("");
    setResult(match);
  }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 sm:flex-row sm:items-start"
      >
        <div className="flex-1">
          <label htmlFor="tracking" className="sr-only">
            Tracking number
          </label>
          <input
            id="tracking"
            name="tracking"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Enter tracking number, e.g. PL10023845"
            className="w-full rounded-sm border border-[var(--color-border)] bg-white px-4 py-3.5 text-sm text-[var(--color-ink)] outline-none focus:border-[var(--color-blue)]"
          />
          {error && <p className="mt-2 text-xs text-red-600">{error}</p>}
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--color-blue)] px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-blue-dark)]"
        >
          <Search size={16} />
          Track Shipment
        </button>
      </form>

      <p className="mt-3 text-xs text-[var(--color-ink-muted)]">
        Demo tracking numbers: PL10023845, PL10099211
      </p>

      {result && (
        <div className="mt-10">
          <TrackingTimeline shipment={result} />
        </div>
      )}
    </div>
  );
}
