const http = require('http'); // http modülünü dahil et

const server = http.createServer((req, res) => {
  // İstek yapılan URL'yi kontrol et
  if (req.url === '/') {
    // index sayfası
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Index sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/hakkimda') {
    // hakkimda sayfası
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>Hakkımda sayfasına hoşgeldiniz</h2>');
  } else if (req.url === '/iletisim') {
    // iletisim sayfası
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>İletişim sayfasına hoşgeldiniz</h2>');
  } else {
    // Sayfa bulunamadı
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h2>404 - Sayfa Bulunamadı</h2>');
  }
});

// Sunucuyu başlat ve 5000 portunda dinlemeye başla
server.listen(5000, () => {
  console.log('Sunucu http://localhost:5000 adresinde çalışıyor.');
});
