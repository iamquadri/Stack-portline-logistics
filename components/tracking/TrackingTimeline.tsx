import { CheckCircle2, Circle } from "lucide-react";
import type { ShipmentRecord } from "@/lib/types";

const statusLabels: Record<string, string> = {
  received: "Shipment Received",
  processing: "Processing",
  "in-transit": "In Transit",
  arrived: "Arrived at Destination",
  "out-for-delivery": "Out for Delivery",
  delivered: "Delivered",
};

export default function TrackingTimeline({
  shipment,
}: {
  shipment: ShipmentRecord;
}) {
  return (
    <div className="rounded-sm border border-[var(--color-border)] bg-white p-6 md:p-8">
      <div className="flex flex-col justify-between gap-6 border-b border-[var(--color-border)] pb-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-mono text-xs text-[var(--color-ink-muted)]">
            TRACKING NUMBER
          </p>
          <p className="mt-1 font-mono text-lg font-medium text-[var(--color-ink)]">
            {shipment.trackingNumber}
          </p>
        </div>
        <div className="flex gap-8">
          <div>
            <p className="text-xs text-[var(--color-ink-muted)]">Route</p>
            <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">
              {shipment.origin} &rarr; {shipment.destination}
            </p>
          </div>
          <div>
            <p className="text-xs text-[var(--color-ink-muted)]">
              Est. Delivery
            </p>
            <p className="mt-1 text-sm font-medium text-[var(--color-ink)]">
              {shipment.estimatedDelivery}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-6">
        {shipment.events.map((event, index) => (
          <div key={event.status} className="flex gap-4">
            <div className="flex flex-col items-center">
              {event.completed ? (
                <CheckCircle2 size={20} className="text-[var(--color-blue)]" />
              ) : (
                <Circle size={20} className="text-[var(--color-border)]" />
              )}
              {index < shipment.events.length - 1 && (
                <div
                  className={`mt-1 w-px flex-1 ${
                    event.completed ? "bg-[var(--color-blue)]" : "bg-[var(--color-border)]"
                  }`}
                />
              )}
            </div>
            <div className="pb-6">
              <p
                className={`text-sm font-medium ${
                  event.completed ? "text-[var(--color-ink)]" : "text-[var(--color-ink-muted)]"
                }`}
              >
                {statusLabels[event.status]}
              </p>
              <p className="mt-1 text-sm text-[var(--color-ink-muted)]">
                {event.location} &middot; {event.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
