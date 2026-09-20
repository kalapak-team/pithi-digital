import type { ReactNode } from "react";
import HeroVideo from "@/components/HeroVideo";

type InnerPageProps = {
  title: string;
  eyebrow?: string;
  children?: ReactNode;
};

export default function InnerPage({
  title,
  eyebrow = "Pithi",
  children,
}: InnerPageProps) {
  return (
    <main className="min-h-screen bg-page">
      <section className="relative overflow-hidden bg-ink">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-[100rem] items-end px-5 pb-16 pt-36 sm:px-10 lg:px-16">
          <div>
            <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand">
              {eyebrow}
            </p>
            <h1 className="max-w-3xl font-serif text-5xl italic leading-[1.11] text-white md:text-6xl">
              {title}
            </h1>
          </div>
        </div>
      </section>
      {children ? (
        <section className="mx-auto max-w-3xl px-5 py-16 sm:px-10">
          <div className="text-lg leading-8 text-body">{children}</div>
        </section>
      ) : null}
    </main>
  );
}
