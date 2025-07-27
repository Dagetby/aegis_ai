# syntax=docker/dockerfile:1
FROM golang:1.20-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /bin/scanner-service

FROM alpine
COPY --from=build /bin/scanner-service /bin/scanner-service
CMD ["/bin/scanner-service"]
