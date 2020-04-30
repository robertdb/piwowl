import React from "react";
import { Landing } from "./layouts";
import { Header, Footer } from "./components";
import "./dictionary";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Landing />
      <Footer />
    </React.Fragment>
  );
}

export default App;
