import Image from "next/image";
import InnerPage from "@/components/InnerPage";
import Link from "next/link";
import { pithiLinks } from "@/lib/nav";
import { pithiImages } from "@/lib/media";

export default function PithiIndexPage() {
  return (
    <InnerPage title="Pithi" eyebrow="Ceremonies">
      <p className="font-khmer">
        ពិធីសប្បាយៗ និងព្រឹត្តិការណ៍វិជ្ជមាននៅកម្ពុជា — រៀបចំដោយភាពថ្លៃថ្នូរ។
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {pithiLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group block overflow-hidden rounded-3xl bg-white text-ink shadow-sm transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={pithiImages[item.href]}
                  alt={item.en ?? item.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="px-6 py-6">
                <span className="font-khmer text-xl">{item.label}</span>
                {item.en ? (
                  <span className="mt-1 block text-sm opacity-70">{item.en}</span>
                ) : null}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
