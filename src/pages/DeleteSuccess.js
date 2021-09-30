import React, { useState } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Button, Container, Row, Col, Table } from 'react-bootstrap';

import classes from './DeleteSuccess.module.scss';

export default function DeleteSuccess() {
  const history = useHistory();

  return (
    <section className={classes.deleteAptSection}>
      <Container className={`text-center ${classes.container}`}>
        <h1>Appointment Successfully Deleted!</h1>
        <p className={`${classes.p}`}>
          We've sent you a confirmation email with this cancellation.
        </p>
        <div className={classes.buttonContainer}>
          <Button
            type="button"
            className={classes.button}
            onClick={() => {
              history.replace('/');
            }}
          >
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
