import InnerPage from "@/components/InnerPage";
import Link from "next/link";

const groups = [
  {
    id: "wedding",
    title: "Wedding Packages",
    items: [
      { name: "Basic", price: "$299" },
      { name: "Standard", price: "$599" },
      { name: "Premium", price: "$999+" },
    ],
  },
  {
    id: "engagement",
    title: "Engagement Packages",
    items: [
      { name: "Intimate", price: "$249" },
      { name: "Full day", price: "$499" },
    ],
  },
  {
    id: "birthday",
    title: "Birthday Packages",
    items: [
      { name: "Simple", price: "$199" },
      { name: "Celebration", price: "$399" },
    ],
  },
  {
    id: "custom",
    title: "Custom Package",
    items: [{ name: "Built for you", price: "Quote" }],
  },
];

export default function PackagesPage() {
  return (
    <InnerPage title="Packages" eyebrow="Pricing">
      <p>
        Clear packages by ceremony type — or a custom plan shaped around your
        guest count, venue and rituals.
      </p>
      <div className="mt-12 space-y-14">
        {groups.map((group) => (
          <section key={group.id} id={group.id}>
            <h2 className="font-serif text-3xl italic text-ink">{group.title}</h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="rounded-3xl bg-white px-6 py-8 text-center shadow-sm"
                >
                  <p className="text-lg text-ink">{item.name}</p>
                  <p className="mt-3 font-serif text-4xl italic text-brand-dark">
                    {item.price}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <Link
        href="/plan"
        className="mt-12 inline-flex rounded-full bg-ink px-6 py-3 text-white transition-colors hover:bg-brand hover:text-ink"
      >
        Plan Your Event
      </Link>
    </InnerPage>
  );
}
