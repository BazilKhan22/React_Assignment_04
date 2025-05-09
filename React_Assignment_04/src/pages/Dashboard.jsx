import { useParams } from 'react-router-dom'

export default function Dashboard() {
  const { email } = useParams()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard</h1>
      <p>Welcome, {email}!</p>
    </div>
  )
}