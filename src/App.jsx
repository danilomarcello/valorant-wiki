import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home/Home';
import Agents from './pages/Agents/Agents';
import Weapons from './pages/Weapons/Weapons';
import Maps from './pages/Maps/Maps';

const App = () => {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/agents" element={<Agents />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </Router>
      </>
  )
}

export default App
