import { render, screen } from "@testing-library/react";
import Home from "./index";

describe("Home", () => {
  it("renders homepage unchanged", () => {
    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
