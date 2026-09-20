import Image from "next/image";
import InnerPage from "@/components/InnerPage";
import { blogPosts } from "@/lib/media";

export default function BlogPage() {
  return (
    <InnerPage title="Blog" eyebrow="Stories">
      <ul className="space-y-6">
        {blogPosts.map((post) => (
          <li
            key={post.title}
            className="overflow-hidden rounded-3xl bg-white shadow-sm"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
            <p className="px-6 py-5 font-serif text-2xl italic text-ink">
              {post.title}
            </p>
          </li>
        ))}
      </ul>
    </InnerPage>
  );
}
