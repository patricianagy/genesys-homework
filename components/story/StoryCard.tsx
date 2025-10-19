"use client";

import { Story } from "./strories";
import { format } from "date-fns";

export function StoryCard({ story }: { story: Story }) {
  return (
    <a
      href={story.url}
      target="_blank"
      className="w-full bg-white shadow-md rounded-lg  p-4 flex flex-col gap-2 justify-between hover:bg-orange-50"
    >
      <div>
        <div className="text-xs text-gray-500 italic pb-2">
          {format(new Date(story.time * 1000), "dd/MM/yyyy")}
        </div>
        <h2 className="font-semibold text-lg text-gray-800">
          {story.title || ""}
        </h2>
      </div>
      <div className="text-end text-sm text-orange-400">by: {story.by}</div>
    </a>
  );
}
