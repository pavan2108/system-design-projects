import { createServer } from "http";


const server = createServer((req, res) => {
  res.end("Hello World");
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
