import React, { useRef, useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import classes from './MakeApt.module.scss';

export default function MakeApt() {
  const [makeUpdate, setMakeUpdate] = useState(false);
  const [state, setState] = useState(null);

  const history = useHistory();

  const appointmentDates = [
    'October 2, 2021 Sat',
    'October 4, 2021 Mon',
    'October 5, 2021 Tues',
    'October 6, 2021 Wed',
    'October 7, 2021 Thurs',
    'October 8, 2021 Fri',
    'October 9, 2021 Sat',
    'October 11, 2021 Mon',
    'October 12, 2021 Tues',
    'October 13, 2021 Wed',
  ];

  const appointmentTimes = [
    '10:00AM',
    '11:00AM',
    '12:00PM',
    '1:00PM',
    '2:00PM',
    '3:00PM',
    '4:00PM',
    '5:00PM',
  ];

  const doseTypes = [
    'Johnson & Johnson',
    '1st dose - Moderna',
    '2nd dose - Moderna',
    '1st dose - Pfizer',
    '2nd dose - Pfizer',
  ];

  const aptDateOptions = appointmentDates.map((dates) => {
    return <option value={dates}>{dates}</option>;
  });

  const aptTimeOptions = appointmentTimes.map((times) => {
    return <option value={times}>{times}</option>;
  });

  const doseOptions = doseTypes.map((doses) => {
    return <option value={doses}>{doses}</option>;
  });

  // const body = {};

  // function getValue(e) {
  //   e.preventDefault();
  //   body[e.target.id] = e.target.value;
  // }

  const fullNameInputRef = useRef();
  const dobInputRef = useRef();
  const phoneNoInputRef = useRef();
  const emailInputRef = useRef();
  const stAddressInputRef = useRef();
  const cityInputRef = useRef();
  const stateInputRef = useRef();
  const zipCodeInputRef = useRef();
  const aptDateInputRef = useRef();
  const aptTimeInputRef = useRef();
  const doseTypeInputRef = useRef();

  function submitForm(e) {
    e.preventDefault();

    const enteredFullName = fullNameInputRef.current.value;
    const enteredDob = dobInputRef.current.value;
    const enteredPhoneNo = phoneNoInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredStAddress = stAddressInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredState = stateInputRef.current.value;
    const enteredZipCode = zipCodeInputRef.current.value;
    const enteredAptDate = aptDateInputRef.current.value;
    const enteredAptTime = aptTimeInputRef.current.value;
    const enteredDoseType = doseTypeInputRef.current.value;

    const newPatientData = {
      fullName: enteredFullName,
      dob: enteredDob,
      phoneNo: enteredPhoneNo,
      email: enteredEmail,
      stAddress: enteredStAddress,
      city: enteredCity,
      state: enteredState,
      zipCode: enteredZipCode,
      aptDate: enteredAptDate,
      aptTime: enteredAptTime,
      doseType: enteredDoseType,
    };

    fetch('/api/makeapt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPatientData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setMakeUpdate(true);
          setState(data);
        }
      })
      // .then(() => setMakeUpdate(true))
      .catch((err) => console.log('POST REQUEST ERROR: ', err));
  }

  // if (makeUpdate) {
  //   return (
  //     <Redirect
  //       to={{
  //         pathname: '/success',
  //       }}
  //     />
  //   );
  // }

  if (makeUpdate && state) {
    return (
      <Redirect
        to={{
          pathname: '/makeaptsuccess',
          state,
        }}
      />
    );
  }

  return (
    <section className={classes.section}>
      <Container
        className={`justify-content-center text-center align-items-center`}
      >
        <h1>Schedule Appointment</h1>
        <Container
          className={`justify-content-start text-start align-items-start ${classes.infoContainer}`}
        >
          <form onSubmit={submitForm}>
            <Row>
              <h2>Appointment Details</h2>
            </Row>
            <Row>
              <Col>
                <div>
                  <label htmlFor="aptDate">Appointment Date</label>
                  <p>
                    <select
                      required
                      id="aptDate"
                      ref={aptDateInputRef}
                      className={classes.formInput}
                    >
                      <option value="">--Please choose an option--</option>
                      {aptDateOptions}
                    </select>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="aptTime">Appointment Time</label>
                  <p>
                    <select
                      required
                      id="aptTime"
                      ref={aptTimeInputRef}
                      className={classes.formInput}
                    >
                      <option value="">--Please choose an option--</option>
                      {aptTimeOptions}
                    </select>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <label htmlFor="doseType">Dose Type</label>
                  <p>
                    <select
                      required
                      id="doseType"
                      ref={doseTypeInputRef}
                      className={classes.formInput}
                    >
                      <option value="">--Please choose an option--</option>
                      {doseOptions}
                    </select>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <h2>Personal Information</h2>
            </Row>
            <Row>
              <Col>
                <div>
                  <label htmlFor="fullName">Full Name</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="fullName"
                      ref={fullNameInputRef}
                      className={classes.formInput}
                    ></input>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="dob">Date of Birth</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="dob"
                      ref={dobInputRef}
                      className={classes.formInput}
                    ></input>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <label htmlFor="phoneNo">Phone Number</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="phoneNo"
                      ref={phoneNoInputRef}
                      className={classes.formInput}
                    ></input>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="email">Email Address</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="email"
                      ref={emailInputRef}
                      className={classes.formInput}
                    ></input>
                  </p>
                </div>
              </Col>
            </Row>
            <Row>
              <div>
                <label htmlFor="stAddress">Street Address</label>
                <p>
                  <input
                    type="text"
                    required
                    id="stAddress"
                    ref={stAddressInputRef}
                    className={classes.address}
                  ></input>
                </p>
              </div>
            </Row>
            <Row>
              <Col>
                <div>
                  <label htmlFor="city">City</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="city"
                      ref={cityInputRef}
                      className={classes.cityStateZip}
                    ></input>
                  </p>
                </div>
              </Col>

              <Col>
                <div>
                  <label htmlFor="state">State</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="state"
                      ref={stateInputRef}
                      className={classes.cityStateZip}
                    ></input>
                  </p>
                </div>
              </Col>
              <Col>
                <div>
                  <label htmlFor="zipCode">Zip Code</label>
                  <p>
                    <input
                      type="text"
                      required
                      id="zipCode"
                      ref={zipCodeInputRef}
                      className={classes.cityStateZip}
                    ></input>
                  </p>
                </div>
              </Col>
            </Row>
            <Row className={classes.buttonRow}>
              <Col className={classes.cancelContainer}>
                <div>
                  <Button
                    type="button"
                    variant="outline-primary"
                    className={classes.button}
                    onClick={() => {
                      history.replace('/');
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Col>
              <Col className={classes.saveContainer}>
                <div>
                  <Button type="submit" className={classes.button}>
                    Schedule Appointment
                  </Button>
                </div>
              </Col>
            </Row>
          </form>
        </Container>
      </Container>
    </section>
  );
}
