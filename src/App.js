import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Filter from './comp/Filter.js'
import Presentation from './comp/Presentation.js'
import Result from './comp/Result.js'

class App extends Component {
  constructor(props) {
    /*
      The constructor for a React component is called before it is mounted.
      When implementing the constructor for a React.Component subclass, you
      should call super(props) before any other statement. Otherwise,
      this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);
    this.state = {
      text:''/*,
      Af: false,
      As: false,
      Oc: false,
      Eu: false,
      Na: false,
      Sa: false*/
    };

    this.filterFunction = this.filterFunction.bind(this);
  }

  filterFunction(filterInput){
    /*
      setState() enqueues changes to the component state and tells React
      that this component and its children need to be re-rendered with
      the updated state. This is the primary method you use to update
      the user interface in response to event handlers and server responses.
    */
    this.setState(filterInput);
    /*console.log("etat");
    console.log(this.state);*/
  }

  render() {
    return (
      <div className="App">
        <div class="container">
          <Presentation/>
          <Filter
          text={this.state.text}
          /*Africa={this.state.Af}
          Asia={this.state.As}
          Oceania={this.state.Oc}
          Europe={this.state.Eu}
          NorthAmerica={this.state.Na}
          SouthAmerica={this.state.Sa}*/
          filtre={this.filterFunction}/>
          <Result filtre={this.state}/>
        </div>
      </div>
    );
  }
}

export default App;
