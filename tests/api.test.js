import { createMocks } from "node-mocks-http";
import moviesAPI from "../pages/api/movies";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        page: 1,
        total_results: 1000,
        total_pages: 500,
        results: [],
      }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

describe("/api/movies handler", () => {
  test("responds 200 to GET", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        page: 0,
      },
    });

    await moviesAPI(req, res);
    expect(res._getStatusCode()).toBe(200);
  });

  test("responds 422 to GET", async () => {
    const { req, res } = createMocks({
      method: "GET",
      query: {
        page: 6,
      },
    });

    await moviesAPI(req, res);
    expect(res._getStatusCode()).toBe(422);
  });

  test("responds 405 to POST", async () => {
    const { req, res } = createMocks({
      method: "POST",
      query: {
        page: 0,
      },
    });

    await moviesAPI(req, res);
    expect(res._getStatusCode()).toBe(405);
  });

  it("responds 500 when server is down.", async () => {
    fetch.mockImplementationOnce(() => Promise.reject("API is down"));
    const { req, res } = createMocks({
      method: "GET",
      query: {
        page: 0,
      },
    });

    await moviesAPI(req, res);

    expect(res._getStatusCode()).toBe(500);
  });
});
