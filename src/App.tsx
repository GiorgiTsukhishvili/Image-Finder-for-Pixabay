import React, { Fragment } from "react";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App(): JSX.Element {
  return (
    <Fragment>
      <Navbar />
      <Search />
    </Fragment>
  );
}

export default App;
