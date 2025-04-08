# Nuxt.js Application

This is a Nuxt.js application with Docker support for easy deployment and development.

## Prerequisites

- Node.js 20 or later
- Docker and Docker Compose (for containerized deployment)

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## Docker Deployment

### Building the Docker Image

```bash
# Build the Docker image
docker build -t nuxt-app .
```

### Running the Container

```bash
# Run the container
docker run -p 3000:3000 nuxt-app
```

The application will be available at `http://localhost:3000`.

### Environment Variables

If you need to use environment variables, you can pass them using the `-e` flag:

```bash
docker run -p 3000:3000 -e NODE_ENV=production nuxt-app
```

### Docker Compose

For a more complex setup, you can use Docker Compose. Create a `docker-compose.yml` file:

```yaml
version: "3"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
```

Then run:

```bash
docker-compose up
```

## Project Structure

- `nuxt.config.ts` - Nuxt.js configuration
- `package.json` - Project dependencies and scripts
- `Dockerfile` - Docker configuration for containerization
- `.dockerignore` - Files to exclude from Docker build

## License

[Add your license information here]
