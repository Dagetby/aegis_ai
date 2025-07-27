# syntax=docker/dockerfile:1
FROM golang:1.20-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /bin/remediation-service

FROM alpine
COPY --from=build /bin/remediation-service /bin/remediation-service
CMD ["/bin/remediation-service"]
