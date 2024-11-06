import React from 'react'
import Home from './Home/Home'
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DesktopDropdown from './HraderComponent/DropdownHeader/DesktopDropdown';
const App = () => {


  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App