"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function Banner() {
  return (
    <div className="w-full md:max-h-3/4  relative inset-0 z-10 pt-28 h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/banner.jpg"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container mx-auto pt-10 relative z-10 text-white">
        <div className="h-full grid   items-center text-center">
          <div className="relative z-10 text-center flex flex-col items-center">
            <div className=" mx-auto pb-8">
              <Image
                src="/images/logo.png"
                height={100}
                width={100}
                alt="logo icon"
              />
              <span className=" text-lg font-mono">BikeBotics </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Precision Bike Servicing
            </h1>
            <p className=" md:w-2xl   tracking-tight mb-4">
              BikeBotics is not just a repair shop — it&apos;s your personal bike
              performance lab. Ride smarter. Ride longer. Ride with BikeBotics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/70">
                <Link href="/posts">Explore Bike Accessories</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary/70"
              >
                <Link href="/signup">Join Community</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
