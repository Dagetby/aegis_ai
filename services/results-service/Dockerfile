# syntax=docker/dockerfile:1
FROM golang:1.20-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /bin/results-service

FROM alpine
COPY --from=build /bin/results-service /bin/results-service
CMD ["/bin/results-service"]
