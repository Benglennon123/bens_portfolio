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
        className="px-4 py-2 rounded-md bg-white text-gray-800 hover:bg-gray-50 
        border border-gray-200 shadow-sm hover:shadow-md transition-all 
        flex items-center gap-2"
      >
        <IoShareOutline className="w-4 h-4" />
        Share
      </button>
    </div>
  );
}
