"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";


export function HeroSection() {

  const router = useRouter();

  return (
    
    <section className="relative bg-gradient-to-br from-[#05071C] to-[#0F2A45] px-4 py-20 md:py-32 h-screen">

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Decorative Bottom Right Image */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 hidden xl:block">
        <Image
          src="/hero.png"
          alt=""
          width={480}
          height={480}
          className="opacity-90 select-none"
          priority
        />
      </div>

      {/* Decorative Bottom Right Image */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 hidden xl:block">
        <Image
          src="/bull.png"
          alt=""
          width={520}
          height={520}
          className="opacity-30 select-none"
          priority
        />
      </div>

      <div className="container z-10 my-auto mx-auto max-w-6xl h-full flex items-center justify-center">

        <div className="flex flex-col items-center text-center">
          {/* Trust Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/5 px-4 py-2 text-sm text-gray-200 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
            </span>
            Live Educational Webinar • Expert-Led
          </div>

          {/* Headline */}
          <h1 className="mb-6 max-w-5xl text-white text-2xl text-balance font-semibold tracking-tight md:text-6xl lg:text-6xl">
            Unlock the Secrets of Market Trends with RJTI Charts!
          </h1>

          {/* Subheadline */}
          <p className="mb-20 max-w-2xl text-pretty text-s text-gray-300 md:text-l">
            Learn structured trading methodologies, risk management frameworks,
            and disciplined decision-making strategies from industry experts.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row">

            <Button
              size="lg"
              className="bg-[#00A977] text-primary-foreground hover:bg-[#008a61] gap-2 px-8 text-base font-semibold shadow-lg duration-300 cursor-pointer"
              onClick={() => {
                router.push("/register");
              }}
            >
              Reserve Your Seat
              <ArrowRight className="h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 text-white font-semibold bg-transparent hover:bg-[#EB7400]"
              onClick={() => {
                router.push("/#webinar-details");
              }}
            >
              <Play className="h-5 w-5" />
              View Webinar Details
            </Button>

          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#00A977]" />
              Premium Webinar
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#00A977]" />
              Educational Purpose
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-[#00A977]" />
              Live Q&A Session
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
