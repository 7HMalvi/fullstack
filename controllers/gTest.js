const User = require("../models/userModel");
const Appointment = require("../models/appointment");

// Render G page
const getG = async(req, res) => {
    try {
        const user = await User.findById(req.session.userId);

        let date_ob = new Date();
        let date = ("0" + date_ob.getDate()).slice(-2);
        let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
        let year = date_ob.getFullYear();
    
        let bookdate = year + "-" + month + "-" + date;
        const appoint = await Appointment.find({
            date: { $gte: new Date(bookdate), $lte: new Date(bookdate) },
          });

        res.render("g", {
            user: user,
            appoint: appoint,

        });
    } catch (error) {
        res.render("g", {
            user: false,
        });
    }
};

const updateUser = async(req, res) => {
    let user;
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    let bookdate = year + "-" + month + "-" + date;
    const appoint = await Appointment.find({
        date: { $gte: new Date(bookdate), $lte: new Date(bookdate) },
      });

    try {
        user = await User.findById(req.session.userId);
       
        user.fname = req.body.fname || user.fname;
        user.lname = req.body.lname || user.lname;
        user.licenseNO = req.body.licenseNO || user.licenseNO;
        user.dob = req.body.dob || user.dob;
        user.age = req.body.age || user.age;

        user.carDetails.make = req.body.make || user.carDetails.make;
        user.carDetails.model = req.body.model || user.carDetails.model;
        user.carDetails.year = req.body.year || user.carDetails.year;
        user.carDetails.plateNo =
            req.body.plateNo || user.carDetails.plateNo;

        user = await user.save();
        res.render("g", { user : user,  appoint: appoint });
    } catch (error) {
        res.redirect("/");
    }
};

const showTimeSlotG = async (req, res) => {
    try {
      let { bookdate } = req.body;
      if (!bookdate) {
        bookdate = Date();
      }
      const user = await User.findById(req.session.userId);
      const appoint = await Appointment.find({
        date: { $gte: new Date(bookdate), $lte: new Date(bookdate) },
      });
    
      if (user.fname != "default") {
      }
  
      res.render("g", {
        user: user,
        appoint: appoint,
      });
    } catch (error) {
      console.log(error);
    }
  };

const bookAppointmentG = async(req, res) => { 
    console.log("book apt G");
    const { aptId } = req.body;
    let user;
    let appointments;
  
    try {
      user = await User.findById(req.session.userId);
      user.appointmentid = aptId;
      
      appointments = await Appointment.findById(aptId);
      var timeslot = appointments.time;
      var bookdate = appointments.date;
      appointments.isTimeSlotAvailable = false;
      appointments = await appointments.save();
      user.testType = "G";
    
      user.appointmentBooked =  [ bookdate, timeslot ];
      user = await user.save();
      res.redirect("/g");
    } catch (error) {
      console.log(error);
      res.redirect("/");
    }

  };

module.exports = { getG, updateUser,showTimeSlotG, bookAppointmentG};