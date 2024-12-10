import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="container max-w-5xl mx-auto px-4 md:px-8 py-6 md:pb-16">
      <h1 className="text-4xl font-bold mb-4">My Work</h1>

      {/* Journey Section */}
      <div className="text-base md:text-lg text-muted-foreground leading-relaxed mb-4 space-y-4">
        <p>
          So far in my career, I've bounced around a bit - Technical Program
          Manager, full stack developer, and data scientist. It's been a wild
          ride with tons of amazing people, but getting here was never some
          grand master plan. Honestly? At 16, I knew I wanted to work in tech
          mostly because I was halfway decent at it and new there was money in
          it.
        </p>

        <p>
          I went through school in Liverpool, stuck around at Maricourt sixth
          form college, and then decided to take what turned out to be the most
          hilariously timed gap year ever. The week after I chose to take a
          break? Boom. Global pandemic hits. But weirdly, that timing actually
          helped me figure out what I did and didn't want.
        </p>

        <p>
          Working at B&Q during COVID as a key worker meant I was mostly in the
          yard, lugging around bags of cement, sand, and compost. And you know
          what? I actually loved it. Got me in great shape! But something was
          missing - that coding itch. So I started tinkering, creating little
          automation's for myself and my family. My proudest project? This
          slightly janky model to predict sneaker resale prices - didn't work
          perfectly, but hey, it was mine.
        </p>

        <p>
          After my gap year, I had offers from some of the best in tech. But
          during interviews, one place just felt different - they genuinely
          seemed to care. I joined bp, and well, the rest is history.
        </p>

        <p>
          Want the full breakdown of what I've been up to? Check out the details
          below.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/bar-trek" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Technical Program Manager for AI
            </h3>
            <div className="flex items-start gap-2 md:gap-3">
              <Image
                src="/bp-logo.png"
                alt="BP Logo"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg object-contain"
              />
              <p className="text-xs md:text-sm text-muted-foreground leading-tight md:leading-normal">
                Building bp's AI strategy and governance framework
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/bar-trek" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Bar-Trek
            </h3>
            <div className="flex items-start gap-2 md:gap-3">
              <Image
                src="/bar-trek.png"
                alt="Bar-Trek Project"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg object-cover"
              />
              <p className="text-xs md:text-sm text-muted-foreground leading-tight md:leading-normal">
                An app transforming the UK pub experience
              </p>
            </div>
          </Link>
        </div>
        <div className="p-3 md:p-4 rounded-lg border hover:bg-accent transition-colors">
          <Link href="/my-work/bar-trek" className="block">
            <h3 className="font-semibold text-sm md:text-base mb-1 md:mb-2">
              Data Science at BP
            </h3>
            <div className="flex items-start gap-2 md:gap-3">
              <Image
                src="/bp-logo.png"
                alt="BP Logo"
                width={56}
                height={56}
                className="w-12 h-12 md:w-14 md:h-14 flex-shrink-0 rounded-lg object-contain"
              />
              <p className="text-xs md:text-sm text-muted-foreground leading-tight md:leading-normal">
                Data Science with a focus on Reservoir Engineering at BP
              </p>
            </div>
          </Link>
        </div>

        {/* Add more project cards following the same pattern */}
      </div>
    </div>
  );
}
