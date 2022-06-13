const  router = require('express').Router()
const barangController = require('../controller/barangController')
// Input
router.post('/input-barang', (req, res) => {
    barangController.inputBarang(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Update
router.put('/update-barang/:id', (req, res) => {
    barangController.updateBarang(req.params.id, req.body)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Get All
router.get('/get-all-barang', (req, res) => {
    barangController.getallBarang()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Get ById
router.get('/get-data-barang/:id', (req, res) => {
    barangController.getBarangbyID(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
// Delete
router. delete('/delete-data-barang/:id', (req, res) => {
    barangController.deleteBarang(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.json(err)
    })
})
module.exports = router