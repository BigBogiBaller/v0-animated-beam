"use client"

import type React from "react"
import { forwardRef, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/magicui/animated-beam"

const Circle = forwardRef<HTMLDivElement, { className?: string; children?: React.ReactNode }>(
  ({ className, children }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-1 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
          className,
        )}
      >
        {children}
      </div>
    )
  },
)

Circle.displayName = "Circle"

export default function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const div1Ref = useRef<HTMLDivElement>(null)
  const div2Ref = useRef<HTMLDivElement>(null)
  const div3Ref = useRef<HTMLDivElement>(null)
  const div4Ref = useRef<HTMLDivElement>(null)
  const div5Ref = useRef<HTMLDivElement>(null)
  const div6Ref = useRef<HTMLDivElement>(null)
  const div7Ref = useRef<HTMLDivElement>(null)
  const div8Ref = useRef<HTMLDivElement>(null)
  const div9Ref = useRef<HTMLDivElement>(null)
  const div10Ref = useRef<HTMLDivElement>(null)
  const div11Ref = useRef<HTMLDivElement>(null)

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-10">
      <div
        className="relative flex h-[600px] w-full max-w-4xl items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
        ref={containerRef}
      >
        <div className="flex size-full flex-col items-stretch justify-between gap-10">
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div1Ref}>
              <Icons.googleDrive />
            </Circle>
            <Circle ref={div5Ref}>
              <Icons.googleDocs />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div8Ref} className="p-0">
              <Icons.whatsapp />
            </Circle>
            <Circle ref={div10Ref}>
              <Icons.messenger />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div2Ref}>
              <Icons.notion />
            </Circle>
            <Circle ref={div6Ref}>
              <Icons.zapier />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div9Ref} className="p-0">
              <Icons.amex />
            </Circle>
            <Circle ref={div11Ref}>
              <Icons.usdc />
            </Circle>
          </div>
          <div className="flex flex-row items-center justify-between">
            <Circle ref={div3Ref}>
              <Icons.sepa />
            </Circle>
            <Circle ref={div7Ref}>
              <Icons.tether />
            </Circle>
          </div>
        </div>

        <div ref={div4Ref} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-4" />

        <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div5Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div7Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div8Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div9Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div10Ref} toRef={div4Ref} />
        <AnimatedBeam containerRef={containerRef} fromRef={div11Ref} toRef={div4Ref} />
      </div>
    </div>
  )
}

const Icons = {
  notion: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-N6PA5ERHWpG7dr7LzWyJMeVyX6UdW0.png"
      alt="Google Pay"
      className="w-full h-full object-contain"
    />
  ),
  openai: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-vGopU4lnTOakrWMCVl22iw21Bn0ITA.png"
      alt="Logo"
      className="w-full h-full object-contain"
    />
  ),
  googleDrive: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-xtpAdZxAIreunOcFjyQURL5dttmrQo.png"
      alt="CB"
      className="w-full h-full object-contain"
    />
  ),
  whatsapp: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lfj63ZzdidF00vhNbLQQ8JSqttraih.png"
      alt="JCB"
      className="w-full h-full object-contain"
    />
  ),
  googleDocs: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-wfrfGy2dGZCEoWMLbCGy1l7Ez7uuj8.png"
      alt="Mastercard"
      className="w-full h-full object-contain"
    />
  ),
  zapier: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-C80vCprkt0gB4jXHChpo8tcWxv7IYI.png"
      alt="Visa"
      className="w-full h-full object-contain"
    />
  ),
  messenger: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ITG8kqnxufjjLThR8kisrnKzQWJ2H2.png"
      alt="Apple Pay"
      className="w-full h-full object-contain"
    />
  ),
  sepa: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kFiuV3ByaCtyjQvZ9VBHj0PURFcDhi.png"
      alt="SEPA"
      className="w-full h-full object-contain"
    />
  ),
  amex: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-iNxZZhUI8xZUqN09vn3S9dyhi0gGdO.png"
      alt="American Express"
      className="w-full h-full object-contain"
    />
  ),
  usdc: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DjwDzxMZvBrxgo54paORo8CyZwsgvM.png"
      alt="USDC"
      className="w-full h-full object-contain"
    />
  ),
  tether: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1zKEaWPChug31ZPdACCqoCCRmvmFHc.png"
      alt="Tether"
      className="w-full h-full object-contain"
    />
  ),
}
