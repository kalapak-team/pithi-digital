import Image from "next/image";
import InnerPage from "@/components/InnerPage";
import { galleryAlbums } from "@/lib/media";

const filters = [
  "All",
  "Wedding",
  "Engagement",
  "Ceremony",
  "Birthday",
  "Decoration",
  "Photography",
];

export default function GalleryPage() {
  return (
    <InnerPage title="Gallery" eyebrow="Our work">
      <p className="font-khmer">
        រូបភាពពីពិធីដែលយើងបានរៀបចំ — សម្រាប់ឲ្យអ្នកមើលឃើញអារម្មណ៍នៃថ្ងៃពិត។
      </p>
      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((filter) => (
          <span
            key={filter}
            className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink"
          >
            {filter}
          </span>
        ))}
      </div>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {galleryAlbums.map((album) => (
          <li
            key={album.label}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={album.src}
                alt={album.label}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <p className="px-6 py-5 text-ink">{album.label}</p>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
