"use client";

import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import BlurText from "@/components/react-bits/BlurText";
import Magnet from "@/components/react-bits/Magnet";
import SplitText from "@/components/react-bits/SplitText";
import ShinyText from "@/components/react-bits/ShinyText";
import FadeContent from "@/components/react-bits/FadeContent";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-x-clip bg-ink">
      <div className="absolute inset-0 overflow-hidden">
        <HeroVideo />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-[100rem] flex-col px-5 pt-36 sm:px-10 lg:px-16">
        <SplitText
          text="Honor Life's Most Beautiful Days"
          tag="h1"
          splitType="words"
          delay={80}
          duration={0.75}
          textAlign="left"
          threshold={0.2}
          className="max-w-[18rem] font-serif text-[2.25rem] font-normal leading-[1.11] text-white sm:max-w-xl sm:text-5xl md:max-w-[52%] md:text-[3.5rem] lg:mt-6 lg:text-[4.5rem]"
        />

        <FadeContent
          blur
          duration={900}
          delay={200}
          className="mt-16 max-w-[27.5rem] pb-40 md:absolute md:right-10 md:top-[48%] md:mt-0 md:w-[30%] md:max-w-none lg:right-16"
        >
          <BlurText
            text="Pithi was created for Cambodian ceremonies that deserve care — weddings, engagements, birthdays and joyful gatherings. Every detail is planned with warmth, so you can be present for the people you love."
            delay={60}
            animateBy="words"
            direction="bottom"
            className="text-base font-normal leading-normal text-white lg:text-[1.05rem]"
          />
          <Magnet wrapperClassName="mt-6 inline-block">
            <Link
              href="/plan"
              className="inline-flex rounded-full bg-brand px-9 py-3 text-base font-normal text-ink transition-colors duration-300 hover:bg-white"
            >
              Plan Your Event
            </Link>
          </Magnet>
        </FadeContent>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 max-w-full translate-y-[22%] pl-1 pr-[0.2em] sm:pl-2">
        <ShinyText
          text="Pithi"
          speed={3}
          color="#ffffff"
          shineColor="#FFD700"
          className="font-serif text-[22vw] italic leading-[0.85] whitespace-nowrap sm:text-[24vw] md:text-[26vw] lg:text-[28vw]"
        />
      </div>
    </section>
  );
}
