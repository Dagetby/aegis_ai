# Aegis AI

This repository contains an MVP skeleton for the Aegis AI platform. It includes several Go microservices and a React frontend.

## Services
- **auth-service**: handles authentication and user management.
- **integrations-service**: stores cloud integrations.
- **scanner-service**: background scanner worker.
- **results-service**: stores scan findings.
- **remediation-service**: provides remediation advice.

The stack is orchestrated with `docker-compose` for local development.
