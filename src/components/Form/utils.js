import React from "react";
import {Row, Col, Form, Table} from 'react-bootstrap';

export const Input = ({ label, register, required, options, changeBorder }) => (
    <Row lg={2}>
     <Form.Label style={{fontWeight: 600}}>{label}</Form.Label>
      <Form.Group>
        {label === "Address" ? <Form.Control className="mb-2" as="textarea" rows={3} {...register(label, { required:{value:true, message:`The ${label} is required`}, maxLength: {value: 100, message: "The maximum Length is 100"} })} style={{border: changeBorder(label), borderRadius: "15px"}} /> : label === "Date of Birth" ? <Form.Control type="date" className={"h-75"} {...register(label, { required: {value:true, message:`The ${label} is required`} })} style={{border: changeBorder(label)}} /> : <Form.Control className={"h-75"} {...register(label, { required: {value:true, message:`The ${label} is required`}, ...options})} style={{border: changeBorder(label)}} />}
    </Form.Group>
    </Row>
  );

  export const Select = React.forwardRef(({ onChange, onBlur, name, changeBorder, index }, ref) => (
    <>
      <Form.Select name={name} ref={ref} onChange={onChange} onBlur={onBlur} style={{width: "100%", border: changeBorder("family",index,"status")}}>
        <option value="Parent">Parent</option>
        <option value="Brother">Brother</option>
        <option value="Sister">Sister</option>
        <option value="Child">Child</option>
      </Form.Select>
    </>
  ));

  export   const FormTable = ({family, register, changeBorder}) => (
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
                <td > <Form.Control label="Name" {...register(`family.${index}.name`, { required:{value: true, message:"The Name of Family Member is required"}, pattern:{value: /^[A-Za-z]+$/i, message:"Please enter alphabet only"}, maxLength: {value: 20, message: "The maximum length is 20"}  })} style={{border: changeBorder("family",index,"name"), borderRadius: "5px"}} /></td>
                <td> <Form.Control type="date"  label="Date of Birth" {...register(`family.${index}.date`, { required:{value: true, message:"The Date of Birh of Family Member is required"}})}  style={{border: changeBorder("family", index, "date"), borderRadius: "5px"}}/></td>
                <td> <Select label="Relationship Status" {...register(`family.${index}.status`, { required:{value: true, message:"The Relationship status of Family Member is required"} })} changeBorder={changeBorder} index={index}/></td>
            </tr>
            )
            )
        }

    </tbody>
  </Table>
  </Col>
  )

  export const displayError = (errors) => {
    return(
      <>
      <p style={{color: "red"}}><b>Errors</b></p>
      {Object.keys(errors).map((el, index) => {
        if(errors[el].length){
          return errors[el].map((element, i) => <p key={`${i}-${el}`} style={{color: "red"}}>{el}-{i + 1}: {el === "family" ? `Please enter the correct ${Object.keys(element).join(",")}`  : element?.message || `Please enter the correct ${el}`} </p>)
        }else{
          return(
            <p key={`${index}-${el}`} style={{color: "red"}}>{el}: {errors[el]?.message || `Please enter the correct ${el}`} </p>
          )
        }

      })}
      </>
    )
  }
  