# syntax=docker/dockerfile:1
FROM golang:1.20-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /bin/auth-service

FROM alpine
COPY --from=build /bin/auth-service /bin/auth-service
CMD ["/bin/auth-service"]
