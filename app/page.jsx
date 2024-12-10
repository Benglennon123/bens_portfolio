import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-start md:justify-center items-center w-full max-w-5xl mx-auto px-4 md:px-8 py-1 md:py-16">
      <div className="flex flex-col-reverse md:grid md:grid-cols-2 md:gap-12 md:space-y-0 md:items-center">
        <div className="space-y-4 mt-6 md:mt-0">
          <h1 className="text-3xl md:text-5xl font-bold">
            Hi, I'm <span className="text-primary">Ben</span>
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground">
            Full Stack Data Scientist & Founder
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            I build data-driven products that solve real problems. Based in
            Liverpool, I combine AI expertise with full-stack development to
            create valuable solutions for my customers.
          </p>

          <div className="flex gap-2 md:gap-4">
            <Button
              asChild
              size="lg"
              className="text-sm md:text-base bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/projects">View My Projects</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-sm md:text-base border-primary text-primary hover:bg-primary/10 shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>

        <div className="relative h-[140px] md:h-auto flex items-center justify-center md:justify-end">
          <div className="relative w-32 h-32 md:w-72 md:h-72 flex">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHJloC2u_ebCQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1677243049709?e=1739404800&v=beta&t=P40PPzvgR0a-E4-mK-J8zlPf5xPbONwIR3-EnM8bB3c"
              alt="Ben's profile picture"
              className="rounded-full object-cover w-full h-full border-2 md:border-4 border-primary shadow-lg"
            />
            <div className="absolute inset-0 rounded-full ring-1 md:ring-2 ring-primary/20 ring-offset-2 ring-offset-background"></div>
          </div>
        </div>
      </div>

      <div className="mt-12 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6">
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/bar-trek" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Latest Project
            </h3>
            <div className="flex items-start gap-2 md:gap-3">
              <img
                src="/bar-trek.png"
                alt="Bar-trek logo"
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg object-cover"
              />
              <p className="text-xs md:text-sm text-muted-foreground leading-tight md:leading-normal">
                Bar-Trek - Revolutionizing the pub experience in the UK
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/tpm-ai" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Current Role
            </h3>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src="/bp-logo.png"
                alt="BP logo"
                className="w-12 h-12 md:w-14 md:h-14 rounded-lg object-contain "
              />
              <p className="text-xs md:text-sm text-muted-foreground">
                Technical Program manager for AI at bp
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/interests" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Interests
            </h3>
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src="/poker.jpg"
                alt="Interests icon"
                className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
              />
              <p className="text-xs md:text-sm text-muted-foreground">
                Football lover, Trying boxing, and Poker player
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
