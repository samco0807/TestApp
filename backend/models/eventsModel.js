// backend/eventModel.js

// const db = require("../config/knex.js");
import db from "../config/knex.js";

// Normalement pas besoin de async await dans le model
export const _createEvent = async (title) => {
  try {
    console.log("Inserting new event:", title);
    const newEvent = await db("event").insert(title).returning("*");
    return newEvent;
  } catch (error) {
    console.error("error creating new event", error);
  }
};

export const _fetchEvents = async () => {
  try {
    const fetchAllTheEvents = await db("event").returning("*");
    return fetchAllTheEvents;
  } catch (error) {
    console.error("error fetch events", error);
  }
};

export const _deleteAnEvent = async (id) => {
  try {
    const deleteAnEvent = await db("event").where({ id }).del().returning("*");
    return deleteAnEvent;
  } catch (error) {
    console.error("error deleting this event", error);
    throw error;
  }
};

export const _deleteAllEvents = async () => {
  try {
    await db("event").del();
  } catch (error) {
    console.error("error deleting all events", error);
    throw error;
  }
};

// module.exports = {
//   _createEvent,
//   _fetchEvents,
// };
