export type Story = {
  by: string;
  id: number;
  time: number;
  title: string;
  url: string;
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

export async function getStories(ids: number[]) {
  return Promise.all(ids.map((id) => getStory(id)));
}
