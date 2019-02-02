import React from 'react';

// import SearchBar from './componentsSearchBar';
// import NavDrawer from './components/NavDrawer';
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

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
