import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { StoryCard } from "./StoryCard";

const mockStory = {
  id: 1,
  by: "abcd12",
  time: 1760994504,
  title: "Title",
  url: "https://www.youtube.com/",
};

describe("StoryCard", () => {
  it("renders card with elements", () => {
    render(<StoryCard story={mockStory} />);

    const heading = screen.getByRole("heading", { level: 2 });
    const link = screen.getByRole("link");

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(mockStory.title);
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", mockStory.url);
  });
});
