# Project Setup

This project demonstrates a simple microservices architecture with various services built using different technologies. The goal is to apply OpenTelemetry for automatic tracing of the communication between microservices. The entire example runs in Docker to avoid dependency installation complexities.

## Microservices

1. **Frontend (Next.js)**
   - A frontend that consumes several microservices.
   - **Dockerfile**: [`frontend/Dockerfile`](./frontend/Dockerfile)
   - **Configuration**: [`frontend/next.config.js`](./frontend/next.config.js)
   - **Main Page**: [`frontend/pages/index.js`](./frontend/pages/index.js)
   - **Package.json**: [`frontend/package.json`](./frontend/package.json)

2. **Flask Microservice (Python)**
   - A simple microservice that responds with "Hello, World!".
   - **App**: [`flask/app.py`](./flask/app.py)
   - **Dockerfile**: [`flask/Dockerfile`](./flask/Dockerfile)
   - **Requirements**: [`flask/requirements.txt`](./flask/requirements.txt)
   - **Wait-for-it Script**: [`flask/wait-for-it.sh`](./flask/wait-for-it.sh)

3. **FastAPI Microservice (Python)**
   - A microservice that connects to a PostgreSQL database using SQLAlchemy ORM.
   - **App**: [`fastapi/main.py`](./fastapi/main.py)
   - **Dockerfile**: [`fastapi/Dockerfile`](./fastapi/Dockerfile)
   - **Requirements**: [`fastapi/requirements.txt`](./fastapi/requirements.txt)

4. **Go Microservice**
   - A simple microservice that responds with "Hello, World!".
   - **Main**: [`go/main.go`](./go/main.go)
   - **Dockerfile**: [`go/Dockerfile`](./go/Dockerfile)
   - **Go Modules**: [`go/go.mod`](./go/go.mod) and [`go/go.sum`](./go/go.sum)

5. **Rust Microservice**
   - A simple microservice that responds with "Hello, World!".
   - **Main**: [`rust/src/main.rs`](./rust/src/main.rs)
   - **Cargo.toml**: [`rust/Cargo.toml`](./rust/Cargo.toml)
   - **Dockerfile**: [`rust/Dockerfile`](./rust/Dockerfile)

6. **C++ Microservice**
   - A simple microservice that responds with "Hello, World!".
   - **Main**: [`cpp/main.cpp`](./cpp/main.cpp)
   - **HTTPLib**: [`cpp/httplib.h`](./cpp/httplib.h)
   - **Dockerfile**: [`cpp/Dockerfile`](./cpp/Dockerfile)

## OpenTelemetry Configuration

- **Collector Configuration**: [`otel-collector-config.yaml`](./otel-collector-config.yaml)

## Docker Compose

To run the entire setup, use Docker Compose. The configuration file is as follows:

- **Docker Compose**: [`docker-compose.yml`](./docker-compose.yml)

## Running the Project

To run the project, use the following command:

```sh
docker-compose up -d
```