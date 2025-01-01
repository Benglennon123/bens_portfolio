import React from "react";

export default function Page() {
  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Boxing</h1>
          <p className="text-muted-foreground">
            From football injuries to finding a new passion
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            Boxing isn't something that I thought I would ever get into if I'm
            honest. I have always been fairly in shape growing up playing
            football, but as I started to get injured more and more –
            particularly with recurring injuries – I noticed I was struggling to
            keep up on the pitch. It became clear I needed to find something
            else to get me back to my previous fitness level without aggravating
            those nagging injuries.
          </p>

          <p>
            For about a year prior to discovering boxing, I went to a normal gym
            and tried weight lifting like most people do. I followed a pretty
            standard routine – chest and triceps one day, back and biceps
            another, threw in some leg days when I could convince myself. But
            after about 8 months of going 3/4 times a week, I started to get
            very bored with the repetitive nature of it all.
          </p>

          <p>
            While I was seeing decent results, I realised it wasn't going to be
            sustainable for me in the long run. Sure, it got me to a good level
            of fitness, but I really didn't enjoy the solitary nature of just
            lifting weights and counting reps.
          </p>

          <p>
            I decided to give it a shot, and honestly, I haven't looked back
            since. The combination of cardio, strength work, and learning actual
            skills keeps every session interesting. I thoroughly enjoy it as a
            sport and have so much respect for the fighters – watching them
            train and seeing the dedication they put into their craft is
            incredible. While I personally have no plans to fight myself (my mum
            would have a heart attack!), the training and sparring aspects right
            now are the only things that interest me.
          </p>
        </div>
      </div>
    </div>
  );
}
