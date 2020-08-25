import { render } from "@testing-library/react";
import App from "../pages/index";

describe("App", () => {
  it("renders without crashing", async () => {
    const { getByRole } = render(<App />);
    expect(
      getByRole("heading", { name: "Welcome to Topflix" })
    ).toBeInTheDocument();
    expect(getByRole("button")).toHaveTextContent("Load movie list");
  });
});
