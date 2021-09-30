import React, { useRef, useState } from 'react';
import { useHistory, Redirect, Route, Switch, Link } from 'react-router-dom';
import { Button, Container, Row, Col } from 'react-bootstrap';
import ConfirmApt from './ConfirmApt';

import classes from './FindApt.module.scss';

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
    <section className={classes.findAptSection}>
      <Container className="text-center">
        <h1>Find My Appointment</h1>
        {/* <p className="pt-3">
          Please enter the 6-digit confirmation code to confirm your
          appointment.
        </p> */}
        <form onSubmit={submitForm}>
          <div>
            <label htmlFor="confirmNo" className="pt-3">
              Please enter the 6-digit confirmation code to confirm your
              appointment.
            </label>
            <p>
              <input
                type="text"
                required
                id="confirmNo"
                ref={confirmNoInputRef}
              ></input>
            </p>
          </div>
          <div>
            <Button type="submit">Verify</Button>
          </div>
          <div>
            <Button
              type="button"
              variant="outline-primary"
              className={classes.forgetCodeBtn}
            >
              Don't remember your code?
            </Button>
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
      </Container>
    </section>
  );
}
