import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

export default function Page() {
  const podcasts = [
    {
      title: "Lex Fridman Podcast",
      description: "Deep conversations about AI, science, and philosophy",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/50/Lex_Fridman_teaching_at_MIT_in_2018.png",
      link: "https://open.spotify.com/show/2MAi0BvDc6GTFvKFPXnkCL",
      platform: "spotify",
    },
    {
      title: "My First Million",
      description: "How to make your first million",
      image:
        "https://m.media-amazon.com/images/M/MV5BMjBlMzMyNzItOTBmYy00N2Y2LWJiY2QtYTFhZjliN2NiY2RiXkEyXkFqcGc@._V1_.jpg",
      link: "https://www.youtube.com/@MyFirstMillionPod",
      platform: "YouTube",
    },
    {
      title: "Alex Hormozi",
      description: "How to scale and grow your business",
      image:
        "https://www.acquisition.com/hubfs/ACQ_Web_Bio-AlexHormozi%202.png",
      link: "https://www.youtube.com/@AlexHormozi",
      platform: "YouTube",
    },
    {
      title: "Starter Story",
      description: "How to start a business",
      image:
        "https://s3.amazonaws.com/www.starterstory.com/starter-story-logo-wide.png",
      link: "https://www.youtube.com/@starterstory",
      platform: "YouTube",
    },
  ];

  return (
    <div className="container mx-auto max-w-3xl px-6 py-8">
      <div className="space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Podcasts</h1>
          <p className="text-muted-foreground">
            The top podcasts and shows I listen to or watch
          </p>
        </div>

        {/* Main Content */}
        <div className="prose dark:prose-invert max-w-none space-y-4">
          <p>
            I'm constantly listening to podcasts or YouTube videos to learn more
            on topics I love. Below is a list of some of my favourites.
          </p>

          {/* Podcast List */}
          <div className="grid gap-6 mt-8">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-center border rounded-lg p-6"
              >
                <img
                  src={podcast.image}
                  alt={podcast.title}
                  className="w-40 h-40 object-cover rounded-lg bg-gray-200"
                />
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-semibold">{podcast.title}</h3>
                  <p className="text-muted-foreground">{podcast.description}</p>
                  <a
                    href={podcast.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
                      podcast.platform === "spotify"
                        ? "bg-[#1DB954] text-black"
                        : "bg-[#FF0000] text-white"
                    }`}
                  >
                    {podcast.platform === "spotify" ? (
                      <FaSpotify className="text-xl" />
                    ) : (
                      <FaYoutube className="text-xl" />
                    )}
                    Listen on{" "}
                    {podcast.platform === "spotify" ? "Spotify" : "YouTube"}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
