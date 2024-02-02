import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { createServer } from "http";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import serveStatic from "serve-static";

const firebaseConfig = {
  apiKey: "AIzaSyA9mCP-ggkwspVdxusAWMAWTbFRU5uWf98",
  authDomain: "insidious-data.firebaseapp.com",
  projectId: "insidious-data",
  storageBucket: "insidious-data.appspot.com",
  messagingSenderId: "551748709974",
  appId: "1:551748709974:web:ff8cc5e10187a1c67d55f7",
  measurementId: "G-1SEWMKZFW5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app); // Initialize Firestore

const PORT = process.env.PORT || 8080;

// Serve static files using serve-static middleware
const serve = serveStatic(fileURLToPath(new URL("../static", import.meta.url)));

const server = createServer((req, res) => {
  // Delegate static file serving to the serve-static middleware
  serve(req, res, () => {
    // If the request is not for a static file, serve the index.html file
    const indexPath = resolve(dirname(fileURLToPath(import.meta.url)), "../static/index.html");
    const indexContent = readFileSync(indexPath, "utf-8");
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(indexContent);
  });
});

// Route to handle requests for fetching pastes
server.on("request", async (req, res) => {
  if (req.url.startsWith("/paste/")) {
    const pasteId = req.url.slice(7); // Extract paste ID from the URL
    const pasteRef = doc(db, "pastes", pasteId);
    try {
      const docSnapshot = await getDoc(pasteRef);
      if (!exists(docSnapshot)) {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Paste not found");
      } else {
        const pasteData = docSnapshot.data();
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(pasteData));
      }
    } catch (error) {
      console.error("Error fetching paste:", error);
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Internal Server Error");
    }
  }
});

server.on("listening", () => {
  const addr = server.address();
  console.log(`Server running on port ${addr.port}\n`);
  console.log(`Local: http://localhost:${addr.port}`);
  console.log(`On Your Network: http://localhost:${addr.port}`);
});

server.listen(PORT);
