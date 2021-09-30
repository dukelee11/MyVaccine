import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import classes from './ConfirmApt.module.scss';

export default function ConfirmApt(props) {
  const {
    fullName,
    dob,
    phoneNo,
    email,
    stAddress,
    city,
    state,
    zipCode,
    aptDate,
    aptTime,
    doseType,
    confirmationNo,
  } = props.location.state;

  const [makeUpdate, setMakeUpdate] = useState(false);
  const [deleted, setDeleted] = useState(false);

  function cancelApt(e) {
    e.preventDefault();
    // console.log(confirmationNo);
    fetch(`/delete/${confirmationNo}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(props.location.state),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => setDeleted(true))
      .catch((err) => console.log('GET REQUEST ERROR: ', err));
  }

  if (deleted) {
    return (
      <Redirect
        to={{
          pathname: '/success',
        }}
      />
    );
  }

  function makeChanges(e) {
    e.preventDefault();
    setMakeUpdate(true);
  }

  if (makeUpdate) {
    return (
      <Redirect
        to={{
          pathname: '/update',
          state: props.location.state,
        }}
      />
    );
  }

  return (
    <section className={classes.confirmAptSection}>
      <Container className="text-center">
        <Row>
          <h1>Confirm Appointment</h1>
          <p className={`${classes.p}`}>
            Please confirm your appointment & personal information <br /> that
            you entered to reserve your vaccine.
          </p>
        </Row>
        <Row>
          <Col>
            <Row>
              <Col md={{ span: 2, offset: 5 }} className={classes.header}>
                <p>Name</p>
              </Col>
              <Col md={{ span: 5, offset: 0 }} className={classes.info}>
                <p>{fullName}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }} className={classes.header}>
                <p>DOB</p>
              </Col>
              <Col md={{ span: 5, offset: 0 }} className={classes.info}>
                <p>{dob}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }} className={classes.header}>
                <p>Phone #</p>
              </Col>
              <Col md={{ span: 5, offset: 0 }} className={classes.info}>
                <p>{phoneNo}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }} className={classes.header}>
                <p>Email</p>
              </Col>
              <Col md={{ span: 5, offset: 0 }} className={classes.info}>
                <p>{email}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 5 }} className={classes.header}>
                <p>Address</p>
              </Col>
              <Col md={{ span: 5, offset: 0 }} className={classes.info}>
                <p>
                  {stAddress} <br />
                  {city}, {state} {zipCode}
                </p>
              </Col>
            </Row>
            {/* <p>Name: {fullName}</p>
            <p>DOB: {dob}</p>
            <p>Phone #: {phoneNo}</p>
            <p>Email: {email}</p>
            <p>
              Address: {stAddress} {city} {state} {zipCode}
            </p> */}
          </Col>
          <Col>
            {/* <p>Date: {aptDate}</p>
            <p>Time: {aptTime}</p>
            <p>Dose Type: {doseType}</p> */}
            <Row>
              <Col md={{ span: 2, offset: 1 }} className={classes.header}>
                <p>Date</p>
              </Col>
              <Col md={{ span: 6, offset: 0 }} className={classes.info}>
                <p>{aptDate}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 1 }} className={classes.header}>
                <p>Time</p>
              </Col>
              <Col md={{ span: 6, offset: 0 }} className={classes.info}>
                <p>{aptTime}</p>
              </Col>
            </Row>
            <Row>
              <Col md={{ span: 2, offset: 1 }} className={classes.header}>
                <p>Dose Type</p>
              </Col>
              <Col md={{ span: 6, offset: 0 }} className={classes.info}>
                <p>{doseType}</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className={classes.cancelAptContainer}>
            <div>
              <Button onClick={cancelApt} variant="outline-danger" className={classes.button}>
                Cancel Appointment
              </Button>
            </div>
          </Col>
          <Col className={classes.makeChangesContainer}>
            <div>
              <Button onClick={makeChanges} className={classes.button}>Make Changes</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
