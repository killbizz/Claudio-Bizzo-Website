import Link from "next/link";
import Router from "next/router";
import React, { useState } from "react";
import {
  FormGroup,
  FormLabel,
  Form,
  FormControl,
  Button,
  FormText,
} from "react-bootstrap";
import { EmailInfo } from "../../types/Email";

const FormEmail = () => {

  // state of submitted email
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  // state of value in form
  const [nameForm, setNameForm] = useState("");
  const [surnameForm, setSurnameForm] = useState("");
  const [emailForm, setEmailForm] = useState("");
  const [phoneForm, setPhoneForm] = useState("");
  const [msgForm, setMsgForm] = useState("");

  // state of param in error message
  const [errorParami18n, setErrorParami18n] = useState("generalFailedSend");

  // manage information form
  const sendInformation = async (event: any) => {
    event.preventDefault();


    setSending(true);
    const infoEmail: EmailInfo = {
      name: event.target.nameValue.value,
      surname: event.target.surnameValue.value,
      email: event.target.emailValue.value,
      phone: event.target.phoneValue.value,
      message: event.target.messageValue.value,
    };

    const data = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ infoEmail }),
    });

    if (data.status === 200) {
      setSubmitted(true);
    } else {
      if (data.status === 400) setErrorParami18n("fillFailedSend");

      setFailed(true);
    }

    setSending(false);
  };

  if (sending) {
    return (
      <div className="spinner-border text-light infoMessage" role="status">
        <span className="sr-only">sendEmail.sendingSR</span>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="infoMessage row">
        <p className="text-success col">Messaggio inviato con successo! Il sistema ti ha inviato un&apos;email di conferma, se non la trovi per favore controlla nella posta indesiderata.</p>

        {/* <Link href="/" className="simpleLink" title="Home">
          sendEmail.buttonBack
        </Link> */}
        <div className="w-100" />
        <button
          className="btn btn-lg custom-button about-explorer-btn mx-auto text-center d-block col"
          onClick={() =>
            Router.push("/")
          }
        >
          Torna alla Homepage
        </button>
      </div>
    );
  }

  return (
    <Form onSubmit={sendInformation}>

      <p className="my-5 text-center">
        Completa i campi per inviarmi un messaggio
      </p>

      {failed ? (
        <div className="text-center">
          <p className="text-danger">errori se email non viene inviata</p>
        </div>
      ) : null}

      <FormText className="text-center mb-5">I campi con * sono necessari</FormText>
      <FormGroup>
        <div className="form-row">
          <div className="col">
            <FormLabel>NOME*</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="Mario"
              value={nameForm}
              onChange={(e) => {
                setNameForm(e.target.value);
              }}
              id="nameValue"
              name="nameValue"
            />
          </div>

          <div className="col">
            <FormLabel>COGNOME*</FormLabel>
            <FormControl
              type="text"
              required
              placeholder="Rossi"
              value={surnameForm}
              onChange={(e) => {
                setSurnameForm(e.target.value);
              }}
              id="surnameValue"
              name="surnameValue"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="col">
            <FormLabel>EMAIL*</FormLabel>
            <FormControl
              type="email"
              required
              placeholder="mario.rossi@email.it"
              value={emailForm}
              onChange={(e) => {
                setEmailForm(e.target.value);
              }}
              id="emailValue"
              name="emailValue"
            />
          </div>

          <div className="col">
            <FormLabel>TELEFONO</FormLabel>
            <FormControl
              type="tel"
              placeholder="+39 XXX-XXX-XXXX"
              value={phoneForm}
              onChange={(e) => {
                setPhoneForm(e.target.value);
              }}
              id="phoneValue"
              name="phoneValue"
              pattern="[0-9]{10}"
            />
          </div>
        </div>

        <FormLabel>MESSAGGIO*</FormLabel>
        <textarea
          required
          id="messageValue"
          name="messageValue"
          className="form-control"
          value={msgForm}
          onChange={(e) => {
            setMsgForm(e.target.value);
          }}
          rows={6}
        />

        <Button type="submit" className="my-5 px-5" variant="light">
          SUBMIT
        </Button>
      </FormGroup>
    </Form>
  );
};

export default FormEmail;
