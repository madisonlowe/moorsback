import mongoose from "mongoose";
import { assert, expect, should } from "chai";

import { TestIncidentSchema } from "../src/models/incidents.models.js";
const TestIncident = mongoose.model("TestIncident", TestIncidentSchema);

beforeEach(() => {
  let incident = new TestIncident({
    _id: "r34dt35t1d",
    type: "Read Test",
    when: "Test time of day or date description.",
    description:
      "Testing reading a new incidentObject with Mocha in read_test.js.",
    location: {
      address: {
        firstline: "14 Testing Drive",
        postcode: "T35 T1NG",
      },
    },
  });
  incident.save().then(() => done());
});

describe("Reading details of Incident", () => {
  it("Finds incident with the correct description", async () => {
    await TestIncident.findOne({
      _id: "r34dt35t1d",
    }).then((incident) => {
      expect(incident.description).equal(
        "Testing reading a new incidentObject with Mocha in read_test.js."
      );
    });
  });
});
