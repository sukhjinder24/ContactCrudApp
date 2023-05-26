const express = require("express");

const router = express.Router();
const {
  getContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
} = require("../controllers/contactController");

//ROUTES:

//GET All, Create new
router.route("/").get(getContacts).post(createContact);

// Get, update, delete By ID
router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

module.exports = router;
