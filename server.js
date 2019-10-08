// This file doesn't go through babel or webpack transformation.
// Make sure the syntax and sources this file requires are compatible with the current node version you are running
// See https://github.com/zeit/next.js/issues/1245 for discussions on Universal Webpack or universal Babel

const app = require("express")();
const server = require("http").Server(app);
const io = require("socket.io")(server);
const next = require("next");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

io.on("connection", socket => {
  console.log("socket connection SERVER");
  // await new Promise(res => setTimeout(res, 1000));
  socket.broadcast.emit("ping message", "PING");

  socket.on("ping message", msg => {
    console.log("PONG GOING TO CLIENT");
    socket.broadcast.emit("pong message", "PONG");
  });
  socket.on("pong message", msg => {
    console.log("PING GOING TO CLIENT");
    socket.broadcast.emit("ping message", "PING");
  });
});

nextApp.prepare().then(() => {
  app.get("*", (req, res) => {
    return nextHandler(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});