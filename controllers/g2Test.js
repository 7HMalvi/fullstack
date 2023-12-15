const User = require("../models/userModel");
const Appointment = require("../models/appointment");
// Render G2 Page
const getG2 = async (req, res) => {
  try {
    let date_ob = new Date();
    let date = ("0" + date_ob.getDate()).slice(-2);
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();

    let bookdate = year + "-" + month + "-" + date;

    const user = await User.findById(req.session.userId);

    const appoint = await Appointment.find({
      date: { $gte: new Date(bookdate), $lte: new Date(bookdate) },
    });

    res.render("g2", {
      user: user,
      appoint: appoint,
    });
  } catch (error) {
    res.redirect("/g2");
  }
};

const showTimeSlot = async (req, res) => {
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

    res.render("g2", {
      user: user,
      appoint: appoint,
    });
  } catch (error) {
    console.log(error);
  }
};

const createUser = async (req, res) => {
  const { fname, lname, licenseNO, dob, age, make, model, year, plateNo } =
    req.body;
  try {
    User.findByIdAndUpdate(
      req.session.userId,
      {
        fname,
        lname,
        licenseNO,
        dob,
        age,
        carDetails: {
          make,
          model,
          year,
          plateNo,
        },
      },
      (error, user) => {
        if (error) {
          console.log(error);
          res.redirect("/g2");
        } else {
          res.redirect("/g2");
        }
      }
    );
  } catch (error) {
    console.log("error");
  }
};

const bookAppointment = async(req, res) => { 
  console.log("book apt G2");
  const { aptId } = req.body;
  let user;
  let appointments;

  try {
    user = await User.findById(req.session.userId);
    user.appointmentid = aptId;
    
    console.log(aptId);
    appointments = await Appointment.findById(aptId);
    var timeslot = appointments.time;
    var bookdate = appointments.date;
    appointments.isTimeSlotAvailable = false;
    appointments = await appointments.save();
    user.testType = "G2";
    //selectedDate = true;
  
    user.appointmentBooked =  [ bookdate, timeslot ];
    user = await user.save();
    res.redirect("/g2");
  } catch (error) {
    console.log(error);
    res.redirect("/");
  }
};


module.exports = { getG2, createUser, showTimeSlot, bookAppointment };
