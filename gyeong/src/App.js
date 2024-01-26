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

// import React, { Component } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import Login from './components/Login';
// import Adress from './components/Adress';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Routes>
//           <Route path="/Login" element={<Login />} />
//           <Route path="/Adress" element={<Adress />} />
//         </Routes>
//       </Router>
//     );
//   }
// }

// export default App;

  import React, { Component, useEffect, useState } from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



  import Login3 from './components/Login3';
  import Login from './components/Login';
  import Adress from './components/Adress';

  function App() {
    useEffect(() => {
    }, []);

    return (
      <div>
        <Router>
        <Routes>
          <Route path="/Login3" element={<Login3 />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Adress" element={<Adress />} />
        </Routes>
      </Router>
      
        {/* <h1>react</h1>
        <h2>{list.data}</h2>
        <h3>{list.name}</h3>
        <h3>{list.age}</h3>
        <h3>{list.loc}</h3>
        <h1>mem</h1>
        <h2>{mem.seq}</h2>
        <h2>{mem.subject}</h2>
        <h2>{mem.content}</h2>
        <h2>{mem.name}</h2>
        <h2>{mem.reg_date}</h2>
        <h2>{mem.readcount}</h2>
        <h1>qMem</h1>
        <h2>{qMem.seq}</h2>
        <h2>{qMem.subject}</h2>
        <h2>{qMem.content}</h2>
        <h2>{qMem.name}</h2>
        <h2>{qMem.reg_date}</h2>
        <h2>{qMem.readcount}</h2> */}
      </div>
    );
  }

  export default App;
