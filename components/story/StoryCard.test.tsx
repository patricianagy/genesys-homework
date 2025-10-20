import "@testing-library/jest-dom";
import { act, render, screen } from "@testing-library/react";
import { StoryCard } from "./StoryCard";

describe("StoryCard", () => {
  it("renders card with elements", () => {
    render(
      <StoryCard
        story={{
          id: 1,
          by: "abcd12",
          time: 1760994504,
          title: "Title",
          url: "https://www.youtube.com/",
        }}
      />
    );

    const heading = screen.getByRole("heading", { level: 2 });
    const link = screen.getByRole("link");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Title");
    expect(link).toBeInTheDocument();
  });
});
