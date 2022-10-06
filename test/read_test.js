import mongoose from "mongoose";
import assert from "assert";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

const incidentObject = {
  type: "Test",
  when: "Test time of day or date description.",
  description:
    "Testing reading a new incidentObject with Mocha in read_test.js.",
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

beforeEach(() => {
  let incident = new Incident(incidentObject);
  incident.save().then(() => done());
});

describe("Reading details of Incident", () => {
  it("Finds incident with the correct description", (done) => {
    Incident.findOne({
      description:
        "Testing reading a new incidentObject with Mocha in read_test.js.",
    })
      .then((incident) => {
        assert(
          incident.description === // This occasionally returns null TypeError? Not on every test.
            "Testing reading a new incidentObject with Mocha in read_test.js."
        );
        done();
      })
      .catch((err) => done(err));
  });
});
