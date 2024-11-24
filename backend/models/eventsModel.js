// backend/eventModel.js

// const db = require("../config/knex.js");
import db from "../config/knex.js";

// Normalement pas besoin de async await dans le model  sauf update
export const _createEvent = async (title) => {
  try {
    console.log("Inserting new event:", title);
    const newEvent = await db("event").insert(title).returning("*");
    console.log("Event inserted successfully", newEvent)
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

export const _deleteEvent = async (id) => {
  try {
    const deletedEvent = await db("event").where({ id }).del().returning("*");
    console.log("Deleted event:", deletedEvent);
    return deletedEvent;
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

export const _updateEvent = async (id, title) => {
  try {
    const updatedEvent = await db("event").where({ id: id }).update(
      {
        title: title,
      },
      ["id", "title"]
    );
    console.log("Updated event:", updatedEvent);
    return updatedEvent;
  } catch (error) {
    console.error("error updating event", error);
    throw error
  }
};

// module.exports = {
//   _createEvent,
//   _fetchEvents,
// };
