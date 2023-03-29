import React from "react";
import {render, screen} from "@testing-library/react"
import Header from "../index"

describe("Unit testing for Headers", () => {

    test("Should display LOGO", () => {
        render(
            <Header/>
        ) 
        expect(screen.getByText("LOGO")).toBeInTheDocument()
    })
})