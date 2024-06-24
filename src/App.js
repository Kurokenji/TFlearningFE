// File: src/App.js
import React from 'react';
import AuthUser from './components/AuthUser';
import Guest from './components/Guest';
import Auth from './components/Auth';

function App() {
   const {user} = AuthUser();
   const {getToken} = AuthUser();
  if(!getToken()){
    return <Guest/>
  };
  return (
    <div className="App">      
      <Auth/>
      {/* <TestComponent /> */}
    </div>
  );
}

export default App;


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
