import { createServer } from "http";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import serveStatic from "serve-static";

const PORT = process.env.PORT || 8080;

// Serve static files using serve-static middleware
const serve = serveStatic(fileURLToPath(new URL("../static", import.meta.url)));

const server = createServer((req, res) => {
  serve(req, res, () => {
    const indexPath = resolve(dirname(fileURLToPath(import.meta.url)), "../static/index.html");
    const indexContent = readFileSync(indexPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(indexContent);
  });
});

server.on("listening", () => {
  const addr = server.address();
  console.log(`Server running on port ${addr.port}\n`);
  console.log(`Local: http://localhost:${addr.port}`);
  console.log(`On Your Network: http://localhost:${addr.port}`);
});

server.listen(PORT);