import React from "react";
import { useForm } from "react-hook-form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import { useDispatch } from "react-redux";
import { addData } from "../../features/data/dataSlice";
import { useNavigate } from "react-router-dom";



const Input = ({ label, register, required }) => (
    <Row lg={2}>
     <Form.Label style={{fontWeight: 600}}>{label}</Form.Label>
      <Form.Group>
        {label === "Address" ? <Form.Control className="mb-2" as="textarea" rows={3} {...register(label, { required })} style={{border: "2px solid #b9d0a3", borderRadius: "15px"}} /> : label === "Date of Birth" ? <Form.Control type="date" className={"h-75"} {...register(label, { required })} style={{border: "2px solid #b9d0a3"}} /> : <Form.Control className={"h-75"} {...register(label, { required })} style={{border: "2px solid #b9d0a3"}} />}
    </Form.Group>
    </Row>
  );

  const Select = React.forwardRef(({ onChange, onBlur, name, value }, ref) => (
    <>
      <Form.Select name={name} ref={ref} onChange={onChange} onBlur={onBlur} value={value} style={{width: "100%"}}>
        <option value="Parent">Parent</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Child">Child</option>
      </Form.Select>
    </>
  ));

  const FormTable = ({family, handleChange}) => (
    <Col lg={6} className="mt-2">
    <Table striped bordered hover>
    <thead>
      <tr>
        <th className="col-2">Name</th>
        <th className="col-2">Date of Birth</th>
        <th className="col-3">Relationship Status</th>
      </tr>
    </thead>
    <tbody>
        {
            family && family.map((el, index) => 
            (
            <tr key={index}>
                <td > <Form.Control label="Name" value={el?.name || ""}  onChange={(e) => handleChange(e, "name", index)}/></td>
                <td> <Form.Control type="date"  label="Date of Birth" value={el?.date || ""}  onChange={(e) => handleChange(e, "date", index)} style={{border: "2px solid #b9d0a3", borderRadius: "5px"}}/></td>
                <td> <Select label="Relationship Status" onChange={(e) => handleChange(e, "status", index)} value={el?.status}/></td>
            </tr>
            )
            )
        }

    </tbody>
  </Table>
  </Col>
  )

const FormComponent = () => {
    const [family, setFamily] = React.useState([{}])
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSubmit = data => {
    const newData = {
        ...data,
        family: [...family]
    }
    dispatch(addData(newData))
    navigate("/")
    };
    const handleAddFamily = () => {
        setFamily([...family, {}])
    }

    const handleChange = (props, type, index) => {
        let updateFamily = [...family]
        switch(type){
            case "name":
            updateFamily[index] = {
                ...updateFamily[index],
                name: props.target.value
            }
            break;
            case "date":
            updateFamily[index] = {
                ...updateFamily[index],
                date: props.target.value
            }
            break;
            case "status":
            updateFamily[index] = {
                ...updateFamily[index],
                status: props.target.value
            }
            break;
            default:
            break;
        }
        setFamily(updateFamily)

    }


    return(
        <Container className="mt-4">
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Row lg={3} className="mb-5" >
        <Col>
        <Input label="Name" register={register} required />
        <Input label="Address" register={register} required />
        <Input label="eKtp" register={register} required />
        <Input label="Job" register={register} required />
        <Input label="Date of Birth" register={register} required />
        </Col>
        <Col className="ms-5">
        <Input label="Phone" register={register} required />
        <Row lg={2} className="justify-content-around">
        <Col lg={1}>
            <Button size="sm" as="input" type="button" value="Add Phone" style={{background: "#4d73be", marginLeft: "17px", width: "100px"}}/>
        </Col>

        </Row>

        </Col>
      </Row>
      <p style={{marginBottom: "2px !important"}}><b>Family Member{family.length > 1 ? "s" : ""} ({family.length})</b></p>
      <Row lg={2}>
        <FormTable family={family} handleChange={handleChange}/>
      </Row>
        <Stack direction="vertical" gap={3} style={{width: "20%"}}>
        <Button size="sm" as="input" type="button" value="Add Family members" style={{background: "#4d73be"}} onClick={()=>handleAddFamily()}/>
        <Button size="sm" as="input" type="submit" value="Submit" style={{background: "#4d73be"}}/>
        </Stack>
      </Form>
        </Container>
    )
}

export default FormComponent