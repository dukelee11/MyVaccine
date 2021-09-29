import React from 'react';

const body = {};

function getValue(e) {
  e.preventDefault();
  body.confirmationNo = e.target.value;
}

function submitForm(e) {
  e.preventDefault();
  fetch(`/findapt?q=${body.confirmationNo}`)
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log('GET REQUEST ERROR: ', err));
}

export default function FindApt() {
  return (
    <section>
      <h1>Find My Appointment (React)</h1>
      <form action="?brandcode=">
        <div>
          <label htmlFor="confirmNo">Confirmation Number</label>
          <input
            type="text"
            required
            id="confirmNo"
            onChange={getValue}
          ></input>
        </div>
        <div>
          <button onClick={submitForm}>Verify</button>
        </div>
      </form>
    </section>
  );
}
