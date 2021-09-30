import React from 'react';
import { Redirect } from 'react-router-dom';

export default function Update(props) {
  console.log(props.location.state);
  return <h2>Update Here!!!</h2>;
}
