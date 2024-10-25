// server.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Menetapkan folder "public" sebagai folder untuk file statis
app.use(express.static(path.join(__dirname, '/', 'public')));

// Rute untuk halaman utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Menjalankan server pada port 3000
app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
