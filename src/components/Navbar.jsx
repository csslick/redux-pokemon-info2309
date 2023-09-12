import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li className='nav-item'><Link to='/'>Home</Link></li>
        <li className='nav-item'><Link to='/about'>About</Link></li>
      </ul>
    </nav>
  )
}
