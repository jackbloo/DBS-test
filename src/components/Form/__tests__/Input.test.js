import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../utils";

describe("Unit testing for Headers", () => {
  test("Should display LOGO", () => {
    const changeBorderMock = jest.fn();
    render(<Input />);
    expect(screen.getByText("LOGO")).toBeInTheDocument();
  });
});
