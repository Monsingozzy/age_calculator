import React, { Component } from "react";
import "./App.css";
import DatePicker from "./containers/DatePicker";
class App extends Component {
  render() {
    return (
      <div className="App">
        <DatePicker />
      </div>
    );
  }
}

export default App;
