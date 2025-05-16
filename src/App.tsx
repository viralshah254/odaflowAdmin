import { Navigate } from 'react-router-dom'
import './App.css'

function App() {
  // Simple auth check (replace with real logic)
  const isAuthed = Boolean(localStorage.getItem('authToken'))

  // Redirect to sign-in if not authenticated
  if (!isAuthed) {
    return <Navigate to="/signin" replace />
  }

  // Authenticated admin panel placeholder
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-4">OdaFlow Admin Panel</h1>
      <p>Welcome! Use the sidebar to navigate the admin features.</p>
    </div>
  )
}

export default App
