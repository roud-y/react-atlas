import React from 'react';
import Country from './Country.js'
var request = require('superagent');

class Result extends React.Component {
  constructor(props) {
    super(props);

    //https://daveceddia.com/watch-out-for-undefined-state/
    //https://stackoverflow.com/questions/42276680/state-property-undefined-in-render-function
    //https://daveceddia.com/ajax-requests-in-react/
    //https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
    this.state = {
      pays:[],
      table:[]
    };

    this.jsonToTable = this.jsonToTable.bind(this);
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

    //par defaut on veut la liste de tout les pays
    //console.log("le filtre est", this.props.filtre);
    request
    .get("https://restcountries.eu/rest/v2/all")
    .then((res) => {
       // res.body, res.headers, res.status
       console.log("la reponse est : ", res);
       //console.log("le tout est", res.body);
       const listeResultat = res.body;
       this.setState({
         pays: listeResultat
       });
    })
    .catch(function(err) {
       // err.message, err.response
    });
    this.jsonToTable();
    //console.log("le state est", this.state.pays);
  }

  componentWillReceiveProps(nextProps){
    /*
      componentWillReceiveProps() is invoked before a mounted component
      receives new props. If you need to update the state in response to prop
      changes (for example, to reset it), you may compare this.props and
      nextProps and perform state transitions using this.setState() in this method.
    */
    //console.log("le filtre est", this.props.filtre);
    let link = "https://restcountries.eu/rest/v2/";
    if(this.props.filtre.text === ""){
      link += "all";
      console.log("cest vide");
    } else {
      link += "name/"+this.props.filtre.text;
    }
    request
    .get(link)
    .then((res) => {
       // res.body, res.headers, res.status
       console.log("la reponse est", res);
       //console.log("le tout est", res.body);
       const listeResultat = res.body;
       this.setState({
         pays: listeResultat
       });
    })
    .catch(function(err) {
       // err.message, err.response
    });
    this.jsonToTable();
    //console.log("le state est", this.state.pays);
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

  jsonToTable(){
    console.log("jsonToTable");
    let tableBody = [];
    //console.log("le resultat est", this.state.pays.length);
    if(this.state.pays.length > 0){
      for (var i = 0; i < this.state.pays.length; i++) {
        tableBody.push(<Country name={this.state.pays[i]["name"]}
        capital={this.state.pays[i]["capital"]}
        subregion={this.state.pays[i]["subregion"]}
        currency={this.state.pays[i]["currencies"][0]["name"]}
        language={this.state.pays[i]["languages"][0]["name"]}/>);
      }
    }

    this.setState((state) => ({
       table: tableBody
   }));
  }

  render() {
    //console.log("render is called", this.state.pays);
    console.log("render", this.state.table);
    return (
      <section id="result">
        <h3>Countries</h3>
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Capital</th>
              <th scope="col">Continent</th>
              <th scope="col">Currency</th>
              <th scope="col">Language</th>
            </tr>
          </thead>
          <tbody>
          {this.state.table}
          </tbody>
        </table>
        <div>
        </div>
      </section>
    );
  }
}
export default Result;
