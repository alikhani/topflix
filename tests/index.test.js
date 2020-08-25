import { render, act, fireEvent, screen } from "@testing-library/react";
import App from "../pages/index";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 123,
          title: "movie 1",
          overview: "this is movie 1",
          poster_path: "http://img1.jpg",
          popularity: 10,
        },
      ]),
  })
);

describe("App", () => {
  let loadMovies;

  beforeEach(() => {
    fetch.mockClear();
    loadMovies = jest.fn();
  });

  it("renders without crashing", async () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Welcome to Topflix" })
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Load movie list");
  });

  it("load movies", async () => {
    render(<App />);

    const loadMovieList = screen.getByRole("button");
    expect(loadMovieList).toHaveTextContent("Load movie list");

    expect(loadMovieList).toBeVisible();

    await act(async () => {
      fireEvent.click(loadMovieList);
    });

    const heading = screen.getByRole("heading", {
      name: "100 most popular movies",
    });
    expect(heading).toBeVisible();
    const movie1 = screen.getByTestId("123");
    expect(movie1).toHaveTextContent("movie 1");
  });
});
