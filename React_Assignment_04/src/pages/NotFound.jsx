import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ 
      textAlign: 'center', 
      padding: '50px' 
    }}>
      <h1 style={{ color: 'red' }}>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link 
        to="/" 
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '10px 20px',
          background: '#0066ff',
          color: 'white',
          textDecoration: 'none'
        }}
      >
        Go to Home
      </Link>
    </div>
  )
}