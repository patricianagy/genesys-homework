export enum ItemType {
  job = "job",
  story = "story",
  comment = "comment",
  poll = "poll",
  pollopt = "pollopt",
}

export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: ItemType;
  url: string;
  deleted: boolean;
  text: string;
  dead: boolean;
};

export async function getItemIdList(type?: string): Promise<number[]> {
  return fetch(
    `https://hacker-news.firebaseio.com/v0/${type ? type : "newstories"}.json`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return undefined;
    }
  });
}

export async function getStory(id: number): Promise<Story> {
  return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    if (res.status === 200) {
      return res.json();
    } else {
      return undefined;
    }
  });
}
