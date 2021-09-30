import React, { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function MakeApt() {
  const [makeUpdate, setMakeUpdate] = useState(false);

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

    fetch('/makeapt', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newPatientData),
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
      <h1>Schedule Appointment (React)</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            required
            id="fullName"
            ref={fullNameInputRef}
          ></input>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" required id="dob" ref={dobInputRef}></input>
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input
            type="text"
            required
            id="phoneNo"
            ref={phoneNoInputRef}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" required id="email" ref={emailInputRef}></input>
        </div>
        <div>
          <label htmlFor="stAddress">Street Address</label>
          <input
            type="text"
            required
            id="stAddress"
            ref={stAddressInputRef}
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" required id="city" ref={cityInputRef}></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" required id="state" ref={stateInputRef}></input>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            type="text"
            required
            id="zipCode"
            ref={zipCodeInputRef}
          ></input>
        </div>
        <div>
          <label htmlFor="aptDate">Appointment Date</label>
          <select required id="aptDate" ref={aptDateInputRef}>
            <option value="">--Please choose an option--</option>
            {aptDateOptions}
          </select>
        </div>
        <div>
          <label htmlFor="aptTime">Appointment Time</label>
          <select required id="aptTime" ref={aptTimeInputRef}>
            <option value="">--Please choose an option--</option>
            {aptTimeOptions}
          </select>
        </div>
        <div>
          <label htmlFor="doseType">Dose Type</label>
          <select required id="doseType" ref={doseTypeInputRef}>
            <option value="">--Please choose an option--</option>
            {doseOptions}
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </section>
  );
}
