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
          "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
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

  return (
    <div
      className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
      ref={containerRef}
    >
      <div className="flex size-full max-h-[200px] max-w-lg flex-col items-stretch justify-between gap-10">
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div1Ref}>
            <Icons.googleDrive />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.googleDocs />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div2Ref}>
            <Icons.notion />
          </Circle>
          <Circle ref={div4Ref} className="size-16">
            <Icons.openai />
          </Circle>
          <Circle ref={div6Ref}>
            <Icons.zapier />
          </Circle>
        </div>
        <div className="flex flex-row items-center justify-between">
          <Circle ref={div3Ref}>
            <Icons.whatsapp />
          </Circle>
          <Circle ref={div7Ref}>
            <Icons.messenger />
          </Circle>
        </div>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={div1Ref} toRef={div4Ref} curvature={-75} endYOffset={-10} />
      <AnimatedBeam containerRef={containerRef} fromRef={div2Ref} toRef={div4Ref} />
      <AnimatedBeam containerRef={containerRef} fromRef={div3Ref} toRef={div4Ref} curvature={75} endYOffset={10} />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div4Ref}
        curvature={-75}
        endYOffset={-10}
        reverse
      />
      <AnimatedBeam containerRef={containerRef} fromRef={div6Ref} toRef={div4Ref} reverse />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={div4Ref}
        curvature={75}
        endYOffset={10}
        reverse
      />
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
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gMn4jqJTX959QwvQr98oyItt69FrMG.png"
      alt="Bitcoin"
      className="w-full h-full object-contain"
    />
  ),
  whatsapp: () => (
    <img
      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-enZcGQPWmARkhuSfwljCOXJ5p0Hn2N.png"
      alt="PayPal"
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
}
