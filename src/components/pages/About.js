import React, { Fragment } from "react";

import { BrowserRouter as Redirect } from "react-router-dom";

import FakeText from "./FakeText";

const About = ({
  match: {
    params: { name },
  },
}) => (
  // props.match.params.name
  <Fragment>
    {name !== "John Doe" ? <Redirect to="/" /> : null}
    <h1>About {name}</h1>
    <FakeText />
  </Fragment>
);

export default About;
