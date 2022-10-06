//Setting projek express dan memanggil cookie parser
const express = require('express')
const cookieParser = require('cookie-parser')

//Setup express app
const app = express()
app.use(cookieParser());

//Membuat route homepage
app.get('/', (req, res)=> {
  res.send('Selamat Datang di HTTP Cookies');
})

//Membuat non secure cookies
app.get('/setcookie', (req, res)=> {
  res.cookie('Cookie token', 'Nama value cookie');
  res.send('Cookie telah tersimpan');
})

//Membuat secure cookie
app.get('/setcookieaman', (req, res)=> {
  res.cookie('Cookie yang aman', 'Value cookie yang aman', {
    maxAge: 5000,
    expires: new Date('01 12 2022'),
    secure: true,
    httpOnly: true,
    sameSite: 'lax'
  });

  res.send('Cookie telah tersimpan');
})

//Hapus cookie
app.get('/hapus', (req, res) => {
  res.clearCookie()
  res.send('Menghapus Cookie');
})

//Melihat cookie
app.get('/getcookie', (req, res) => {
  console.log(res.cookie)
  res.send(req.cookies);
})

app.listen(8000, ()=> console.log('Server running pada port 8000'))