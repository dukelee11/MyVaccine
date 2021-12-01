import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import classes from './Update.module.scss';

export default function Update(props) {
  const [patientData, setPatientData] = useState(props.location.state);
  const [makeUpdate, setMakeUpdate] = useState(false);

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
  } = patientData;

  function updateValue(e) {
    e.preventDefault();
    const newObj = Object.assign({}, { ...patientData });
    newObj[e.target.id] = e.target.value;
    setPatientData(newObj);
  }

  function submitForm(e) {
    e.preventDefault();
    // console.log(patientData);
    fetch('/api/update', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(patientData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          setMakeUpdate(true);
          setPatientData(data);
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

  if (makeUpdate && patientData) {
    return (
      <Redirect
        to={{
          pathname: '/updatesuccess',
          state: patientData,
        }}
      />
    );
  }

  return (
    <section className={classes.section}>
      <Container
        className={`justify-content-center text-center align-items-center`}
      >
        <h1>Update Appointment Details</h1>
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
                      value={aptDate}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={aptTime}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={doseType}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={fullName}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={dob}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={phoneNo}
                      className={classes.formInput}
                      onChange={updateValue}
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
                      value={email}
                      className={classes.formInput}
                      onChange={updateValue}
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
                    value={stAddress}
                    className={classes.address}
                    onChange={updateValue}
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
                      value={city}
                      className={classes.cityStateZip}
                      onChange={updateValue}
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
                      value={state}
                      className={classes.cityStateZip}
                      onChange={updateValue}
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
                      value={zipCode}
                      className={classes.cityStateZip}
                      onChange={updateValue}
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
                    Save Changes
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
