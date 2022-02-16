import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "./Input";
import Button from "./Button";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`;

const SectionDiv = styled.section`
  background-color: #eee;
  border-top: solid 2px palevioletred;
  width: 500px;
  box-shadow: 0px 2px 3px 3px rgb(0, 0, 0, 0.3);
`;

const compoundInterest = (deposit, contribution, years, rate) => {
  let total = deposit;
  for (let i = 0; i < years; i++) {
    total = (total + contribution) * (rate + 1);
  }
  return Math.round(total);
};

export const Container = () => {
  const [balance, setBalance] = useState("");
  const validate = () => {
    const errors = {};
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleSubmit = ({ deposit, contribution, years, rate }) => {
    const val = compoundInterest(
      Number(deposit),
      Number(contribution),
      Number(years),
      Number(rate)
    );
    console.log(val);
    setBalance(formatter.format(val));
  };

  const objectValidate = Yup.object({
    deposit: Yup.number().required("Obligatorio").typeError("Debe ser numero"),
    contribution: Yup.number()
      .required("Obligatorio")
      .typeError("Debe ser numero"),
    years: Yup.number().required("Obligatorio").typeError("Debe ser numero"),
    rate: Yup.number()
      .required("Obligatorio")
      .typeError("Debe ser numero")
      .min(0, "El valor minimo es 0")
      .max(1, "El valor maximo es 1"),
  });

  return (
    <div>
      <ContainerDiv>
        <SectionDiv>
          <Formik
            initialValues={{
              deposito: "",
              contribution: "",
              years: "",
              rate: "",
            }}
            onSubmit={handleSubmit}
            validationSchema={objectValidate}
          >
            {(formik) => (
              <Form>
                <Input label="Deposito Inicial" name="deposito"></Input>
                <Input label="Contribucion Anual" name="contribution"></Input>
                <Input label="Años" name="years"></Input>
                <Input label="Interes estimado" name="rate"></Input>

                <Button type="submit">Enviar</Button>
              </Form>
            )}
          </Formik>

          {balance !== "" ? `Balance final ${balance}` : null}
        </SectionDiv>
      </ContainerDiv>
    </div>
  );
};

export default Container;
