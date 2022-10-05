import mongoose from "mongoose";
import assert from "assert";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Creating documents in MongoDB", () => {
  it("Creates a New Incident", (done) => {
    const incidentObject = {
      type: "Test",
      when: "Test time of day or date description.",
      description:
        "Testing creating a new incidentObject with Mocha in create_test.js.",
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

    const newIncident = new Incident(incidentObject);
    newIncident
      .save() // returns a promise after some time
      .then(() => {
        //if the newIncident is saved in db and it is not new
        assert(!newIncident.isNew);
        done();
      });
  });
});
