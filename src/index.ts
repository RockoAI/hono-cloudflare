/// <reference types="@cloudflare/workers-types" />
import { Hono } from "hono";
import { logger } from "hono/logger";
import { cors } from "hono/cors";
import { prettyJSON } from "hono/pretty-json";

// Initialize Hono app
const app = new Hono();

// Global middleware
app.use("*", logger());
app.use("*", cors());
app.use("*", prettyJSON());

// Home route - only route in the app
app.get("/", (c) => {
  return c.json({
    message: "Hello World",
  });
});

// Error handling
app.notFound((c) => {
  return c.json({ message: "Not Found" }, 404);
});

app.onError((err, c) => {
  console.error(`${err}`);
  return c.json({ message: "Internal Server Error" }, 500);
});

// Export for Cloudflare Workers
addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(app.fetch(event.request));
});
