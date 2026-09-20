"use client";

import { useState } from "react";

const fieldClass =
  "w-full rounded-full border border-line bg-white px-5 py-3 text-base text-ink outline-none placeholder:text-body/50 focus:border-brand";

export default function PlanEventForm() {
  const [submitted, setSubmitted] = useState(false);

  return submitted ? (
    <p className="mt-10 rounded-3xl bg-white px-6 py-8 text-lg leading-8 text-body">
      សូមអរគុណ។ យើងនឹងទាក់ទងត្រឡប់ក្នុងរយៈពេលមួយថ្ងៃធ្វើការ — thank you. We will
      come back to you within one business day.
    </p>
  ) : (
    <form
      className="mt-10 flex max-w-xl flex-col gap-5"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="flex flex-col gap-2 text-sm text-ink">
        Event Type
        <select name="eventType" className={fieldClass} defaultValue="Wedding">
          <option>Wedding</option>
          <option>Engagement</option>
          <option>Birthday</option>
          <option>Party</option>
          <option>Ceremony</option>
          <option>Other Events</option>
        </select>
      </label>

      <label className="flex flex-col gap-2 text-sm text-ink">
        Event Date
        <input type="date" name="eventDate" className={fieldClass} required />
      </label>

      <label className="flex flex-col gap-2 text-sm text-ink">
        Number of Guests
        <input
          type="number"
          name="guests"
          min={1}
          placeholder="200"
          className={fieldClass}
        />
      </label>

      <label className="flex flex-col gap-2 text-sm text-ink">
        Location
        <select name="location" className={fieldClass} defaultValue="Phnom Penh">
          <option>Phnom Penh</option>
          <option>Siem Reap</option>
          <option>Battambang</option>
          <option>Sihanoukville</option>
          <option>Kampot</option>
          <option>Other</option>
        </select>
      </label>

      <fieldset className="flex flex-col gap-3 text-sm text-ink">
        <legend>Services Needed</legend>
        {[
          "Decoration",
          "Photography",
          "Makeup",
          "Catering",
          "Venue",
        ].map((service) => (
          <label key={service} className="flex items-center gap-3 text-base">
            <input type="checkbox" name="services" value={service} className="size-4 accent-brand" />
            {service}
          </label>
        ))}
      </fieldset>

      <label className="flex flex-col gap-2 text-sm text-ink">
        Budget
        <select name="budget" className={fieldClass} defaultValue="$500 - $1,000">
          <option>Under $500</option>
          <option>$500 - $1,000</option>
          <option>$1,000 - $3,000</option>
          <option>$3,000 - $8,000</option>
          <option>$8,000+</option>
        </select>
      </label>

      <button
        type="submit"
        className="mt-2 rounded-full bg-ink px-6 py-3 text-base text-white transition-colors hover:bg-brand hover:text-ink"
      >
        Submit Request
      </button>
    </form>
  );
}
