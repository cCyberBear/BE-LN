const app = require("./src/app");

const PORT = 3055;

const server = app.listen(PORT, () => {
  console.log("🚀 ~ server ~ server:", PORT);
});

process.on("SIGNINT", () => {
  server.close(() => console.log(`Exit`));
});
