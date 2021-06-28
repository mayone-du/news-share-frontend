import "@testing-library/jest-dom/extend-expect";

import { render, screen } from "@testing-library/react";
import Index from "src/pages/index";

it("Should render Index Page", () => {
  render(<Index />);
  expect(screen.getByText("Index Page")).toBeInTheDocument();
});
