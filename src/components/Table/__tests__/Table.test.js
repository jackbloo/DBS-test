import React from "react";
import {render, screen} from "@testing-library/react"
import Table from "../index"
import moment from "moment";

const mockData = [
    {
        Name: "test",
        eKtp: "12345678910111213141516",
        Address:"jl test no 1",
        "Date of Birth": "1996-01-01",
        Job: "Developer",
        Phone: "081272627382",
        family:[{
            name: "test-2",
            date: "2023-02-01",
            status: "Child"
        }]
    }
]

const mockData2Family = [
    {
        Name: "test",
        eKtp: "12345678910111213141516",
        Address:"jl test no 1",
        "Date of Birth": "1996-01-01",
        Job: "Developer",
        Phone: "081272627382",
        family:[{
            name: "test-2",
            date: "2023-02-01",
            status: "Child"
        }, {
            name: "test-2",
            date: "2023-02-01",
            status: "Child"
        }]
    }
]


describe("Unit testing for Table", () => {

    test("Should display Name", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Name")).toBeInTheDocument()
    })
    test("Should display eKtp", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("eKtp")).toBeInTheDocument()
    })
    test("Should display Address", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Address")).toBeInTheDocument()
    })
    test("Should display Job", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Job")).toBeInTheDocument()
    })

    test("Should display Date of Birth", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Date of Birth")).toBeInTheDocument()
    })

    test("Should display Date of Phone Number", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Phone Number")).toBeInTheDocument()
    })

    test("Should display Date of Family", () => {
        render(
            <Table/>
        ) 
        expect(screen.getByText("Family")).toBeInTheDocument()
    })

    test("Should display Name data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(mockData[0]["Name"])).toBeInTheDocument()
    })

    test("Should display eKtp data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(mockData[0]["eKtp"])).toBeInTheDocument()
    })
    
    test("Should display Address data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(mockData[0]["Address"])).toBeInTheDocument()
    })

    test("Should display Job data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(mockData[0]["Job"])).toBeInTheDocument()
    })

    test("Should display Date of Birth data", () => {
    const momentDate = moment(new Date(mockData[0]["Date of Birth"])).format("D-MMM-YYYY")
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(momentDate)).toBeInTheDocument()
    })

    test("Should display Phone data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText(mockData[0]["Phone"])).toBeInTheDocument()
    })

    test("Should display One Family data", () => {
        render(
            <Table data={mockData}/>
        ) 
        expect(screen.getByText("Show (1)")).toBeInTheDocument()
    })

    test("Should display Two Family data", () => {
        render(
            <Table data={mockData2Family}/>
        ) 
        expect(screen.getByText("Show (2)")).toBeInTheDocument()
    })
})