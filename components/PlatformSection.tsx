"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "@/components/react-bits/AnimatedContent";
import FadeContent from "@/components/react-bits/FadeContent";
import SplitText from "@/components/react-bits/SplitText";
import MacbookFrame from "@/components/MacbookFrame";
import PhoneFrame from "@/components/PhoneFrame";
import StackCards from "@/components/StackCards";

const platforms = [
  {
    title: "Website",
    text: "Book and browse on any browser — desktop or laptop.",
  },
  {
    title: "Phone",
    text: "Responsive mobile web for planning on the go.",
  },
  {
    title: "Mobile App",
    text: "Native-ready experience for guests, vendors and hosts.",
  },
];

const desktopSlides = [
  {
    src: "/images/platform-dashboard.png",
    alt: "Pithi admin dashboard",
    label: "Dashboard",
  },
  {
    src: "/images/platform-bookings.png",
    alt: "Pithi bookings management",
    label: "Bookings",
  },
  {
    src: "/images/platform-calendar.png",
    alt: "Pithi ceremony calendar",
    label: "Calendar",
  },
  {
    src: "/images/platform-vendors.png",
    alt: "Pithi vendor management",
    label: "Vendors",
  },
];

const mobileSlides = [
  {
    src: "/images/platform-mobile.png",
    alt: "Pithi mobile home",
    label: "Guest & planner home",
  },
  {
    src: "/images/platform-mobile-bookings.png",
    alt: "Pithi mobile bookings",
    label: "My bookings",
  },
  {
    src: "/images/platform-mobile-event.png",
    alt: "Pithi event detail",
    label: "Event details",
  },
  {
    src: "/images/platform-mobile-gallery.png",
    alt: "Pithi inspiration gallery",
    label: "Gallery & memories",
  },
];

const stackScreens = [
  {
    title: "Dashboard",
    text: "Revenue, bookings and today’s ceremony pulse in one view.",
    image: "/images/platform-dashboard.png",
  },
  {
    title: "Bookings",
    text: "Track guest counts, deposits and day-of timelines.",
    image: "/images/platform-bookings.png",
  },
  {
    title: "Calendar",
    text: "See every wedding, engagement and birthday on one schedule.",
    image: "/images/platform-calendar.png",
  },
  {
    title: "Vendors",
    text: "Assign decoration, photo, makeup, catering and venue teams.",
    image: "/images/platform-vendors.png",
  },
];

const featureCards = [
  {
    title: "Dashboard",
    text: "Track bookings, guests, payments and ceremony timelines in one place.",
    image: "/images/platform-dashboard.png",
  },
  {
    title: "Event management",
    text: "Wedding, engagement, ceremony and birthday workflows with clear statuses.",
    image: "/images/platform-bookings.png",
  },
  {
    title: "Vendor & services",
    text: "Decoration, photo, makeup, catering and venue — assigned and scheduled.",
    image: "/images/platform-vendors.png",
  },
  {
    title: "Packages & quotes",
    text: "Send packages, custom quotes and collect deposits faster.",
    image: "/images/platform-calendar.png",
  },
  {
    title: "Gallery & content",
    text: "Showcase past pithi, blogs and offers that convert visitors.",
    image: "/images/platform-mobile-gallery.png",
  },
  {
    title: "Team access",
    text: "Roles for owners, planners and staff — secure and simple.",
    image: "/images/platform-mobile.png",
  },
];

export default function PlatformSection() {
  return (
    <section
      id="platform"
      className="overflow-hidden bg-white px-5 py-20 sm:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-[100rem]">
        <FadeContent blur duration={800}>
          <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand-dark">
            Platform
          </p>
          <SplitText
            text="One Pithi system — web, phone and app"
            tag="h2"
            splitType="words"
            delay={50}
            duration={0.65}
            textAlign="left"
            className="max-w-3xl font-serif text-4xl leading-[1.15] text-ink md:text-5xl"
          />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-body md:text-lg">
            Manage ceremonies, clients and vendors everywhere. Your public website,
            mobile experience and admin dashboard stay connected — so planning stays
            calm from first inquiry to the final thank-you.
          </p>
        </FadeContent>

        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          {platforms.map((item, i) => (
            <AnimatedContent key={item.title} distance={30} delay={0.08 * i}>
              <div className="rounded-[1.25rem] border border-line bg-page px-5 py-6">
                <p className="font-serif text-2xl italic text-ink">{item.title}</p>
                <p className="mt-2 text-sm text-body">{item.text}</p>
              </div>
            </AnimatedContent>
          ))}
        </div>

        {/* Devices: phone above MacBook, no overlap */}
        <div className="relative mt-14">
          <AnimatedContent distance={50} delay={0.1}>
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 px-1 sm:px-4">
              <PhoneFrame slides={mobileSlides} />
              <MacbookFrame
                slides={desktopSlides}
                footer={
                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 px-1">
                    <div>
                      <p className="text-[0.7rem] uppercase tracking-[0.06rem] text-brand-dark">
                        Web + mobile
                      </p>
                      <p className="mt-1 font-medium text-ink">
                        Bookings · Calendar · Revenue · Guest app
                      </p>
                    </div>
                    <Link
                      href="/plan"
                      className="rounded-full bg-ink px-4 py-2 text-sm text-white transition-colors hover:bg-brand hover:text-ink"
                    >
                      Request demo
                    </Link>
                  </div>
                }
              />
            </div>
          </AnimatedContent>
        </div>

        {/* Stack cards */}
        <div className="mt-20 grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <FadeContent duration={800}>
            <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand-dark">
              Screens
            </p>
            <h3 className="max-w-md font-serif text-3xl italic text-ink md:text-4xl">
              Stack through the operator views
            </h3>
            <p className="mt-4 max-w-md text-body">
              Tap the dots or wait — each card lifts the next screen: dashboard,
              weddings, engagements and venues.
            </p>
          </FadeContent>
          <FadeContent delay={100} duration={900}>
            <StackCards items={stackScreens} />
          </FadeContent>
        </div>

        {/* Feature image cards */}
        <div className="mt-20">
          <FadeContent duration={700}>
            <p className="mb-3 text-[0.75rem] font-medium uppercase tracking-[0.0625rem] text-brand-dark">
              Core features
            </p>
            <h3 className="max-w-xl font-serif text-3xl italic text-ink md:text-4xl">
              Built for operators — clear for families
            </h3>
          </FadeContent>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureCards.map((item, i) => (
              <AnimatedContent key={item.title} distance={35} delay={0.06 * i}>
                <article className="group h-full overflow-hidden rounded-[1.25rem] border border-line bg-page transition-colors hover:border-brand">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div className="px-5 py-5">
                    <p className="text-lg text-ink">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-body">
                      {item.text}
                    </p>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
