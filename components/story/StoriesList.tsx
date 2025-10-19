"use client";

import Image from "next/image";
import { getStory, Story } from "./strories";
import { StoryCard } from "./StoryCard";
import { ListTypeTab } from "./ListTypeTab";
import { useEffect, useState } from "react";

export function StoriesList({
  stories,
  storyIds,
}: {
  stories: Story[];
  storyIds: number[];
}) {
  const [storyList, setStoryList] = useState<Story[]>(stories);
  const [page, setPage] = useState<number>(1);
  const [endOfList, setEndOfList] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setStoryList(stories);
    setPage(1);
    setEndOfList(false);
  }, [stories]);

  async function getMoreStories() {
    setLoading(true);
    const helper = await Promise.all(
      storyIds.slice(page * 10, (page + 1) * 10).map((id) => getStory(id))
    );
    setStoryList([...storyList, ...helper]);
    setPage(page + 1);
    setEndOfList(storyList.length >= storyIds.length);

    setLoading(false);
  }

  return (
    <div>
      <ListTypeTab />
      {storyList.length > 0 ? (
        <div className="flex flex-col gap-6">
          <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-6  py-8">
            {storyList.length > 0 &&
              storyList.map((story) => (
                <StoryCard key={story.id} story={story} />
              ))}
          </div>
          {!endOfList && !loading && (
            <button
              onClick={getMoreStories}
              className="w-fit cursor-pointer bg-orange-500 text-white text-lg font-semibold px-4 py-2 rounded-md hover:bg-orange-700"
            >
              Load more
            </button>
          )}
          {loading && (
            <div className="text-orange-500 text-lg font-semibold">
              Loading...
            </div>
          )}
        </div>
      ) : (
        <div className="text-orange-500 text-lg font-semibold">
          No news for now, please come back later
        </div>
      )}
    </div>
  );
}
