import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()

  const handleLogin = () => {
    // After successful login
    navigate('/dashboard/user@example.com')
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Login Page</h1>
      <button 
        onClick={handleLogin}
        style={{ padding: '8px 15px' }}
      >
        Login
      </button>
    </div>
  )
}