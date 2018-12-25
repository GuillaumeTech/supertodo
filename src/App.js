import React, { Component } from "react";
import logo from "./logo.svg";

import "./bulma.css";
import "./App.css";
import "./spacing.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [
        { title: "Test1", elements: ["bla", "blo"] },
        { title: "Test2", elements: ["bla", "test", "blo"] },
        { title: "Test3", elements: ["bla", "blo"] }
      ]
    };
  }
  render() {
    return (
      <div className="App">
        <div class="columns is-vcentered mhx">
          <div className="column">
            <p className="title is-3 has-text-left mtm ">
              {" "}
              SUPER <br /> TO-DO{" "}
            </p>
          </div>
          <div className="column is-pulled-right is-4">
            <AddsList />
          </div>
        </div>
        <body>
          <div className="columns is-multiline mhx">
            {this.state.contents.map(element => (
              <List title={element.title} elements={element.elements} />
            ))}
          </div>
        </body>
      </div>
    );
  }
}

class List extends Component {
  render() {
    return (
      <div className="column is-4">
        <div className="card pam">
          <p className="pvs has-text-left title is-size-5">
            {this.props.title}
          </p>
          {this.props.elements.map(element => (
            <Element name={element} />
          ))}
          <AddsElement />
        </div>
      </div>
    );
  }
}

class Element extends Component {
  render() {
    return (
      <div className="card mvs  is-shadowless has-background-light">
        <p className="has-text-left paxs ">{this.props.name} </p>
      </div>
    );
  }
}

class AddsList extends Component {
  render() {
    return (
      <form>
      <div className="  field has-addons">
        <div className="control is-expanded is-medium">
          <input className="input is-medium" type="text" placeholder="Add a list" />
        </div>
        <div className="control">
          <button className="button is-medium is-primary">+</button>
        </div>
      </div>
      </form>
    );
  }
}

class AddsElement extends Component {
  render() {
    return (
      <form>
      <div className="field has-addons">
        <div className="control is-expanded">
          <input className="input " type="text" placeholder="Add an element" />
        </div>
        <div className="control ">
          <button className="button  is-info">+</button>
        </div>
      </div>
      </form>
    );
  }
}

export default App;
