import "./App.css"
import HomePage from "./features/HomePage/HomePage"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./features/LoginPage/LoginPage"
import SignUpPage from "./features/SignUpPage/SignUpPage"

const App = () => {

  return (
    
    <BrowserRouter>
          {/* SPA ToDo */}
          <Routes>
            <Route path="/" element={<SignUpPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<SignUpPage/>} />
          </Routes>
    </BrowserRouter>
  )
}

export default App
