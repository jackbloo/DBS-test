import React from "react";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import "./index.css"
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import moment from "moment";


const PopoverComponent = ({family}) => {
  return (
    <>
        <OverlayTrigger
          trigger="click"
          placement="left"
          overlay={
            <Popover>
              <Popover.Header as="h3">{`Family`}</Popover.Header>
              <Popover.Body>
                {family && family?.length && family?.length > 0 && family.map((el, index) =>
                <p key={index}>{`name: ${el?.name}, DoB: ${el?.date}, Relationship status: ${el?.status}`}</p>
                
                )}
              </Popover.Body>
            </Popover>
          }
        >
            {family && family?.length &&  <Button style={{background: "#4d73be"}} size="sm">Show ({family?.length})</Button>}

        </OverlayTrigger>
    </>
  );
}

const TableComponent = ({data}) => {
    return(
        <Container className="mt-3">
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>eKtp</th>
            <th>Address</th>
            <th>Job</th>
            <th>Date of Birth</th>
            <th>Family</th>
          </tr>
        </thead>
        <tbody>
            {
                data && data.map((el) => 
                (
                <tr>
                    <td>{el?.Name}</td>
                    <td>{el?.Address}</td>
                    <td>{el?.eKtp}</td>
                    <td>{el?.Job}</td>
                    <td>{el && moment(new Date(el["Date of Birth"])).format("D-MMM-YYYY")}</td>
                    <td><PopoverComponent family={el?.family}/></td>
                </tr>
                )
                )
            }
        </tbody>
      </Table>
      </Container>
    )

}


export default TableComponent