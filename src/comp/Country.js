import React from 'react';

class Country extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <tr>
        <td>
            {this.props.name}
        </td>
        <td>
          {this.props.capital}
        </td>
        <td>
          {this.props.subregion}
        </td>
        <td>
          {this.props.currency}
        </td>
        <td>
          {this.props.language}
        </td>
      </tr>
    );
  }
}

export default Country;
