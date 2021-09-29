import React from 'react';

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

const body = {};

function getValue(e) {
  e.preventDefault();
  body[e.target.id] = e.target.value;
}

function submitForm(e) {
  e.preventDefault();
  fetch('/makeapt', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('POST REQUEST ERROR: ', err));
}

export default function MakeApt() {
  return (
    <section>
      <h1>Schedule Appointment (React)</h1>
      <form>
        <div>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" required id="fullName" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="text" required id="dob" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="phoneNo">Phone Number</label>
          <input type="text" required id="phoneNo" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="text" required id="email" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="stAddress">Street Address</label>
          <input
            type="text"
            required
            id="stAddress"
            onChange={getValue}
          ></input>
        </div>
        <div>
          <label htmlFor="city">City</label>
          <input type="text" required id="city" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="state">State</label>
          <input type="text" required id="state" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="zipCode">Zip Code</label>
          <input type="text" required id="zipCode" onChange={getValue}></input>
        </div>
        <div>
          <label htmlFor="aptDate">Appointment Date</label>
          <select required id="aptDate" onChange={getValue}>
            <option value="">--Please choose an option--</option>
            {aptDateOptions}
          </select>
        </div>
        <div>
          <label htmlFor="aptTime">Appointment Time</label>
          <select required id="aptTime" onChange={getValue}>
            <option value="">--Please choose an option--</option>
            {aptTimeOptions}
          </select>
        </div>
        <div>
          <label htmlFor="doseType">Dose Type</label>
          <select required id="doseType" onChange={getValue}>
            <option value="">--Please choose an option--</option>
            {doseOptions}
          </select>
        </div>
        <div>
          <button onClick={submitForm}>Submit</button>
        </div>
      </form>
    </section>
  );
}
