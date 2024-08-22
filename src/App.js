import 'bootstrap/dist/js/bootstrap.bundle.min';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        
      </Routes>
    </Router>
  );
}

export default App;
