import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { PopoverComponent } from "../utils";

const mockData = [
  {
    name: "test",
    date: "2023-02-12",
    status: "Parent",
  },
];

describe("Unit testing for PopoverComponent", () => {
  test("Should display Show text", () => {
    render(<PopoverComponent family={mockData} />);
    expect(screen.getByText("Show (1)")).toBeInTheDocument();
  });
  test("Should not display family data before clicking the button again", () => {
    render(<PopoverComponent family={mockData} />);
    expect(
      screen.queryByText(
        "name: test, DoB: 2023-02-12, Relationship status: Parent"
      )
    ).not.toBeInTheDocument();
  });
  test("Should display family data", () => {
    render(<PopoverComponent family={mockData} />);
    fireEvent.click(screen.getByTestId("show-family"));
    expect(
      screen.getByText(
        "name: test, DoB: 2023-02-12, Relationship status: Parent"
      )
    ).toBeInTheDocument();
  });
});
