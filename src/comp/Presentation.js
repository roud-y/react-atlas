import React from 'react';

class Presentation extends React.Component {
  render() {
    return (
      <header class="jumbotron">
        <div class="container">
          <h1 class="display-3">Jai fait un changement Welcome to my atlas!</h1>
          <p>This atlas is my first app made with react and I used this <a href="https://restcountries.eu/">api</a>. If you want to take a look at the source code click <a href="https://github.com/roud-y">here</a>.</p>
        </div>
      </header>
    );
  }
}
export default Presentation;
