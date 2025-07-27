import { Button, TextField, Container } from '@mui/material'
import { useState } from 'react'
import api from '../services/api'
import { useAuthStore } from '../stores/authStore'

export default function LoginPage() {
  const setToken = useAuthStore(s => s.setToken)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const res = await api.post('/login', { email, password })
    setToken(res.data.token)
  }

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField fullWidth margin="normal" label="Email" value={email} onChange={e => setEmail(e.target.value)} />
        <TextField fullWidth margin="normal" label="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <Button variant="contained" type="submit">Login</Button>
      </form>
    </Container>
  )
}
