import Router from "next/router";
import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  Form,
  FormControl,
  Button,
  FormText,
  Col,
} from "react-bootstrap";
import { startLoadingBar, stopLoadingBar } from "../../lib/loading";
import { EmailInfo } from "../../types/Email";

const FormEmail = () => {
  // state of submitted email
  const [submitted, setSubmitted] = useState(false);
  const [failed, setFailed] = useState(false);
  const [sending, setSending] = useState(false);

  // state of value in form
  const [nameForm, setNameForm] = useState("");
  const [surnameForm, setSurnameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");
  const [msgForm, setMsgForm] = useState("");

  // state of param in error message
  const [errors, setErrors] = useState(new Map<string, string>());

  // passing a clone of errors map to setErrors in order to trigger the state update
  const updateErrors = (errorsToAdd: any) => {
    const newErrors = new Map<string, string>();
    for (const key of Object.keys(errorsToAdd)) {
      const value = errorsToAdd[key];
      newErrors.set(key, value);
    }
    setErrors(newErrors);
  };

  // manage information form
  const sendInformation = async (event: any) => {
    event.preventDefault();

    startLoadingBar();

    setSending(true);

    const infoEmail: EmailInfo = {
      name: event.target.nameValue.value,
      surname: event.target.surnameValue.value,
      email: event.target.emailValue.value,
      phone: event.target.phoneValue.value,
      message: event.target.messageValue.value,
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ infoEmail }),
    });

    if (response.status === 200) {
      setSubmitted(true);
    } else if (response.status === 400) {
      const body = await response.json();
      updateErrors(body);
    } else if(response.status === 502) {
      setFailed(true);
    } else {
      console.error("Error sending email");
      console.error(response);
    }

    setSending(false);

    stopLoadingBar();
  };

  if (submitted) {
    return (
      <div className="infoMessage row justify-content-center align-content-center">
        <p className="font-weight-bold col my-4">
          Messaggio inviato con successo!
        </p>
        <div className="w-100" />
        <p className="col my-4">
          Il sistema ti ha inviato un&apos;email
          di conferma.<br />Se non la trovi per favore controlla nella posta
          indesiderata.
        </p>
        <div className="w-100" />
        <button
          className="btn btn-lg custom-button about-explorer-btn mx-auto mt-4 text-center d-block col"
          onClick={() => Router.push("/")}
        >
          Torna alla Homepage
        </button>
      </div>
    );
  }

  if (failed) {
    return (
      <div className="infoMessage row justify-content-center align-content-center">
        <p className="text-danger font-weight-bold col my-4">
          Si è verificato un errore con l&apos;invio del messaggio.
        </p>
        <div className="w-100" />
        <p className="col my-4">
          Per favore riprovare più tardi.
        </p>
        <div className="w-100" />
        <button
          className="btn btn-lg custom-button about-explorer-btn mx-auto mt-4 text-center d-block col"
          onClick={() => Router.push("/")}
        >
          Torna alla Homepage
        </button>
      </div>
    );
  }

  return (
    <Form onSubmit={sendInformation}>

      <p className="mt-5 text-center">
        Completa i campi per inviarmi un messaggio
      </p>

      <FormText className="text-center font-italic mb-5">
        I campi con * sono obbligatori
      </FormText>

      <FormGroup>
        <div className="form-row pt-2">
          <div className="col-md-6 my-2">
            <FormLabel>NOME*</FormLabel>
            <Col>
              <FormControl
                type="text"
                placeholder="Mario"
                value={nameForm}
                onChange={(e) => {
                  setNameForm(e.target.value);
                }}
                id="nameValue"
                name="nameValue"
              />
              {errors.has("name") &&  
                <div key={"name"} className="text-center my-2">
                  <p className="text-danger">{errors.get("name")}</p>
                </div>
              }
            </Col>
          </div>

          <div className="col-md-6 my-2">
            <FormLabel>COGNOME*</FormLabel>
            <Col>
              <FormControl
                type="text"
                placeholder="Rossi"
                value={surnameForm}
                onChange={(e) => {
                  setSurnameForm(e.target.value);
                }}
                id="surnameValue"
                name="surnameValue"
              />
              {errors.has("surname") &&  
                <div key={"surname"} className="text-center my-2">
                  <p className="text-danger">{errors.get("surname")}</p>
                </div>
              }
            </Col>
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 my-2">
            <FormLabel>EMAIL*</FormLabel>
            <Col>
              <FormControl
                type="email"
                placeholder="mario.rossi@email.it"
                value={emailForm}
                onChange={(e) => {
                  setEmailForm(e.target.value);
                }}
                id="emailValue"
                name="emailValue"
              />
              {errors.has("email") &&  
                <div key={"email"} className="text-center my-2">
                  <p className="text-danger">{errors.get("email")}</p>
                </div>
              }
            </Col>
          </div>

          <div className="col-md-6 my-2">
            <FormLabel>TELEFONO</FormLabel>
            <Col>
              <FormControl
                type="tel"
                placeholder="+39 XXX-XXX-XXXX"
                value={phoneForm}
                onChange={(e) => {
                  setPhoneForm(e.target.value);
                }}
                id="phoneValue"
                name="phoneValue"
              />
              {errors.has("phone") &&  
                <div key={"phone"} className="text-center my-2">
                  <p className="text-danger">{errors.get("phone")}</p>
                </div>
              }
            </Col>
          </div>
        </div>

        <FormLabel className="mt-2">MESSAGGIO*</FormLabel>
        <Col>
          {errors.has("message") &&  
            <div key={"message"} className="text-center my-2">
              <p className="text-danger">{errors.get("message")}</p>
            </div>
          }
          <textarea
            id="messageValue"
            name="messageValue"
            className="form-control"
            value={msgForm}
            placeholder={
              `Buongiorno,

vorrei chiedere maggiori informazioni riguardo al lavoro "X".

Cordiali Saluti,
Mario Rossi.`
          }
            onChange={(e) => {
              setMsgForm(e.target.value);
            }}
            rows={6}
          />
        </Col>

        <Button type="submit" className="custom-button custom-button-dark mt-4 mb-4 px-5" disabled={sending}>
          Invio
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormEmail;
