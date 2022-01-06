import React from "react";
import Form from "./Form";
import data from "./data/Data.json";
import "./App.css";

function App() {
  return <Form data={data} />;
}

export default App;
//aim::we take json data from the user and create a form from it
//In this file we call form component.and also we pass data in json format.
