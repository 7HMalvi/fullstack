const Appointment = require("../models/appointment");

const getappointment = (req, res) => {
    console.log("hey apt");
        res.render("appointment");
}

const createSlots = async(req, res) => {
    console.log("hey crate");
    const {
        date,
        time1,
        time2,
        time3,
        time4,
        time5,
        time6,
        time7,
        time8,
        time9,
        time10,
      } = req.body;
      if (time1) {
        const isFound = await Appointment.findOne({ date: date, time: time1 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time1,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time2) {
        const isFound = await Appointment.findOne({ date: date, time: time2 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time2,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time3) {
        const isFound = await Appointment.findOne({ date: date, time: time3 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time3,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time4) {
        const isFound = await Appointment.findOne({ date: date, time: time4 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time4,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time5) {
        const isFound = await Appointment.findOne({ date: date, time: time5 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time5,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time6) {
        const isFound = await Appointment.findOne({ date: date, time: time6 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time6,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time7) {
        const isFound = await Appointment.findOne({ date: date, time: time7 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time7,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time8) {
        const isFound = await Appointment.findOne({ date: date, time: time8 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time8,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time9) {
        const isFound = await Appointment.findOne({ date: date, time: time9 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time9,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      if (time10) {
        const isFound = await Appointment.findOne({ date: date, time: time10 });
        if (!isFound) {
          const user = new Appointment({
            date: date,
            time: time10,
            isTimeSlotAvailable: true,
          });
          await user.save();
        }
      }
      res.redirect("/");
}


module.exports = { getappointment, createSlots }