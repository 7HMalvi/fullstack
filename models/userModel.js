const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const g2testformSchema = mongoose.Schema({
    fname: {type: String, default: "default",required: true,},
    lname: {type: String, default: "default", required: true,},
    licenseNO: {type: String, default: "default", required: true,},
    username: { type: String, default: "default", required: true, unique: true,},
    password: {type: String, default: "default", required: true, },
    userType: {type: String, enum: ["driver", "examiner", "admin"], default: "driver", required: true,},
    dob: {type: Date, default: Date.now(), required: true,},
    age: {type: Number, default: 0, required: true,},
    carDetails: {
        make: {type: String, default: "default", required: true,},
        model: {type: String, default: "default", required: true,},
        year: {type: Number, default: "0000", required: true,},
        plateNo: {type: String, default: "default", required: true,},
    }, 
    appointmentid:{
        type: String,
        default: "default",
    },
    appointmentBooked: {type: Array},
    testType: {type: String},
    testComments: String,
    testResult: { type: Boolean, default: null},
});

const g2testform = mongoose.model("g2testform", g2testformSchema);

module.exports = g2testform;