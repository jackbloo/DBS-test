import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Input } from "../utils";

describe("Unit testing for Input", () => {
  test("Should type phone number on the input", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="Phone"
      />
    );
    fireEvent.input(screen.getByRole("textbox", { name: /Phone/i }), {
      target: { value: "0875123131" },
    });
    expect(screen.getByRole("textbox", { name: /Phone/i })).toHaveValue(
      "0875123131"
    );
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  test("Should type Name on the input", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="Name"
      />
    );
    fireEvent.input(screen.getByRole("textbox", { name: /Name/i }), {
      target: { value: "test" },
    });
    expect(screen.getByRole("textbox", { name: /Name/i })).toHaveValue("test");
    expect(screen.getByText("Name")).toBeInTheDocument();
  });

  test("Should type Address on the input", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="Address"
      />
    );
    fireEvent.input(screen.getByRole("textbox", { name: /Address/i }), {
      target: { value: "jl test" },
    });
    expect(screen.getByRole("textbox", { name: /Address/i })).toHaveValue(
      "jl test"
    );
    expect(screen.getByText("Address")).toBeInTheDocument();
  });

  test("Should type eKtp on the input", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="eKtp"
      />
    );
    fireEvent.input(screen.getByRole("textbox", { name: /eKtp/i }), {
      target: { value: "21312313131311" },
    });
    expect(screen.getByRole("textbox", { name: /eKtp/i })).toHaveValue(
      "21312313131311"
    );
    expect(screen.getByText("eKtp")).toBeInTheDocument();
  });

  test("Should type Job on the input", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="Job"
      />
    );
    fireEvent.input(screen.getByRole("textbox", { name: /Job/i }), {
      target: { value: "Developer" },
    });
    expect(screen.getByRole("textbox", { name: /Job/i })).toHaveValue(
      "Developer"
    );
    expect(screen.getByText("Job")).toBeInTheDocument();
  });

  test("Should select Date of Birth", () => {
    const changeBorderMock = jest.fn();
    const register = jest.fn();
    render(
      <Input
        changeBorder={changeBorderMock}
        register={register}
        required
        label="Date of Birth"
      />
    );
    fireEvent.input(screen.getByLabelText("Date of Birth"), {
      target: { value: "2023-02-02" },
    });
    expect(screen.getByLabelText("Date of Birth")).toHaveValue("2023-02-02");
    expect(screen.getByText("Date of Birth")).toBeInTheDocument();
  });
});
