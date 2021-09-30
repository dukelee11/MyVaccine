import React, { useRef, useState } from 'react';
import { useHistory, Redirect, Route, Switch, Link } from 'react-router-dom';
import ConfirmApt from './ConfirmApt';

export default function FindApt() {
  // const body = {};

  // function getValue(e) {
  //   e.preventDefault();
  //   body.confirmationNo = e.target.value;
  // }

  // const history = useHistory();

  const [confirmed, setConfirmed] = useState(false);
  const [state, setState] = useState(null);

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
        // console.log(data);
        if (data) {
          setConfirmed(true);
          setState(data);
          // history.push('/confirmapt', data);
          // return data;
        }
      })
      // .then((data) => )
      .catch((err) => console.log('GET REQUEST ERROR: ', err));
  }

  // console.log(confirmed);
  // console.log(state);

  if (confirmed && state) {
    return (
      <Redirect
        to={{
          pathname: '/confirmapt',
          state,
        }}
      />
    );
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
        {/* <Link
          to={{
            pathname: '/confirmapt',
            state,
          }}
        >
          Register
        </Link> */}
      </form>
      {/* <Route exact path="/confirmapt">
        {confirmed
          ? history.replace('/confirmapt', { state: fetchedData })
          : // <Redirect to="/confirmapt" />
            console.log('not working?')}
      </Route> */}
    </section>
  );
}
