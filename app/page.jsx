import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-start items-center w-full max-w-5xl mx-auto px-4 sm:px-6 py-1 lg:py-16">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-16 lg:space-y-0 lg:items-center">
        <div className="space-y-6 mt-6 lg:mt-0">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold">
            Hi, I'm <span className="text-primary">Ben</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-2xl text-muted-foreground">
            Full Stack Data Scientist & Founder
          </h2>
          <p className="text-base sm:text-lg lg:text-lg text-muted-foreground leading-relaxed">
            I build data-driven products that solve real problems. Based in
            Liverpool, I combine AI expertise with full-stack development to
            create valuable solutions for my customers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 lg:gap-5">
            <Button
              asChild
              size="lg"
              className="text-xs sm:text-sm lg:text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/about">Learn About Me</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-xs sm:text-sm lg:text-base border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[140px] sm:h-[200px] lg:h-auto flex items-center justify-center lg:justify-end mb-6 lg:mb-0">
          <div className="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-80 lg:h-80 flex">
            <img
              src="/ben.jpg"
              alt="Ben's profile picture"
              className="rounded-full object-cover w-full h-full border-2 lg:border-4 border-primary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full ring-1 lg:ring-2 ring-primary/20 ring-offset-2 ring-offset-background"></div>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="p-3 sm:p-4 lg:p-6 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/bar-trek" className="block">
            <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 lg:mb-2">
              Latest Project
            </h3>
            <div className="flex items-start gap-2 lg:gap-3">
              <img
                src="/bar-trek.png"
                alt="Bar-trek logo"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 rounded-lg object-cover"
              />
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground leading-tight lg:leading-normal">
                Bar-Trek - Revolutionizing the pub experience in the UK
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/tpm-ai" className="block">
            <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 lg:mb-2">
              Current Role
            </h3>
            <div className="flex items-center gap-2 lg:gap-3">
              <img
                src="/bp-logo.png"
                alt="BP logo"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg object-contain "
              />
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                Technical Program manager for AI at bp
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 sm:p-4 lg:p-6 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/data-science" className="block">
            <h3 className="font-semibold text-xs sm:text-sm lg:text-base mb-1 lg:mb-2">
              Past Role
            </h3>
            <div className="flex items-center gap-2 lg:gap-3">
              <img
                src="/bp-logo.png"
                alt="BP logo"
                className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg object-contain "
              />
              <p className="text-xs sm:text-sm lg:text-base text-muted-foreground">
                Data Science for wells and subsurface at bp
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
