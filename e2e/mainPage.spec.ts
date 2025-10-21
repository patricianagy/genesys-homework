import { test, expect } from "@playwright/test";

test("should change to top stories, then new stories", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await expect(page.locator("h1")).toContainText("Hacker News");

  await page.getByRole("tab", { name: "Top" }).click();
  await expect(page).toHaveURL("http://localhost:3000?type=topstories");

  await page.getByRole("tab", { name: "New" }).click();
  await expect(page).toHaveURL("http://localhost:3000/?type=newstories");
});

test("should load more stories", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const initialStoriesCount = await page.locator("link").count();
  await page.getByRole("button", { name: "Load more" }).click();
  const newStoriesCount = await page.locator("link").count();
  expect(newStoriesCount).toBeGreaterThanOrEqual(initialStoriesCount);
});
