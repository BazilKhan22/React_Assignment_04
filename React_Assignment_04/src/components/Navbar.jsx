import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{
      display: 'flex',
      gap: '20px',
      padding: '15px',
      background: '#f0f0f0',
      marginBottom: '20px'
    }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/signup">Signup</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/team">Team</NavLink>
      <NavLink to="/career">Career</NavLink>
      <NavLink to="/pricing">Pricing</NavLink>
    </nav>
  )
}