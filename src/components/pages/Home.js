import React, { Fragment } from "react";

import FakeText from "./FakeText";

const Home = () => {
  return (
    <div className="container">
      <Fragment>
        <h1>Home page</h1>
        <hr />
        <FakeText />
      </Fragment>
    </div>
  );
};

export default Home;
