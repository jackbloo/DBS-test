import React from "react";
import { Button, OverlayTrigger, Popover } from "react-bootstrap";

export const PopoverComponent = ({ family }) => {
  return (
    <>
      <OverlayTrigger
        trigger="click"
        placement="left"
        overlay={
          <Popover>
            <Popover.Header as="h3">{`Family`}</Popover.Header>
            <Popover.Body>
              {family &&
                family?.length &&
                family?.length > 0 &&
                family.map((el, index) => (
                  <p
                    key={index}
                  >{`name: ${el?.name}, DoB: ${el?.date}, Relationship status: ${el?.status}`}</p>
                ))}
            </Popover.Body>
          </Popover>
        }
      >
        {family && family?.length && (
          <Button
            style={{ background: "#4d73be" }}
            size="sm"
            data-testid="show-family"
          >
            Show ({family?.length})
          </Button>
        )}
      </OverlayTrigger>
    </>
  );
};
