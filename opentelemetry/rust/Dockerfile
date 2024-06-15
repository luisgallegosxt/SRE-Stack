# Dockerfile
FROM rust:1.79.0 AS builder

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the Cargo.toml and Cargo.lock files
COPY Cargo.toml ./

# Create an empty src directory to trick Cargo into thinking it's a valid Rust project
RUN mkdir src && echo "fn main() {}" > src/main.rs

RUN cargo build --release

# Now copy the source code
COPY ./src ./src

# Build your application
RUN cargo build --release

EXPOSE 8003

# Start a new stage to create a smaller image without unnecessary build dependencies
FROM debian:bookworm-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy the built binary from the previous stage
COPY --from=builder ./target/release/docker ./target/release/docker

# Command to run the application
CMD ["/target/release/docker"]