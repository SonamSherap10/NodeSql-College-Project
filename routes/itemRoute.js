const { createItem, getItems, getItemsbyID, deleteItem, updateItem } = require("../controller/itemController")

const router = require("express").Router()

router.post('/add',createItem)
router.get('/get',getItems)
router.get('/get/:id',getItemsbyID)
router.delete('/delete/:id',deleteItem)
router.post('/update/:id',updateItem)
module.exports= router