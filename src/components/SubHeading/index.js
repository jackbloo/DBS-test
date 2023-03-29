import React from "react";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import { useNavigate, useLocation } from "react-router-dom";


const SubHeading = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleClick = () => {
        navigate("/create")
    }
    return(

      <Container className="mt-3">
        {location?.pathname === "/" ? (<Stack direction="horizontal" gap={3}>
        <div><b> List Users</b> </div>
        <div className="bg-light border ms-auto">
        <Button data-testid="new-user-button" size="sm" as="input" type="submit" value="Create new users" style={{background: "#4d73be"}} onClick={() => handleClick()} />
        </div>
        </Stack>):(<div><b>Create New Users</b> </div>)
    }
      </Container>
    )

}


export default SubHeading