import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { FormTable } from "../utils";
import userEvent from "@testing-library/user-event";

const mockFamily = [{}];
const mockRegister = jest.fn();
const changeBorder = jest.fn();

describe("Unit testing for FormTabel", () => {
  test("Should display Name", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    expect(screen.getByText("Name")).toBeInTheDocument();
  });
  test("Should display Date of Birth", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
  });
  test("Should display Relationship Status", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    expect(screen.getByText("Relationship Status")).toBeInTheDocument();
  });
  test("Should trigger register", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    expect(mockRegister).toBeCalled();
  });
  test("Should trigger changeBorder", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    expect(changeBorder).toBeCalled();
  });
  test("Should type Name on the input", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    fireEvent.input(screen.getByLabelText("Name"), {
      target: { value: "test" },
    });
    expect(screen.getByLabelText("Name")).toHaveValue("test");
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
  });

  test("Should type Date of Birth on the input", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    fireEvent.input(screen.getByLabelText("Date of Birth"), {
      target: { value: "2023-02-01" },
    });
    expect(screen.getByLabelText("Date of Birth")).toHaveValue("2023-02-01");
    expect(screen.getByLabelText("Date of Birth")).toBeInTheDocument();
  });

  test("Should Select Parent on the input", () => {
    render(
      <FormTable
        family={mockFamily}
        register={mockRegister}
        changeBorder={changeBorder}
      />
    );
    userEvent.selectOptions(screen.getByTestId("Select"), ["Parent"]);
    expect(screen.getByTestId("Parent").selected).toBe(true);
  });
});
