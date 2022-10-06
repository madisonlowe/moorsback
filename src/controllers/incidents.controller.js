import mongoose from "mongoose";

import { IncidentSchema } from "../models/incidents.models.js";

const Incident = mongoose.model("Incident", IncidentSchema);

export const addIncident = (req, res) => {
  let newIncident = new Incident(req.body);

  newIncident.save((err, incident) => {
    if (err) {
      res.send(err);
    }
    res.json(incident);
  });
};

export const getIncidents = (req, res) => {
  Incident.find({}, (err, incident) => {
    if (err) {
      res.send(err);
    }
    res.json(incident);
  });
};

export const getIncidentById = (req, res) => {
  Incident.findById(req.params.id, (err, incident) => {
    if (err) {
      res.send(err);
    }
    res.json(incident);
  });
};

// UPDATE route not currently working on Postman tests.
export const updateIncidentById = (req, res) => {
  Incident.findOneAndUpdate({ _id: req.params.id }, req.body),
    { new: true },
    (err, incident) => {
      if (err) {
        res.send(err);
      }
      res.json(incident);
    };
};

export const deleteIncidentById = (req, res) => {
  Incident.remove({ _id: req.params.id }, (err, incident) => {
    if (err) {
      res.send(err);
    }
    res.json({ message: "This record was deleted." });
  });
};
