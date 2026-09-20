import Image from "next/image";
import InnerPage from "@/components/InnerPage";
import Link from "next/link";
import { servicesLinks } from "@/lib/nav";
import { serviceImages } from "@/lib/media";

export default function ServicesPage() {
  return (
    <InnerPage title="Services" eyebrow="What we offer">
      <p>
        Decoration, photography, makeup, catering and venue — one coordinated
        team for each part of your ceremony day.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {servicesLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block overflow-hidden rounded-3xl bg-white text-ink shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={serviceImages[item.href]}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <p className="px-6 py-6 text-lg">{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
