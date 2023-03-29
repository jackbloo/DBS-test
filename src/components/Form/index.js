import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container, Row, Col, Button, Form, Stack } from "react-bootstrap/";
import { useDispatch } from "react-redux";
import { addData } from "../../features/data/dataSlice";
import { useNavigate } from "react-router-dom";
import { Input, FormTable, displayError } from "./utils";

const FormComponent = () => {
  const [family, setFamily] = useState([]);
  const [extraPhone, setExtraPhone] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const newData = {
      ...data,
    };
    dispatch(addData(newData));
    navigate("/");
  };

  const handleAdd = (type) => {
    if (type === "family") {
      setFamily([...family, {}]);
    } else {
      // Because 1 person can only have 3 phone numbers in Indonesia
      if (extraPhone.length >= 2) {
        return;
      }
      setExtraPhone([...extraPhone, {}]);
    }
  };

  const changeBorder = (label, index, type) => {
    if (errors[label]) {
      if (typeof index != "undefined" && typeof type != "undefined") {
        if (errors[label][index]) {
          if (errors[label][index][type]) {
            return "2px solid red";
          } else {
            return "2px solid #b9d0a3";
          }
        }
      } else if (typeof index != "undefined") {
        if (errors[label][index]) {
          return "2px solid red";
        } else {
          return "2px solid #b9d0a3";
        }
      } else {
        return "2px solid red";
      }
    } else {
      return "2px solid #b9d0a3";
    }
  };

  return (
    <Container className="mt-4">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row lg={3} className="mb-5">
          <Col>
            <Input
              label="Name"
              register={register}
              required
              options={{
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please enter alphabet only",
                },
                maxLength: { value: 20, message: "The maximum length is 20" },
              }}
              changeBorder={changeBorder}
              errors={errors}
            />
            <Input
              label="Address"
              register={register}
              required
              changeBorder={changeBorder}
            />
            <Input
              label="eKtp"
              register={register}
              required
              options={{
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Please enter number only",
                },
                minLength: { value: 16, message: "The minimum length is 16" },
                maxLength: { value: 16, message: "The maximum length is 16" },
              }}
              changeBorder={changeBorder}
              errors={errors}
            />
            <Input
              label="Job"
              register={register}
              required
              options={{
                pattern: {
                  value: /^[A-Za-z]+$/i,
                  message: "Please enter alphabet only",
                },
              }}
              changeBorder={changeBorder}
              errors={errors}
            />
            <Input
              label="Date of Birth"
              register={register}
              required
              changeBorder={changeBorder}
              errors={errors}
            />
          </Col>
          <Col className="ms-5">
            <Input
              label="Phone"
              register={register}
              required
              options={{
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "Please enter number only",
                },
                minLength: { value: 11, message: "The minimum length is 11" },
                maxLength: { value: 12, message: "The maximum length is 12" },
              }}
              changeBorder={changeBorder}
              errors={errors}
            />
            {extraPhone &&
              extraPhone.map((el, index) => (
                <Row lg={2} className="justify-content-around" key={index}>
                  <Col lg={6}>
                    <Form.Control
                      type="number"
                      className="h-75"
                      {...register(`extraPhone.${index}`, {
                        required: {
                          value: true,
                          message: "The extra phone number is required",
                        },
                        minLength: {
                          value: 11,
                          message: "The minimum length is 11",
                        },
                        maxLength: {
                          value: 12,
                          message: "The maximum length is 12",
                        },
                      })}
                      style={{
                        border: changeBorder(`extraPhone`, index),
                        borderRadius: "5px",
                        width: "100%",
                        marginLeft: "110px",
                      }}
                    />
                  </Col>
                </Row>
              ))}
            <Row lg={2} className="justify-content-around">
              <Col lg={1}>
                <Button
                  size="sm"
                  as="input"
                  type="button"
                  value="Add Phone"
                  style={{
                    background: "#4d73be",
                    marginLeft: "17px",
                    width: "100px",
                  }}
                  onClick={() => handleAdd()}
                  disabled={extraPhone?.length >= 2}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          {errors && Object.keys(errors).length > 0 && displayError(errors)}
        </Row>
        <p style={{ marginBottom: "2px !important" }}>
          <b>
            Family Member{family.length > 1 ? "s" : ""} ({family.length})
          </b>
        </p>
        <Row lg={2}>
          <FormTable
            family={family}
            register={register}
            changeBorder={changeBorder}
          />
        </Row>
        <Stack
          direction="vertical"
          gap={3}
          style={{ width: "20%", marginTop: "10px" }}
        >
          <Button
            size="sm"
            as="input"
            type="button"
            value="Add Family members"
            style={{ background: "#4d73be" }}
            onClick={() => handleAdd("family")}
          />
          <Button
            size="sm"
            as="input"
            type="submit"
            value="Submit"
            style={{ background: "#4d73be" }}
          />
        </Stack>
      </Form>
    </Container>
  );
};

export default FormComponent;
