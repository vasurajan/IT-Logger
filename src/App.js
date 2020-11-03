import React, { Fragment, useEffect } from 'react';
//importing css and js file of materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import AddBtn from './components/layout/AddBtn';
import SearchBar from './components/layout/SearchBar';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import './App.css';

const App = () => {
  useEffect(() => {
    // For Initializing materialize js
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
      </div>
    </Fragment>
  );
}

export default App;
