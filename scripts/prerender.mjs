/**
 * Pre-rendering script for SEO.
 *
 * After `vite build`, this script:
 * 1. Starts a local static server serving `dist/`
 * 2. Opens the page in a headless browser (Puppeteer)
 * 3. Waits for React to render all content
 * 4. Captures the full HTML (with rendered content)
 * 5. Saves it back to `dist/index.html`
 *
 * Result: crawlers that don't execute JavaScript (Bing, social media, some Google requests)
 * will see fully rendered HTML instead of an empty `<div id="root"></div>`.
 */
import puppeteer from "puppeteer";
import { createServer } from "http";
import { readFileSync, writeFileSync } from "fs";
import { resolve, join, extname } from "path";

const DIST_DIR = resolve("dist");
const PORT = 4173;

const MIME_TYPES = {
  ".html": "text/html",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".webm": "video/webm",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".webmanifest": "application/manifest+json",
};

function startServer() {
  return new Promise((resolvePromise) => {
    const server = createServer((req, res) => {
      let filePath = join(DIST_DIR, req.url === "/" ? "index.html" : req.url);

      try {
        const content = readFileSync(filePath);
        const ext = extname(filePath);
        res.writeHead(200, {
          "Content-Type": MIME_TYPES[ext] || "application/octet-stream",
        });
        res.end(content);
      } catch {
        // SPA fallback - serve index.html for any route
        try {
          const html = readFileSync(join(DIST_DIR, "index.html"));
          res.writeHead(200, { "Content-Type": "text/html" });
          res.end(html);
        } catch {
          res.writeHead(404);
          res.end("Not Found");
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`Static server running on http://localhost:${PORT}`);
      resolvePromise(server);
    });
  });
}

async function prerender() {
  console.log("\nStarting pre-rendering...\n");

  const server = await startServer();

  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    console.log("Loading page in headless browser...");
    
    await page.goto(`http://localhost:${PORT}/`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // wait a bit for any animations/lazy content to settle
    await new Promise((r) => setTimeout(r, 2000));

    const html = await page.content();

    const outputPath = join(DIST_DIR, "index.html");
    writeFileSync(outputPath, html, "utf-8");

    const hasContent = html.includes("<section") && html.includes("<h1");
    const rootEmpty = html.includes('<div id="root"></div>');

    if (hasContent && !rootEmpty) {
      const sizeKB = (Buffer.byteLength(html, "utf-8") / 1024).toFixed(1);
      console.log(`\nPre-rendering successful!`);
      console.log(`HTML size: ${sizeKB} KB`);
      console.log(`Contains rendered sections: ${hasContent}`);
      console.log(`Output: ${outputPath}\n`);
    } else {
      console.warn(`\nWarning: HTML may not be fully rendered.`);
      console.warn(`Contains sections: ${hasContent}`);
      console.warn(`Root empty: ${rootEmpty}\n`);
    }

    await browser.close();
  } finally {
    server.close();
  }
}

prerender().catch((err) => {
  console.error("Pre-rendering failed:", err);
  process.exit(1);
});
