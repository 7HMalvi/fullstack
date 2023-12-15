const mongoose = require("mongoose");

const appointmentSchema =  mongoose.Schema({
    date: Date,
    time: String,
    isTimeSlotAvailable : { type: Boolean, default:true}
 });

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;