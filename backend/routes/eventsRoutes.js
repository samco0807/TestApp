// backend/eventRoutes.js

// const router = require("express").Router();
import { Router } from "express";
import { createEvent, getAllEvents, deleteAnEvent, deleteAllEvents } from "../controller/eventsController.js";
const router = Router();

// const {
//   createEvent,
//   getAllEvents,
// } = require("../controller/eventsController.js");

router.get("/moshe", getAllEvents);
router.post("/moshe", createEvent);
router.delete("/moshe/:id", deleteAnEvent);
router.delete("/moshe", deleteAllEvents);


// module.exports = router;
export default router;
