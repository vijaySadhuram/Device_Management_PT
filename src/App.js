import React from 'react'
import { useState } from 'react'
import Header from './Components/Header'
import './Components/Header.css'
import Home from './Components/Home'
import './Components/Sidebar'
import './App.css'
import About from './Components/About'
import Contact  from './Components/Contact'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Footer  from './Components/Footer'
import User from './Components/User'
import Sidebar from './Components/Sidebar'
import Dashboard from './Components/Dashboard'
import Employees from './Components/Employees'
function App() {


 const [isSidebarOpen, setSidebarOpen] = useState(false);
const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
   < BrowserRouter>
  
     <Header  onMenuClick={toggleSidebar} />
     {isSidebarOpen && <Sidebar />}
     
    <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<Contact/>}/>
    <Route path='/user/:id' element={<User/>}/>
     <Route path='/dashboard' element={<Dashboard/>}/>
     <Route path='/employees' element={<Employees/>}/>
     </Routes>

    <Footer/>
     
    
    </BrowserRouter>
  )
}

export default App