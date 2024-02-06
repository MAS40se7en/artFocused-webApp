import './App.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Home from './pages/Home'
import Nav from './components/Nav'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
            <Nav />
            <Routes>
            <Route path="/" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/register" Component={Register} />
            </Routes>
            
        </BrowserRouter>
    </div>
  )
}

export default App
