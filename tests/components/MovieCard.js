import React from "react";

import { render } from "../test-utils";
import MovieCard from "../../components/MovieCard";

describe("MovieCard", () => {
  let movieProp;

  beforeEach(() => {
    movieProp = {
      id: 123,
      title: "Test Movie",
      overview: "This is the overview",
      poster_path:
        "https://image.tmdb.org/t/p/w200//bOKjzWDxiDkgEQznhzP4kdeAHNI.jpg",
    };
  });

  test("should render title, overview, and image", () => {
    const { getByText, getByAltText } = render(<MovieCard movie={movieProp} />);
    const title = getByText(movieProp.title);
    const overview = getByText(movieProp.overview);
    const image = getByAltText(movieProp.title);

    expect(title).toBeVisible();
    expect(overview).toBeVisible();
    expect(image).toBeVisible();
  });
});
