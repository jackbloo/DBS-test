import React from "react";
import {fireEvent, render, screen} from "@testing-library/react"
import SubHeading from "../index"
import {MemoryRouter} from "react-router-dom";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUseNavigate,
}));

describe("Unit testing for subHeading", () => {
    test("Should display List Users", () => {
        render(
        <MemoryRouter initialEntries={[{pathname:"/"}]}>
            <SubHeading/>
        </MemoryRouter>
        ) 
        expect(screen.getByText("List Users")).toBeInTheDocument()
    })
    test("Should display Create New Users", () => {
        render(
        <MemoryRouter initialEntries={[{pathname:"/create"}]}>
            <SubHeading/>
        </MemoryRouter>
        ) 
        expect(screen.getByText("Create New Users")).toBeInTheDocument()
    })
    test("Should click button and trigger usenavigate", () => {
        render(
        <MemoryRouter initialEntries={[{pathname:"/"}]}>
            <SubHeading/>
        </MemoryRouter>
        ) 
        fireEvent.click(screen.getByTestId("new-user-button"))
        expect(mockedUseNavigate).toBeCalled()
    })
})