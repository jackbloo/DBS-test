import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  cleanup,
} from "@testing-library/react";
import Form from "../index";

const mockedUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUseNavigate,
}));
const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("Unit testing for Form", () => {
  afterEach(async () => {
    await cleanup();
  });
  test("Should display All Name label inputs", () => {
    render(<Form />);
    expect(screen.getAllByText("Name").length).toBe(2);
  });
  test("Should display Address label inputs", () => {
    render(<Form />);
    expect(screen.getByText("Address")).toBeInTheDocument();
  });
  test("Should display eKtp label inputs", () => {
    render(<Form />);
    expect(screen.getByText("eKtp")).toBeInTheDocument();
  });
  test("Should display Job label inputs", () => {
    render(<Form />);
    expect(screen.getByText("Job")).toBeInTheDocument();
  });
  test("Should display Date of Birth label inputs", () => {
    render(<Form />);
    expect(screen.getAllByText("Date of Birth").length).toBe(2);
  });
  test("Should display Phone label inputs", () => {
    render(<Form />);
    expect(screen.getByText("Phone")).toBeInTheDocument();
  });

  test("Should not display error when all have values", async () => {
    render(<Form />);
    fireEvent.input(screen.getByRole("textbox", { name: /Name/i }), {
      target: { value: "test" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /Phone/i }), {
      target: { value: "0875123131" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /Address/i }), {
      target: { value: "jl test" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /eKtp/i }), {
      target: { value: "213123131313111" },
    });
    fireEvent.input(screen.getByRole("textbox", { name: /Job/i }), {
      target: { value: "Developer" },
    });
    fireEvent.input(screen.getByLabelText("Date of Birth"), {
      target: { value: "2023-02-02" },
    });
    fireEvent.click(screen.getByTestId("submit-button"));
    await waitFor(() => {
      expect(screen.queryByText("Errors")).not.toBeInTheDocument();
      return;
    });
  });
  test("Should display error when all is not values", async () => {
    render(<Form />);
    fireEvent.click(screen.getByTestId("submit-button"));
    expect(mockedUseNavigate).not.toBeCalled();
    expect(mockDispatch).not.toBeCalled();
    await waitFor(() => {
      expect(screen.getByText("Errors")).toBeInTheDocument();
      return;
    });
    expect(screen.getByText("Name: The Name is required")).toBeInTheDocument();
    expect(
      screen.getByText("Address: The Address is required")
    ).toBeInTheDocument();
    expect(screen.getByText("eKtp: The eKtp is required")).toBeInTheDocument();
    expect(screen.getByText("Job: The Job is required")).toBeInTheDocument();
    expect(
      screen.getByText("Date of Birth: The Date of Birth is required")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Phone: The Phone is required")
    ).toBeInTheDocument();
  });
});
