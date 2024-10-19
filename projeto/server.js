const http = require('http');

// Define a porta do servidor
const PORT = 3000;

// Cria o servidor
const server = http.createServer((req, res) => {
  res.statusCode = 200; 
  res.setHeader('Content-Type', 'text/plain'); 
  res.end('ok\n');
});

// Inicia o servidor
server.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}/`);
});