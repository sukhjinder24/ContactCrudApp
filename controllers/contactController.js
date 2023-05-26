const asyncHandler = require('express-async-handler')
const Contact = require('../models/contactModel')


// @desc Get All Contacts
// @route GET /contact/
// @access Public

const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts)
});

// @desc Get Contact by ID
// @route GET /contact/:id
// @access Public

const getContactById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("No such Contact exist");
  }

  res.json(contact);
});

// @desc Create Contact
// @route POST /contact/
// @access Public

const createContact = asyncHandler(async (req, res) => {
  // console.log(req.body)
  // const name=req.body.name;
  // console.log(name)
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact)
});

// @desc Update Contact By ID
// @route PUT /contact/:id
// @access Public

const updateContactById = asyncHandler(async (req, res) => {

  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("No such Contact exist");
  }
  console.log("Update hit")
  const updatedContact = await Contact.findByIdAndUpdate(id,req.body,{new:true});
  res.json(updatedContact);
});


// @desc Delete Contact By ID
// @route DELETE /contact/:id
// @access Public

const deleteContactById = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error("No such Contact exist");
  }
  const updatedContact = await Contact.findByIdAndDelete(id)
  res.json({message:"Deleted"});


});

module.exports = {
  getContacts,
  getContactById,
  createContact,
  updateContactById,
  deleteContactById,
};
