import React, { Fragment } from "react";

import FakeText from "./FakeText";

const Contact = ({ history }) => (
  <Fragment>
    <h1>Page Contact</h1>
    <hr />
    <button onClick={() => history.push("/")}>Go to home</button>
    <FakeText />
  </Fragment>
);

export default Contact;
