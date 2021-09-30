import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

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
    <section>
      <h1>Confirm Appointment</h1>
      <p>
        Please confirm your reservation & personal information that you entered
        to reserve your vaccine.
      </p>
      <p>Name: {fullName}</p>
      <p>DOB: {dob}</p>
      <p>Phone #: {phoneNo}</p>
      <p>Email: {email}</p>
      <p>
        Address: {stAddress} {city} {state} {zipCode}
      </p>
      <p>Date: {aptDate}</p>
      <p>Time: {aptTime}</p>
      <p>Dose Type: {doseType}</p>
      <div>
        <button onClick={cancelApt}>Cancel Appointment</button>
      </div>
      <div>
        <button onClick={makeChanges}>Make Changes</button>
      </div>
    </section>
  );
}
