import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import DashboardPage from './components/Dashboard'
import ItemDetails from './components/ItemDetails'
import './App.css'
import About from './components/About'
import NotFoundPage from './components/NotFound'

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main className="main-content">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path='/:recipesId' element= {<ItemDetails />} />
        <Route path='/about' element ={<About /> } />
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </main>
      <Footer />

  </>
  
  );
};

export default App