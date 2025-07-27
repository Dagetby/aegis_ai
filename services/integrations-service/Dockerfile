# syntax=docker/dockerfile:1
FROM golang:1.20-alpine AS build
WORKDIR /src
COPY . .
RUN go build -o /bin/integrations-service

FROM alpine
COPY --from=build /bin/integrations-service /bin/integrations-service
CMD ["/bin/integrations-service"]
