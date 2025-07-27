import { useEffect, useState } from 'react'
import api from '../services/api'
import { Container, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'

interface Integration {
  id: string
  name: string
  type: string
}

export default function IntegrationsPage() {
  const [integrations, setIntegrations] = useState<Integration[]>([])
  const [name, setName] = useState('')
  const [arn, setArn] = useState('')

  useEffect(() => {
    api.get('/integrations').then(res => setIntegrations(res.data))
  }, [])

  const handleAdd = async () => {
    await api.post('/integrations', { name, arn })
    const res = await api.get('/integrations')
    setIntegrations(res.data)
  }

  return (
    <Container>
      <TextField label="Name" value={name} onChange={e => setName(e.target.value)} />
      <TextField label="IAM Role ARN" value={arn} onChange={e => setArn(e.target.value)} />
      <Button onClick={handleAdd}>Add</Button>
      <Table>
        <TableHead>
          <TableRow><TableCell>Name</TableCell><TableCell>Type</TableCell></TableRow>
        </TableHead>
        <TableBody>
          {integrations.map(i => (
            <TableRow key={i.id}><TableCell>{i.name}</TableCell><TableCell>{i.type}</TableCell></TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}
