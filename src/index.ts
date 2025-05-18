/// <reference types="@cloudflare/workers-types" />

import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// Export for Cloudflare Workers
addEventListener("fetch", (event: FetchEvent) => {
  event.respondWith(app.fetch(event.request));
});
