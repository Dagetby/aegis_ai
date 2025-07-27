import { useEffect, useState } from 'react'
import api from '../services/api'
import { Container, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material'
import { Link } from 'react-router-dom'

interface Finding {
  id: string
  severity: string
  title: string
  resource_id: string
  status: string
  last_seen_at: string
}

export default function FindingsListPage() {
  const [findings, setFindings] = useState<Finding[]>([])
  useEffect(() => {
    api.get('/findings').then(res => setFindings(res.data))
  }, [])

  return (
    <Container>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Severity</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Resource</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Last Seen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {findings.map(f => (
            <TableRow key={f.id} component={Link} to={`/findings/${f.id}`}> 
              <TableCell>{f.severity}</TableCell>
              <TableCell>{f.title}</TableCell>
              <TableCell>{f.resource_id}</TableCell>
              <TableCell>{f.status}</TableCell>
              <TableCell>{f.last_seen_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  )
}
