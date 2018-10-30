import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={ToDoList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
