import React, { Component } from "react";

import "./bulma.css";
import "./App.css";
import "./spacing.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addsElement = this.addsElement.bind(this);
    this.addsList = this.addsList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.removeElement = this.removeElement.bind(this);

    this.state = {
      contents: [{title:"test", elements:["bla","bla"]}]
    };
  }

  addsElement(i, text) {
    const contents = this.state.contents.slice();
    contents[i].elements = contents[i].elements.concat(text);
    this.setState({ contents: contents });
  }

  addsList(text) {
    let contents = this.state.contents.slice();
    const list = {
      title: text,
      elements: []
    };
    contents = contents.concat(list);
    this.setState({ contents: contents });
  }

  removeList(index) {
    let contents = this.state.contents.slice();
    contents.splice(index, 1);
    this.setState({ contents: contents });
  }

  removeElement(parentIndex, index) {
    let contents = this.state.contents.slice();
    contents[parentIndex].elements.splice(index, 1);
    this.setState({ contents: contents });
  }

  render() {
    return (
      <div className="App">
        <div className="columns is-vcentered mhx">
          <div className="column">
            <p className="title is-3 has-text-left mtm">
              {" "}
              SUPER <br /> TO-DO{" "}
            </p>
          </div>
          <div className="column is-pulled-right is-5">
            <AddsList addsList={this.addsList} />
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
              removeList={this.removeList}
              removeElement={this.removeElement}
            />
          ))}
        </div>
      </div>
    );
  }
}

class List extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeList(this.props.index);
  }

  render() {
    return (
      <div className="column is-4">
        <div className="card pam">
          <div className="columns is-vcentered ">
            <div className="column">
              <p className="pvs has-text-left title is-size-4">
                {this.props.title}
              </p>
            </div>
            <div className="column is-1 prl">
              <form onSubmit={this.handleSubmit}>
                <button type="submit" className="delete" />
              </form>
            </div>
          </div>
          {this.props.elements.map((element, index) => (
            <Element key={index} index={index} parIndex={this.props.index} removeElement={this.props.removeElement} name={element} />
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
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeElement(this.props.parIndex, this.props.index);
  }

  render() {
    return (
      <div className="card mvm is-shadowless has-background-light">
        <div className="columns">
          <div className="column is-vcentered">
            <p className="has-text-left plm"> {this.props.name} </p>
          </div>
          
         <div className="column is-1 is-pulled-right mrl">
            <form onSubmit={this.handleSubmit}>
              <button type="submit" className="delete" />
            </form>
          </div>
        </div>
      </div>
      
    );
  }
}

class AddsList extends Component {
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
    if (this.state.text !== "") {
      this.props.addsList(this.state.text);
      this.setState({ text: "" });
      this.refs.newListField.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="field has-addons">
          <div className="control is-expanded is-medium">
            <input
              className="input is-medium"
              onChange={this.handleChange}
              type="text"
              placeholder="Add a list"
              ref="newListField"
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
    if (this.state.text !== "") {
      this.props.addsElement(this.props.parentIndex, this.state.text);
      this.setState({ text: "" });
      this.refs.newElementField.value = "";
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
              ref="newElementField"
            />
          </div>
          <div className="control ">
            <button type="submit" className="button is-info">
              +
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default App;
