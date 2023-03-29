import React from "react";
import { render, screen } from "@testing-library/react";
import { Select } from "../utils";

describe("Unit testing for Select", () => {
  test("Should display Parent", () => {
    const borderChangeMock = jest.fn();
    render(<Select index={0} changeBorder={borderChangeMock} />);
    expect(screen.getByText("Parent")).toBeInTheDocument();
  });
  test("Should display Brother", () => {
    const borderChangeMock = jest.fn();
    render(<Select index={0} changeBorder={borderChangeMock} />);
    expect(screen.getByText("Brother")).toBeInTheDocument();
  });
  test("Should display Sister", () => {
    const borderChangeMock = jest.fn();
    render(<Select index={0} changeBorder={borderChangeMock} />);
    expect(screen.getByText("Sister")).toBeInTheDocument();
  });
  test("Should display Child", () => {
    const borderChangeMock = jest.fn();
    render(<Select index={0} changeBorder={borderChangeMock} />);
    expect(screen.getByText("Child")).toBeInTheDocument();
  });
  test("Should trigger borderChange", () => {
    const borderChangeMock = jest.fn();
    render(<Select index={0} changeBorder={borderChangeMock} />);
    expect(borderChangeMock).toBeCalled();
  });
});
