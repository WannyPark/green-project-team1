// import React, { Component } from 'react';


// import Login from './components/Login';
// import Adress from './components/Adress';

// class App extends Component {
//   render() {
//     return (
//       // <Login></Login>
//       <Adress></Adress>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './components/Login';
import Adress from './components/Adress';

class App extends Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Adress" element={<Adress />} />
        </Routes>
      </Router>
    );
  }
}

export default App;
