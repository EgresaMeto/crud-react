
import './App.css';
import Navbar from './components/Navbar'
import Users from './components/features/Users'
import Books from './components/features/Books'
import Cars from './components/features/Cars'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
 
function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <ToastContainer position='top-center' />
          <Routes>
            <Route exact path='/' element={<Users />} />
            <Route path='/books' element={<Books />} />
            <Route path='/cars' element={<Cars />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
