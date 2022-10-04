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
