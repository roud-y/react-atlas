import React from 'react';
var request = require('superagent');

class Filter extends React.Component {
  constructor(props) {
    /*
      The constructor for a React component is called before it is mounted.
      When implementing the constructor for a React.Component subclass, you
      should call super(props) before any other statement. Otherwise,
      this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);
    this.state = {
    };

    this.filterChange = this.filterChange.bind(this);
  }

  componentWillMount(){
    /*
      componentWillMount() is invoked immediately before mounting occurs.
      It is called before render(), therefore calling setState()
      synchronously in this method will not trigger an extra rendering.
      Generally, we recommend using the constructor() instead.
    */

  }

  componentDidMount(){
    /*
      componentDidMount() is invoked immediately after a component is mounted.
      Initialization that requires DOM nodes should go here. If you need to
      load data from a remote endpoint, this is a good place to instantiate
      the network request.
    */
  }

  componentWillReceiveProps(nextProps){
    /*
      componentWillReceiveProps() is invoked before a mounted component
      receives new props. If you need to update the state in response to prop
      changes (for example, to reset it), you may compare this.props and
      nextProps and perform state transitions using this.setState() in this method.
    */
  }

  /*shouldComponentUpdate(nextProps, nextState){

      Use shouldComponentUpdate() to let React know if a component’s output is
      not affected by the current change in state or props. The default
      behavior is to re-render on every state change, and in the vast
      majority of cases you should rely on the default behavior.

  }*/

  componentWillUpdate(){
    /*
      componentWillUpdate() is invoked immediately before rendering when new
      props or state are being received. Use this as an opportunity to perform
      preparation before an update occurs. This method is not called for
      the initial render.

      Note : componentWillUpdate() will not be invoked if
      shouldComponentUpdate() returns false.
    */
  }

  componentDidUpdate(){
    /*
      componentDidUpdate() is invoked immediately after updating occurs.
      This method is not called for the initial render.

      Note : componentDidUpdate() will not be invoked if
      shouldComponentUpdate() returns false.
    */
  }

  componentWillUnmount(){
    /*
      componentWillUnmount() is invoked immediately before a component is
      unmounted and destroyed. Perform any necessary cleanup in this method,
      such as invalidating timers, canceling network requests, or cleaning
      up any subscriptions that were created in componentDidMount().
    */
  }

  filterChange(element){
    let nom = element.target.name;//the name of the field that is changing
    let valeur = null;
    //if its a checkbox the value will be checked
    if(element.target.type === "checkbox"){
      valeur = element.target["checked"];//the value of the field that is changing
    } else {
      valeur = element.target["value"];//the value of the field that is changing
    }
    this.props.filtre({
      [nom]: valeur
    });
  }


  render() {
    return (
      <section id="filter">
        <form>
          <h2>Filters</h2>
            <div class="form-group">
              <label for="countryName">Country name</label>
              <input class="form-control" id="countryName" aria-describedby="countryNameHelp" placeholder="United States"
              name="text"
              value={this.props.text}
              onChange={this.filterChange}/>
              <small id="countryNameHelp" class="form-text text-muted">Start typing to see wich country match your string</small>
            </div>
            {/*<h3>Continent</h3>
            <div class="form-check">
            <label class="checkbox-inline">
              <input type="checkbox" name="Af" checked={this.props.Africa} onChange={this.filterChange}/>Africa
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="As" checked={this.props.Asia} onChange={this.filterChange}/>Asia
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="Oc" checked={this.props.Oceania} onChange={this.filterChange}/>Oceania
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="Eu" checked={this.props.Europe} onChange={this.filterChange}/>Europe
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="Na" checked={this.props.NorthAmerica} onChange={this.filterChange}/>North America
            </label>
            <label class="checkbox-inline">
              <input type="checkbox" name="Sa" checked={this.props.SouthAmerica} onChange={this.filterChange}/>South America
            </label>
            </div>*/}
            {/*
              no button update will be made through onchange
              <button type="submit" class="btn btn-primary">Submit</button>*/}
          </form>
      </section>
    );
  }
}
export default Filter;
