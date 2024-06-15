# Dockerfile
FROM gcc:latest

WORKDIR /app

COPY . .

RUN g++ -o main main.cpp

EXPOSE 8004

CMD ["./main"]
