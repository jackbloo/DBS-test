import React from "react";
import { render, screen } from "@testing-library/react";
import { displayError } from "../utils";

describe("Unit testing for Select", () => {
  test("Should display Name default Error when no message", () => {
    const mockErrors = {
      Name: {
        message: "",
      },
    };
    render(displayError(mockErrors));
    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(
      screen.getByText("Name: Please enter the correct Name")
    ).toBeInTheDocument();
  });
  test("Should display Name dynamic Error when no message", () => {
    const mockErrors = {
      Name: {
        message: "Name is required",
      },
    };
    render(displayError(mockErrors));
    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(screen.getByText("Name: Name is required")).toBeInTheDocument();
  });
  test("Should display family default Error", () => {
    const mockErrors = {
      family: [
        {
          name: { message: "Name is required" },
        },
      ],
    };
    render(displayError(mockErrors));
    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(
      screen.getByText("family-1: Please enter the correct name")
    ).toBeInTheDocument();
  });
  test("Should display extraPhone dynamic Error", () => {
    const mockErrors = {
      extraPhone: [{ message: "Extra phone is required" }],
    };
    render(displayError(mockErrors));
    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(
      screen.getByText("extraPhone-1: Extra phone is required")
    ).toBeInTheDocument();
  });
  test("Should display extraPhone default Error", () => {
    const mockErrors = {
      extraPhone: [{ message: "" }],
    };
    render(displayError(mockErrors));
    expect(screen.getByText("Errors")).toBeInTheDocument();
    expect(
      screen.getByText("extraPhone-1: Please enter the correct extraPhone")
    ).toBeInTheDocument();
  });
});
