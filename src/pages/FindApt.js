import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default function FindApt() {
  // const body = {};

  // function getValue(e) {
  //   e.preventDefault();
  //   body.confirmationNo = e.target.value;
  // }

  const history = useHistory();

  const confirmNoInputRef = useRef();

  function submitForm(e) {
    e.preventDefault();
    const enteredConfirmNo = confirmNoInputRef.current.value;

    const patientData = {
      confirmationNo: enteredConfirmNo,
    };

    fetch(`/findapt?q=${patientData.confirmationNo}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data) {
          history.replace('/confirmapt');
        } else {
          console.log('CONFIRMATION NUMBER CANNOT BE FOUND');
        }
      })
      .catch((err) => console.log('GET REQUEST ERROR: ', err));
  }

  return (
    <section>
      <h1>Find My Appointment (React)</h1>
      <form onSubmit={submitForm}>
        <div>
          <label htmlFor="confirmNo">Confirmation Number</label>
          <input
            type="text"
            required
            id="confirmNo"
            ref={confirmNoInputRef}
          ></input>
        </div>
        <div>
          <button>Verify</button>
        </div>
      </form>
    </section>
  );
}
