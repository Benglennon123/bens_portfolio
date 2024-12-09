"use client";

import { IoShareOutline } from "react-icons/io5";

export function Share() {
  return (
    <div className="flex items-center gap-2 text-sm">
      <button
        onClick={() =>
          navigator.share({
            title: "Share",
            url: window.location.href,
          })
        }
        className="px-4 py-2 rounded-md  text-white 
        hover:underline transition-all 
        flex items-center"
      >
        <IoShareOutline className="w-3.5 h-3.5 mr-1" />
        <span className="mt-0.5">Share</span>
      </button>
    </div>
  );
}
