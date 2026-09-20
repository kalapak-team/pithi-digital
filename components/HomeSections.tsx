"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { packageLinks, pithiLinks, servicesLinks } from "@/lib/nav";
import {
  blogPosts,
  pithiImages,
  serviceImages,
  testimonials,
} from "@/lib/media";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import CardSwap from "@/components/react-bits/CardSwap";
import CountUp from "@/components/react-bits/CountUp";
import FadeContent from "@/components/react-bits/FadeContent";
import FlipCard from "@/components/react-bits/FlipCard";
import GlareHover from "@/components/react-bits/GlareHover";
import Magnet from "@/components/react-bits/Magnet";
import ScrollReveal from "@/components/react-bits/ScrollReveal";
import ShinyText from "@/components/react-bits/ShinyText";
import SplitText from "@/components/react-bits/SplitText";
import { Marquee } from "@/components/magicui/Marquee";
import GalleryCarousel from "@/components/GalleryCarousel";
import PlatformSection from "@/components/PlatformSection";

const marqueeTags = [
  "Wedding",
  "Engagement",
  "Ceremony",
  "Birthday",
  "Decoration",
  "Photography",
  "Makeup",
  "Catering",
  "Venue",
  "Phnom Penh",
];

function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand-dark">
      {children}
    </p>
  );
}

