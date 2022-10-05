import mongoose from "mongoose";
import assert from "assert";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Deleting an Incident", () => {
  const incidentObject = {
    type: "Test",
    when: "Test time of day or date description.",
    description:
      "Testing deleting an incidentObject with Mocha in delete_test.js.",
    location: {
      address: {
        firstline: "14 Testing Drive",
        secondline: "Test Village",
        postcode: "T35 T1NG",
        city: "Practiceford",
        county: "Testshire",
      },
      what3words: "test.practice.tryout",
    },
  };

  let incident;

  beforeEach(() => {
    incident = new Incident(incidentObject);
    incident.save().then(() => done());
  });

  it("Removes an Incident using its instance", (done) => {
    incident
      .remove()
      .then(() =>
        Incident.findOne({
          description:
            "Testing deleting an incidentObject with Mocha in delete_test.js.",
        })
      )
      .then((incident) => {
        assert(incident === null);
        done();
      });
  });

  it("Removes an incident", (done) => {
    Incident.findOneAndRemove({ type: "Test" })
      .then(() =>
        Incident.findOne({
          description:
            "Testing deleting an incidentObject with Mocha in delete_test.js.",
        })
      )
      .then((incident) => {
        assert(incident === null);
        done();
      });
  });

  it("Removes an incident using its id", (done) => {
    Incident.findByIdAndRemove(incident._id)
      .then(() =>
        Incident.findOne({
          description:
            "Testing deleting an incidentObject with Mocha in delete_test.js.",
        })
      )
      .then((incident) => {
        assert(incident === null);
        done();
      });
  });
});
