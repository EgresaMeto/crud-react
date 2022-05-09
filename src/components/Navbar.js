import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import './navbar.css'


const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Users')
  const location = useLocation()
  

  

  useEffect(() => {
    if (location.pathname === '/') {
      setActiveTab('Users')
    } else if (location.pathname === '/books') {
      setActiveTab('Books')
    } else if (location.pathname === '/cars') {
      setActiveTab('Cars')
    }
  }, [location])

  
  return (
    <div className='header'>
      <p className='logo'>Contact App</p>
      <div className='header-right'>
       
          <Link to='/'>
            <p
              className={`${activeTab === 'Users' ? 'active' : ''}`}
              onClick={() => setActiveTab('Users')}
            >
              Users
            </p>
          </Link>
          <Link to='/books'>
            <p
              className={`${activeTab === 'Books' ? 'active' : ''}`}
              onClick={() => setActiveTab('Books')}
            >
              Books
            </p>
          </Link>
          <Link to='/cars'>
            <p
              className={`${activeTab === 'Cars' ? 'active' : ''}`}
              onClick={() => setActiveTab('Cars')}
            >
              Cars
            </p>
          </Link>
        
      </div>
    </div>
  )
}

export default Navbar