export default function HomeSections() {
  return (
    <>
      <section className="bg-page px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <FadeContent blur duration={800}>
            <SectionEyebrow>Pithi</SectionEyebrow>
            <SplitText
              text="Ceremonies we plan with care"
              tag="h2"
              splitType="words"
              delay={60}
              duration={0.65}
              textAlign="left"
              className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
            />
          </FadeContent>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {pithiLinks.map((item, i) => (
              <AnimatedContent
                key={item.href}
                distance={50}
                delay={0.08 * i}
                duration={0.7}
              >
                <Link
                  href={item.href}
                  className="group block overflow-hidden rounded-[1.5rem] bg-white transition-transform hover:-translate-y-1"
                >
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={pithiImages[item.href]}
                      alt={item.en ?? item.label}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/10 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <p className="font-khmer text-2xl text-white">{item.label}</p>
                      <p className="mt-1 text-sm text-white/75">{item.en}</p>
                    </div>
                  </div>
                </Link>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-white py-4">
        <Marquee pauseOnHover className="[--duration:32s] [--gap:2.5rem]">
          {marqueeTags.map((tag) => (
            <span
              key={tag}
              className="font-serif text-2xl italic text-ink/80 sm:text-3xl"
            >
              {tag}
              <span className="mx-4 text-brand-dark">·</span>
            </span>
          ))}
        </Marquee>
      </div>

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <FadeContent duration={800}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>Services</SectionEyebrow>
                <SplitText
                  text="Everything your day needs"
                  tag="h2"
                  splitType="words"
                  delay={50}
                  duration={0.65}
                  textAlign="left"
                  className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
                />
                <p className="mt-3 text-sm text-body">Hover a card to flip details</p>
              </div>
              <Link
                href="/services"
                className="text-sm font-medium text-brand-dark underline-offset-4 hover:underline"
              >
                View all services
              </Link>
            </div>
          </FadeContent>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {servicesLinks.map((item, i) => (
              <AnimatedContent
                key={item.href}
                distance={40}
                delay={0.06 * i}
                direction="vertical"
              >
                <div className="h-[17rem]">
                  <FlipCard
                    className="h-full"
                    front={
                      <div className="flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-page">
                        <div className="relative aspect-[4/3] flex-1 overflow-hidden">
                          <Image
                            src={serviceImages[item.href]}
                            alt={item.label}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 50vw, 20vw"
                          />
                        </div>
                        <p className="px-5 py-5 text-lg text-ink">{item.label}</p>
                      </div>
                    }
                    back={
                      <div className="flex h-full flex-col justify-between rounded-[1.5rem] border border-brand bg-ink p-5 text-white">
                        <div>
                          <p className="font-serif text-2xl italic">{item.label}</p>
                          <p className="mt-3 text-sm leading-relaxed text-white/75">
                            Coordinated styling, timing and vendor care for your{" "}
                            {item.label.toLowerCase()} moment.
                          </p>
                        </div>
                        <Link
                          href={item.href}
                          className="mt-4 inline-flex rounded-full bg-brand px-4 py-2 text-sm text-ink"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Explore
                        </Link>
                      </div>
                    }
                  />
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <FadeContent blur duration={800}>
            <SectionEyebrow>Packages</SectionEyebrow>
            <SplitText
              text="Popular packages"
              tag="h2"
              splitType="words"
              delay={60}
              duration={0.65}
              textAlign="left"
              className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
            />
          </FadeContent>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                name: "Basic",
                price: 299,
                image: "/images/pithi-engagement.png",
                includes: ["Planning consult", "Decoration accents", "Day-of support"],
              },
              {
                name: "Standard",
                price: 599,
                image: "/images/pithi-wedding.png",
                includes: [
                  "Full planning",
                  "Decoration + flowers",
                  "Photography half-day",
                ],
              },
              {
                name: "Premium",
                price: 999,
                image: "/images/service-venue.png",
                includes: [
                  "Full coordination",
                  "Decoration + venue styling",
                  "Photo + video",
                ],
              },
            ].map((pkg, i) => (
              <AnimatedContent key={pkg.name} distance={60} delay={0.1 * i}>
                <GlareHover
                  width="100%"
                  height="auto"
                  background="#ffffff"
                  borderRadius="1.5rem"
                  borderColor="transparent"
                  glareColor="#FFD700"
                  glareOpacity={0.35}
                  glareSize={220}
                  className="!border-0 overflow-hidden shadow-sm"
                  style={{ minHeight: "100%" }}
                >
                  <div className="relative z-[1] w-full overflow-hidden text-left">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="px-7 py-8">
                      <p className="text-lg text-ink">
                        {pkg.name === "Premium" ? (
                          <ShinyText
                            text="Premium"
                            color="#1a1608"
                            shineColor="#FFD700"
                            speed={2.5}
                          />
                        ) : (
                          pkg.name
                        )}
                      </p>
                      <p className="mt-3 font-serif text-4xl italic text-brand-dark">
                        $
                        <CountUp to={pkg.price} duration={1.6} className="inline" />
                        {pkg.name === "Premium" ? "+" : ""}
                      </p>
                      <ul className="mt-6 space-y-2 text-sm text-body">
                        {pkg.includes.map((line) => (
                          <li key={line}>· {line}</li>
                        ))}
                      </ul>
                      <Link
                        href="/packages"
                        className="mt-8 inline-flex rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-colors hover:bg-brand hover:text-ink"
                      >
                        View packages
                      </Link>
                    </div>
                  </div>
                </GlareHover>
              </AnimatedContent>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {packageLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink hover:border-brand"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-deep px-5 py-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand">
            Why Choose Us
          </p>
          <ScrollReveal
            baseOpacity={0.15}
            enableBlur
            baseRotation={2}
            blurStrength={5}
            containerClassName="max-w-2xl"
            textClassName="font-serif text-4xl leading-[1.15] md:text-5xl"
          >
            Built for Cambodian celebrations
          </ScrollReveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Khmer-aware planning",
                text: "We respect ritual timing, family roles and the pace of a real ceremony day.",
              },
              {
                title: "One calm team",
                text: "Decoration, photo, venue and catering — coordinated so you are not the messenger.",
              },
              {
                title: "Honest packages",
                text: "Clear inclusions and room to customise. No surprise fees on the day.",
              },
            ].map((item, i) => (
              <AnimatedContent key={item.title} distance={40} delay={0.12 * i}>
                <h3 className="font-serif text-2xl italic">{item.title}</h3>
                <p className="mt-3 text-white/75">{item.text}</p>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-page px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <FadeContent duration={800}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>Gallery</SectionEyebrow>
                <SplitText
                  text="Moments from real pithi"
                  tag="h2"
                  splitType="words"
                  delay={50}
                  duration={0.65}
                  textAlign="left"
                  className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
                />
              </div>
              <Link
                href="/gallery"
                className="text-sm font-medium text-brand-dark underline-offset-4 hover:underline"
              >
                Open gallery
              </Link>
            </div>
          </FadeContent>
          <FadeContent delay={150} duration={900}>
            <GalleryCarousel />
          </FadeContent>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
            <FadeContent blur duration={800}>
              <SectionEyebrow>Testimonials</SectionEyebrow>
              <SplitText
                text="Families who trusted Pithi"
                tag="h2"
                splitType="words"
                delay={50}
                duration={0.65}
                textAlign="left"
                className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
              />
              <p className="mt-5 max-w-md text-body">
                Real ceremonies, calm coordination — stories that stack as each
                celebration finishes.
              </p>
            </FadeContent>
            <FadeContent delay={120} duration={900}>
              <CardSwap
                items={testimonials.map((item) => ({
                  title: item.name,
                  text: item.quote,
                  image: item.image,
                }))}
              />
            </FadeContent>
          </div>
        </div>
      </section>

      <section className="bg-page px-5 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-[100rem]">
          <FadeContent duration={800}>
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <SectionEyebrow>Blog</SectionEyebrow>
                <SplitText
                  text="Ideas and guides"
                  tag="h2"
                  splitType="words"
                  delay={50}
                  duration={0.65}
                  textAlign="left"
                  className="max-w-2xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
                />
              </div>
              <Link
                href="/blog"
                className="text-sm font-medium text-brand-dark underline-offset-4 hover:underline"
              >
                View all blogs
              </Link>
            </div>
          </FadeContent>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {blogPosts.map((post, i) => (
              <AnimatedContent key={post.title} distance={45} delay={0.08 * i}>
                <Link
                  href="/blog"
                  className="group block overflow-hidden rounded-[1.5rem] bg-white text-ink transition-colors hover:bg-brand"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <p className="px-6 py-6 font-serif text-2xl leading-snug italic">
                    {post.title}
                  </p>
                </Link>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <PlatformSection />

      <section className="bg-ink px-5 py-20 text-white sm:px-10 lg:px-16">
        <FadeContent blur duration={900}>
          <div className="mx-auto flex max-w-[100rem] flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand">
                Book now
              </p>
              <h2 className="max-w-2xl font-serif text-4xl leading-[1.15] md:text-5xl">
                Ready to plan your{" "}
                <span className="whitespace-nowrap">
                  <ShinyText
                    text="next ceremony"
                    color="#ffffff"
                    shineColor="#FFD700"
                    speed={2.2}
                    className="italic pr-[0.12em]"
                  />
                  ?
                </span>
              </h2>
            </div>
            <div className="flex flex-wrap gap-3">
              <Magnet>
                <Link
                  href="/plan"
                  className="inline-flex rounded-full bg-brand px-8 py-3 text-ink transition-colors hover:bg-white"
                >
                  Plan Your Event
                </Link>
              </Magnet>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 px-8 py-3 text-white transition-colors hover:bg-white/10"
              >
                Contact
              </Link>
            </div>
          </div>
        </FadeContent>
      </section>

      <footer className="border-t border-line bg-page px-5 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-[100rem] flex-col justify-between gap-8 md:flex-row">
          <div>
            <p className="font-serif text-3xl italic text-ink">Pithi</p>
            <p className="mt-3 max-w-sm text-sm text-body">
              Cambodian ceremonies — weddings, engagements, birthdays and joyful
              gatherings — planned with warmth.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div className="flex flex-col gap-2">
              <p className="font-medium text-ink">Explore</p>
              <Link href="/pithi">Pithi</Link>
              <Link href="/services">Services</Link>
              <Link href="/packages">Packages</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/#platform">Platform</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-ink">Company</p>
              <Link href="/about">About</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/plan">Plan Your Event</Link>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium text-ink">Contact</p>
              <span>Phnom Penh</span>
              <span>+855 12 000 000</span>
              <span>hello@pithi.digital</span>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[100rem] text-xs text-body/60">
          © {new Date().getFullYear()} Pithi. All rights reserved.
        </p>
      </footer>
    </>
  );
}
