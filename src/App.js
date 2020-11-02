import React, { useEffect } from 'react';
//importing css and js file of materialize
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css/dist/js/materialize.min.js'

import './App.css';

const App = () => {
  useEffect(() => {
    // FOR Initializing materialize js
    M.AutoInit();
  });
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
