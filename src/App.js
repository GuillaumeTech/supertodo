import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bulma.css';
import './spacing.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      contents:
          [{title :"Test1", elements:["bla","blo"]},
          {title :"Test2", elements:["bla","blo"]},
          {title :"Test3", elements:["bla","blo"]},
          {title :"Test4", elements:["bla","blo"]},
          {title :"Test5", elements:["bla","blo"]},
          {title :"Test6", elements:["bla","blo"]}]}
}
  render() {
    return (
      <div className="App">
        
        <div className="container  is-fluid pal">
          <p className="title is-2
           has-text-left"> SUPER TO-DO</p>
         
        </div>
        <body>
        <div className="container is-fluid pam">
        <div className="columns is-multiline">
        {this.state.contents.map(element => (
             <List title={element.title} elements={element.elements}></List>
          ))}
        </div>
        </div>
        </body>
      </div>
    );
  }

}

class List extends Component {


  render() {
    return(
      <div className="column is-4">
      <div className="card  pam">
       <p className="pvs has-text-left title is-size-5">{this.props.title}</p> 
       {this.props.elements.map(element => (
         <Element name={element} ></Element>
       ))}
       </div>
      </div>
    )
  }
}

class Element extends Component {


  render() {
    return(
      <div className="card mvs is-shadowless has-background-light">
      <p className="has-text-left mhs">{this.props.name} </p></div>
      
    )
  }
}
export default App;
