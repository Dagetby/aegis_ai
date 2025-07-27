import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { Container, Typography, Box } from '@mui/material'

export default function FindingDetailPage() {
  const { id } = useParams<{ id: string }>()
  const [finding, setFinding] = useState<any>(null)
  const [remediation, setRemediation] = useState<any>(null)
  useEffect(() => {
    api.get(`/findings/${id}`).then(res => setFinding(res.data))
    api.get(`/remediations/${id}`).then(res => setRemediation(res.data))
  }, [id])

  if (!finding) return null

  return (
    <Container>
      <Typography variant="h5">{finding.title}</Typography>
      <Typography>Resource: {finding.resource_id}</Typography>
      <Typography>Severity: {finding.severity}</Typography>
      {remediation && (
        <Box mt={2}>
          <Typography variant="h6">Business Risk</Typography>
          <Typography>{remediation.business_risk}</Typography>
          <Typography variant="h6">How to Fix</Typography>
          <Typography>{remediation.technical_steps}</Typography>
          {remediation.code_snippet && (
            <pre><code>{remediation.code_snippet.code}</code></pre>
          )}
        </Box>
      )}
    </Container>
  )
}
