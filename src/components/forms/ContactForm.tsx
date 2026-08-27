"use client";

import { FormEvent, useRef, useState } from "react";
import { ArrowUpRight, CheckCircle2, Loader2 } from "lucide-react";

const services = [
  "Web Development",
  "Web Applications",
  "Custom Software",
  "E-Commerce",
  "UI / UX Design",
  "Digital Solutions",
];

const budgets = [
  "Under $500",
  "$500 – $1,000",
  "$1,000 – $2,500",
  "$2,500 – $5,000",
  "$5,000+",
  "Not sure yet",
];

export default function ContactForm() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const startedAtRef = useRef(Date.now());

  const toggleService = (service: string) => {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setError("");
    setSuccess(false);

    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      budget: formData.get("budget"),
      timeline: formData.get("timeline"),
      message: formData.get("message"),
      services: selectedServices,
      // Spam protection
      website: formData.get("website"),
      startedAt: startedAtRef.current,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Something went wrong.");
      }

      form.reset();

      setSelectedServices([]);
      startedAtRef.current = Date.now();
      setError("");
      setSuccess(true);
    } catch (error) {
      console.error("Contact form error:", error);

      setSuccess(false);
      setError("We couldn't send your inquiry right now. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Honeypot - real users should never fill this */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-9999px] top-auto h-[1px] w-[1px] overflow-hidden"
      >
        <label htmlFor="website">Website</label>

        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ff1e1e]">
          Project Inquiry
        </p>

        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">
          Tell us about your project.
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <InputField
          label="Your Name"
          name="name"
          placeholder="John Smith"
          required
        />

        <InputField
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@company.com"
          required
        />

        <InputField
          label="Company / Business"
          name="company"
          placeholder="Your company"
        />

        <InputField label="Phone" name="phone" placeholder="+94..." />
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-[0.16em] text-white/35">
          What do you need?
        </label>

        <div className="mt-4 flex flex-wrap gap-2">
          {services.map((service) => {
            const selected = selectedServices.includes(service);

            return (
              <button
                type="button"
                key={service}
                onClick={() => toggleService(service)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 ${
                  selected
                    ? "border-[#ff1e1e] bg-[#ff1e1e] text-white"
                    : "border-white/[0.1] bg-white/[0.025] text-white/45 hover:border-[#ff1e1e]/50 hover:text-white"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <SelectField label="Estimated Budget" name="budget" options={budgets} />

        <InputField
          label="Timeline"
          name="timeline"
          placeholder="e.g. 1–2 months"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-xs font-medium uppercase tracking-[0.16em] text-white/35"
        >
          Tell us about your idea
        </label>

        <textarea
          id="message"
          name="message"
          required
          rows={7}
          placeholder="What are you looking to build? What problem are you trying to solve?"
          className="mt-3 w-full resize-none rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-4 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#ff1e1e]/60 focus:bg-[#ff1e1e]/[0.025]"
        />
      </div>

      {error && <p className="text-sm text-red-400">{error}</p>}

      {success && (
        <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/[0.05] px-4 py-3 text-sm text-green-400">
          <CheckCircle2 size={18} />
          Your inquiry has been sent successfully.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="group flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#ff1e1e] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#e31717] hover:shadow-[0_0_35px_rgba(255,30,30,0.30)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={17} className="animate-spin" />
            Sending...
          </>
        ) : (
          <>
            Send Project Inquiry
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </>
        )}
      </button>
    </form>
  );
}

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
};

function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
}: InputFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.16em] text-white/35"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-white/[0.09] bg-white/[0.025] px-4 py-3.5 text-sm text-white outline-none transition-all placeholder:text-white/20 focus:border-[#ff1e1e]/60 focus:bg-[#ff1e1e]/[0.025]"
      />
    </div>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  options: string[];
};

function SelectField({ label, name, options }: SelectFieldProps) {
  return (
    <div>
      <label
        htmlFor={name}
        className="text-xs font-medium uppercase tracking-[0.16em] text-white/35"
      >
        {label}
      </label>

      <select
        id={name}
        name={name}
        defaultValue=""
        className="mt-3 w-full rounded-2xl border border-white/[0.09] bg-[#151515] px-4 py-3.5 text-sm text-white/70 outline-none transition-all focus:border-[#ff1e1e]/60"
      >
        <option value="" disabled>
          Select budget
        </option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
