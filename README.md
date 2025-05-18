# Hono Hello World API

A minimal "Hello World" API built with [Hono](https://hono.dev/), a small, simple, and ultrafast web framework for the edge.

## Features

- Simple JSON response
- TypeScript support
- Basic middleware (logging, CORS, Pretty JSON)
- Error handling

## Project Structure

```
src/
└── index.ts       # Entry point with single route
```

## API Endpoint

- `GET /` - Hello World JSON message

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/RockoAI/hono-cloudfront.git
cd hono-hello-world

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with hot reload
npm run dev
```

### Production

```bash
# Build for production
npm run build

# Start the production server
npm start
```

## License

ISC
