const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please add the contact Name"],
    },
    email: {
        type: String,
        require: [true, "Please add the contact Email Address"],
    },
    phone: {
        type: String,
        require: [true, "Please add the contact Phone Number"],
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact",contactSchema)