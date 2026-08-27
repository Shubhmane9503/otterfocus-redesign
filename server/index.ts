import express from "express";
import { createServer } from "http";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath, { redirect: false }));

  // Serve the statically prerendered route document when it exists, with a client-side fallback.
  app.get("*", (req, res) => {
    const routePath = req.path.replace(/^\/+|\/+$/g, "");
    const prerenderedFile = path.join(staticPath, routePath, "index.html");

    if (routePath && fs.existsSync(prerenderedFile)) {
      res.sendFile(prerenderedFile);
      return;
    }

    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
  });
}

startServer().catch(console.error);
