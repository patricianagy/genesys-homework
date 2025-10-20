import { StoriesList } from "@/components/story/StoriesList";
import { getItemIdList, getStory, Story } from "@/components/story/strories";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ type: string }>;
}) {
  const { type } = await searchParams;
  const storyIds = await getItemIdList(type);
  let stories: Story[] = [];
  if (storyIds) {
    stories = await Promise.all(
      storyIds.slice(0, 10).map((id) => getStory(id))
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto px-5 py-10 w-full">
      <h1 className="text-center font-bold text-orange-500 text-4xl pb-10">
        Hacker News
      </h1>
      <StoriesList stories={stories} storyIds={storyIds || []} />
    </div>
  );
}
