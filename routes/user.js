const router = require("express").Router();

const authMiddleware = require("../middlewares/authMiddleware");

const dashboard = require("../controllers/dashboard");
const {
  getG2,
  createUser,
  showTimeSlot,
  bookAppointment,
} = require("../controllers/g2Test");
const {
  getG,
  updateUser,
  bookAppointmentG,
  showTimeSlotG,
} = require("../controllers/gTest");
const { getLogin } = require("../controllers/loginUser");
const { getappointment, createSlots } = require("../controllers/createslots");
const { getExaminer, getUserDetails } = require("../controllers/examiner");
const { listCandidates } = require("../controllers/listCandidates");
const { storeResult } = require("../controllers/storeResult");

router.get("/", dashboard);

router.get("/g2", authMiddleware, getG2);

router.post("/g2", authMiddleware, createUser);

router.post("/showTimeSlot", authMiddleware, showTimeSlot);

router.post("/showTimeSlotG", authMiddleware, showTimeSlotG);

router.get("/g", authMiddleware, getG);

router.post("/g", authMiddleware, updateUser);

router.get("/login", getLogin);

router.get("/appointment", getappointment);

router.post("/createSlots", createSlots);

router.post("/bookAppointment", bookAppointment);

router.post("/bookAppointmentG", bookAppointmentG);

router.get("/examiner", getExaminer);

router.get("/getUserDetails/:id", getUserDetails);

router.get("/listCandidates", listCandidates);

router.post("/store/results/:id", storeResult);

module.exports = router;
