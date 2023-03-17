const express = require('express')

const app = express()

const path = require('path')

// Setup ejs
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));//บอกว่าfile html ทั้งหมดเก็บไว้ที่ views

// Setup static path
app.use(express.static(path.join(__dirname, 'public')))//folder ปัจจุบัน

// Config Router
const indexRouter = require('./routes/index')
const blogRouter = require('./routes/blog')

app.use('/', indexRouter)
app.use('/blog', blogRouter) //คือไรนะ



// // ดึงข้อมูล json มาเก็บไว้ในตัวแปร
// const article = require('./article-db')

// // กำหนดให้ path blogapi แสดงข้อมูลบทความทั้งหมดในรูปแบบ json
// app.get('/blogapi', (req, res) => {
//     res.json(article)
//   })
  

//   // กำหนดให้ path blogapi/id แสดงข้อมูลบทความตาม id ที่กำหนด
//   app.get('/blogapi/:id/:name', (req, res) => {
//     console.log(req.params);//test IMPORTANT for get path paramiter
//     console.log(req.query);
//     res.json(article.find(article => article.id === req.params.id))
//   })




// app.get('/', (req, res) => {
//   res.send('Hello World jaja')
// })

app.listen(3000, () => {
  console.log('Start server at port 3000.')
})
//run npx nodemon index.js(file_name)

//query string เอาไว้เพิ่ม parameter ตัวอื่นที่ไม่มีใน path ได้ ส่งค่าอะไรมาก็ได้


