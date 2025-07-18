import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { createServer } from "http";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = createServer(app);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  const publicPath = join(__dirname, "../dist/public");
  app.use(express.static(publicPath));
  
  // Serve React app for all non-API routes
  app.get("*", (req, res) => {
    res.sendFile(join(publicPath, "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  if (process.env.NODE_ENV === "development") {
    console.log(`Development server: http://localhost:${PORT}`);
  }
});