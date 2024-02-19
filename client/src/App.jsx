import React from 'react'
import Home from './pages/Home'
import Header from "./components/Header"
import About from "./pages/About"
import SignIn from "./pages/SignIn"
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Project from './pages/Project'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
export default function App() {
  return (
    <BrowserRouter>
    <Header></Header>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/sign-in" element={<SignIn></SignIn>}></Route>
        <Route path="/sign-up" element={<SignUp></SignUp>}></Route>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
        <Route path="/projects" element={<Project></Project>}></Route>  
      </Routes>
    </BrowserRouter>
  )
}