const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')
const dbConfig = require('./config/DbConfig')

app.use(express.json({
    extended: true,
    limit: '20mb'
}))
app.use(express.urlencoded({
    extended: true,
    limit: '20mb'
}))

mongoose.connect(dbConfig.mongoUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => {
    console.log("connect mongodb");
}).catch(err => {
    console.log(err)
})

app.get("/", (req, res) => {
    res.json({
        msg: "selamat datang di API"
    })
})

app.use('/users', require('./routes/userRoutes'))
app.use('/kategori', require('./routes/kategoriRoutes'))
app.use('/barang', require('./routes/barangRoutes'))

// app.get("/data/:npm/:nama", (req, res) => {
//     res.json({
//         npm : req.params.npm,
//         nama : req.params.nama
//     })
// })

// app.get("/data/dengan-query", (req, res) => {
//     res.json({
//         npm : req.query.npm,
//         nama : req.query.nama
//     })
// })

// app.post("/data/dengan-body", (req, res) => {
//     res.json({
//         npm : req.body.npm,
//         nama : req.body.nama
//     })
// })

// app.post("/data/biodata/:npm", (req, res) => {
//     res.json({
//         npm: req.params.npm,
//         nama: req.query.nama,
//         alamat: req.body.alamat
//     })
// })

app.listen(port, () => {
    console.log("server berjalan di port" + port);
})