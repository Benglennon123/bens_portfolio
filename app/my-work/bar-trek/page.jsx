import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Bar-Trek</h1>
          <p className="text-muted-foreground">
            Building the ultimate pub discovery and tracking platform
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Bar-Trek is my brainchild - a collaborative project with my dad and
            three friends launched in June 2024. We've built the ultimate
            platform for pub discovery, tracking, and planning epic pub crawls
            across the UK.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Origin Story</h2>
          <p>
            The genesis of Bar-Trek is a tale of family, tradition, and a touch
            of humor. It all started with my dad, John, a true connoisseur of
            Liverpool's vibrant pub scene. His method of tracking pub visits was
            hilariously old-school: a poster of Liverpool adorned with a sea of
            green and red dots.
          </p>
          <p>
            Green dots marked the pubs he'd conquered, while red dots
            represented the unexplored territories awaiting his visit. It was a
            visual representation of his liquid journey through the city – a
            journey he was eager to share with others.
          </p>
          <p>
            I caught him in the act of building this and said, "What are you
            doing! It would take me 2 hours to build a map from the spreadsheet
            to visualize all this for you." That casual observation would be the
            spark that ignited Bar-Trek's creation.
          </p>

          <figure className="my-8">
            <img
              src="https://ximgbvodfxhlfcdieahk.supabase.co/storage/v1/object/public/liverpool_crawls/stock%20images/Screenshot%202024-10-12%20205221.png"
              alt="Bar-Trek Poster"
              className="rounded-lg w-full object-cover shadow-md"
            />
          </figure>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            Technical Details
          </h2>
          <p>
            Technically speaking, I built the whole site using Next.js and
            Supabase. What started as a digital version of my dad's quirky
            poster quickly evolved as we recognized a greater opportunity: why
            stop at tracking pubs when we could revolutionize the entire pub
            crawl experience?
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">The Vision</h2>
          <p>
            As we delved deeper into development, our vision expanded. We're not
            just creating an app; we're building a community platform for pub
            enthusiasts. Our goal is to make Bar-Trek the go-to resource for
            discovering, planning, and sharing unforgettable pub crawls across
            the UK.
          </p>

          <p>
            We're passionate about preserving the social essence of pub culture
            while enhancing it with modern technology. Whether you're a local
            looking to explore your city's hidden gems or a tourist seeking the
            perfect pub route, Bar-Trek is designed with you in mind.
          </p>

          {/* Next Step Card */}
          <div className="mt-8">
            <a
              target="_blank"
              href="https://bar-trek.com"
              className="block rounded-lg border p-4 hover:bg-accent transition-colors"
            >
              <div className="flex items-start gap-3">
                <img
                  src="/bar-trek.png"
                  alt="Bar-Trek Logo"
                  className="w-14 h-14 flex-shrink-0 rounded-lg object-contain"
                />
                <div className="text-left">
                  <h3 className="font-semibold text-base mb-1">Try Bar-Trek</h3>
                  <p className="text-sm text-muted-foreground leading-normal">
                    The ultimate pub companion
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
