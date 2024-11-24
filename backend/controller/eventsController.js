// backend/eventController.js

// const { _createEvent, _fetchEvents } = require("../models/eventsModel.js");
import {
  _createEvent,
  _fetchEvents,
  _deleteAllEvents,
  _deleteEvent,
  _updateEvent,
} from "../models/eventsModel.js";

// Fonction pour créer un évènement
export const createEvent = async (req, res) => {
  const { bob } = req.body; //bob est le nom da clé que j'ai donné, je peux appeler ça banane
  console.log(bob);
  if (!bob) {
    return res.status(400).json({ message: "Event title field is required." });
  }
  try {
    const newEvent = {
      title: bob,
    };
    console.log("Request to create event:", newEvent);

    const createdEvent = await _createEvent(newEvent);

    res.status(201).json(createdEvent);
  } catch (error) {
    console.error("Server error while creating event:", error);
    res.status(500).json({ message: "Server error while creating event." });
  }
};

// Fonction pour afficher tous les évènements
export const getAllEvents = async (req, res) => {
  try {
    const allEvents = await _fetchEvents();
    res.status(200).json(allEvents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error while fetching events." });
  }
};

// function pour supprimer un évènement
export const deleteEvent = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEvent = await _deleteEvent(id);
    console.log("Deleted event:", deletedEvent);
    res.status(200).json(deletedEvent);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error while deleting this event." });
  }
};

// Fonction pour supprimer tous les évènements
export const deleteAllEvents = async (req, res) => {
  try {
    await _deleteAllEvents();
    res.status(200).json({ message: "All Events deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Server error while deleting all events." });
  }
};

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  try {
    if (id !== -1) {
      const updatedEvent = await _updateEvent(id, title);
      console.log("Title updated:", updatedEvent);
      res.status(200).json(updatedEvent);
    } else {
      console.log("Event not found");
      res.status(404).json({ error: "Event not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error while updating this event." });
  }
};
// export default { createEvent, getAllEvents };
