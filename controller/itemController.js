const { Items } = require("../model") // items database lai require gareko

exports.createItem = async (req, res) => {        // create item module
  try {
    let data = {
      Name: req.body.Name,
      Description: req.body.Description
    }
    const addData = await Items.create(data)
    if (addData) {
      res.status(200).json({
        message: "created item successfully"
      })
    } else {
      res.status(500).json({
        message: "Failed to create item"
      })
    }
  } catch (error) {
    console.error("Error creating item:", error)
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

exports.getItems = async (req, res) => {         //get all items module
  try {
    const datas = await Items.findAll()
    res.status(200).json({
      message: "data fetched",
      data: datas
    })
  } catch (error) {
    console.error("Error fetching items:", error)
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

exports.getItemsbyID = async (req, res) => {          // get items by their primary key in the database
  try {
    let datas = await Items.findByPk(req.params.id)
    if (datas) {
      res.status(200).json({
        message: "data fetched",
        data: datas
      })
    } else {
      res.status(404).json({
        message: "Item not found"
      })
    }
  } catch (error) {
    console.error("Error fetching item by ID:", error)
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

exports.deleteItem = async (req, res) => {        //delete items by their pk
  try {
    const rowsDeleted = await Items.destroy({ where: { id: req.params.id } })
    if (rowsDeleted > 0) {
      res.status(200).json({
        message: "Item has been deleted"
      })
    } else {
      res.status(404).json({
        message: "Item not found"
      })
    }
  } catch (error) {
    console.error("Error deleting item:", error)
    res.status(500).json({
      message: "Internal server error"
    })
  }
}

exports.updateItem = async (req, res) => {            //update items by their pk
  try {
    const [rowsUpdated] = await Items.update(
      { ...req.body },
      { where: { id: req.params.id } }
    )
    if (rowsUpdated > 0) {
      res.status(200).json({
        message: "Item has been updated"
      })
    } else {
      res.status(404).json({
        message: "Item not found"
      })
    }
  } catch (error) {
    console.error("Error updating item:", error)
    res.status(500).json({
      message: "Internal server error"
    })
  }
}
