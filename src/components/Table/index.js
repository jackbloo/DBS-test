import React from "react";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import moment from "moment";
import { PopoverComponent } from "./utils";

const TableComponent = ({ data }) => {
  return (
    <Container className="mt-3">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>eKtp</th>
            <th>Address</th>
            <th>Job</th>
            <th>Date of Birth</th>
            <th>Phone Number</th>
            <th>Family</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((el, index) => (
              <tr key={index}>
                <td>{el?.Name}</td>
                <td>{el?.eKtp}</td>
                <td>{el?.Address}</td>
                <td>{el?.Job}</td>
                <td>
                  {el &&
                    moment(new Date(el["Date of Birth"])).format("D-MMM-YYYY")}
                </td>
                <td>{el?.Phone}</td>
                <td>
                  {el?.family ? <PopoverComponent family={el?.family} /> : "-"}
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TableComponent;
