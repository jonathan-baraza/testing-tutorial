import { render, screen } from "@testing-library/react";
import App from "./App";

test("Checks that button exists", () => {
  render(<App />);
  const btn = screen.getByTestId("btnMain");
  expect(btn).toBeInTheDocument();
});
