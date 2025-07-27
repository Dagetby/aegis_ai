import { useEffect, useState } from 'react'
import api from '../services/api'
import { Typography } from '@mui/material'

export default function DashboardPage() {
  const [summary, setSummary] = useState('')
  useEffect(() => {
    api.get('/findings').then(res => setSummary(JSON.stringify(res.data)))
  }, [])
  return <Typography>{summary}</Typography>
}
