import React, { Component } from "react";
import logo from "./logo.svg";

import "./bulma.css";
import "./App.css";
import "./spacing.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addsElement = this.addsElement.bind(this);
    this.state = {
      contents: [
        { title: "Test1", elements: ["bla", "blo"] },
        { title: "Test2", elements: ["bla", "test", "blo"] },
        { title: "Test3", elements: ["bla", "blo"] }
      ]
    };
  }

  addsElement(i, text) {
    const contents = this.state.contents.slice();
    contents[i].elements = contents[i].elements.concat(text);
    this.setState({ contents: contents });
  }

  render() {
    return (
      <div className="App">
        <div className="columns is-vcentered mhx">
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

        <div className="columns is-multiline mhx">
          {this.state.contents.map((element, index) => (
            <List
              key={index}
              index={index}
              title={element.title}
              elements={element.elements}
              addsElement={this.addsElement}
            />
          ))}
        </div>
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
          {this.props.elements.map((element, index) => (
            <Element key={index} name={element} />
          ))}
          <AddsElement
            parentIndex={this.props.index}
            addsElement={this.props.addsElement}
          />
        </div>
      </div>
    );
  }
}

class Element extends Component {
  render() {
    return (
      <div className="card mvs is-shadowless has-background-light">
        <p className="has-text-left paxs ">{this.props.name} </p>
      </div>
    );
  }
}

class AddsList extends Component {
  render() {
    return (
      <form onSubmit={this.props.addsList}>
        <div className="field has-addons">
          <div className="control is-expanded is-medium">
            <input
              className="input is-medium"
              type="text"
              placeholder="Add a list"
            />
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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { text: "" };
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.text != "") {
      this.props.addsElement(this.props.parentIndex, this.state.text);
      this.setState({ text: "" });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded">
            <input
              className="input"
              onChange={this.handleChange}
              type="text"
              placeholder="Add an element"
            />
          </div>
          <div className="control ">
            <button type="Submit" className="button is-info">
              +
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
