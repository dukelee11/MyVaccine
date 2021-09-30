import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

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
    fetch('/update', {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(patientData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then(() => setMakeUpdate(true))
      .catch((err) => console.log('POST REQUEST ERROR: ', err));
  }

  if (makeUpdate) {
    return (
      <Redirect
        to={{
          pathname: '/success'
        }}
      />
    );
  }

  return (
    <section>
      <h2>Update Here!!!</h2>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            required
            id="fullName"
            value={fullName}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="text"
            required
            id="dob"
            value={dob}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            required
            id="phoneNo"
            value={phoneNo}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="text"
            required
            id="email"
            value={email}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="stAddress">Street Address</label>
          <input
            type="text"
            required
            id="stAddress"
            value={stAddress}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input
            type="text"
            required
            id="city"
            value={city}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input
            type="text"
            required
            id="state"
            value={state}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            required
            id="zipCode"
            value={zipCode}
            onChange={updateValue}
          ></input>
        </div>
        <div>
          <label htmlFor="aptDate">Appointment Date</label>
          <select required id="aptDate" value={aptDate} onChange={updateValue}>
            <option value="">--Please choose an option--</option>
            {aptDateOptions}
          </select>
        </div>
        <div>
          <label htmlFor="aptTime">Appointment Time</label>
          <select required id="aptTime" value={aptTime} onChange={updateValue}>
            <option value="">--Please choose an option--</option>
            {aptTimeOptions}
          </select>
        </div>
        <div>
          <label htmlFor="doseType">Dose Type</label>
          <select
            required
            id="doseType"
            value={doseType}
            onChange={updateValue}
          >
            <option value="">--Please choose an option--</option>
            {doseOptions}
          </select>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              history.replace('/');
            }}
          >
            Cancel
          </button>
        </div>
        <div>
          <button type="submit">Save Changes</button>
        </div>
      </form>
    </section>
  );
}
