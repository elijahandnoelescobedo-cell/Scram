import express from "express";
import { createServer } from "http";
import { fileURLToPath } from "url";
import { join, dirname } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const server = createServer(app);

// Serve static files
app.use(express.static(join(__dirname, "public")));

// Health check
app.get("/health", (req, res) => res.json({ status: "ok" }));

// Try to load Scramjet (graceful fallback if not installed yet)
try {
  const { ScramjetServer } = await import("@mercuryworkshop/scramjet");
  const scramjet = new ScramjetServer({ server });
  console.log("✅ Scramjet loaded successfully");
} catch (e) {
  console.warn("⚠️  Scramjet not loaded:", e.message);
  console.warn("    Run: npm install");
}

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Proxy running at http://localhost:${PORT}`);
});
