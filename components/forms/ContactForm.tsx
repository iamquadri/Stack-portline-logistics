"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2 } from "lucide-react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import type { ContactFormData } from "@/lib/types";

type Errors = Partial<Record<keyof ContactFormData, string>>;

const initialData: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update<K extends keyof ContactFormData>(key: K, value: string) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): Errors {
    const next: Errors = {};
    if (!data.fullName.trim()) next.fullName = "Full name is required.";
    if (!data.email.trim()) {
      next.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      next.email = "Enter a valid email address.";
    }
    if (!data.message.trim()) next.message = "Enter a message.";
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    // TODO: connect to a route handler or email service.
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-sm border border-[var(--color-border)] bg-[var(--color-blue-tint)] p-8">
        <CheckCircle2 size={28} className="text-[var(--color-blue)]" />
        <div>
          <h3 className="text-lg font-semibold text-[var(--color-ink)]">
            Message sent
          </h3>
          <p className="mt-2 max-w-md text-sm text-[var(--color-ink-muted)]">
            We'll get back to you at {data.email} shortly.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <Input
        label="Full Name"
        name="fullName"
        value={data.fullName}
        onChange={(e) => update("fullName", e.target.value)}
        error={errors.fullName}
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
        optional
        value={data.phone}
        onChange={(e) => update("phone", e.target.value)}
      />
      <Textarea
        label="Message"
        name="message"
        value={data.message}
        onChange={(e) => update("message", e.target.value)}
        error={errors.message}
      />
      <div>
        <Button type="submit">Send Message</Button>
      </div>
    </form>
  );
}
