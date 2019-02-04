import React from 'react';
import Routes from './Routes';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        {/* <div
          style={{
            position: 'absolute',
            left: 0,
            width: '10%',
            height: '100%'
          }}
        >
          <SearchBar />
        </div> */}
        <div
          style={{
            position: 'absolute',
            left: '10%',
            width: '90%',
            top: '5%',
            height: '95%',
            padding: 10
          }}
        >
          <Routes />
        </div>
      </div>
    );
  }
}

export default App;
