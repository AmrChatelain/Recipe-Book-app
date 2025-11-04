import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashboardPage from './components/Dashboard'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      
      <Routes>
        <Route path="/" element={<DashboardPage />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App