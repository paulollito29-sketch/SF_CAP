import React from 'react'
import { useAuth } from '../contexts/AuthContext'

const AdminPage = () => {
  const { user } = useAuth();
  return (
    <div>
      <h2>Bienvenido, {user?.username}</h2>
    </div>
  )
}

export default AdminPage