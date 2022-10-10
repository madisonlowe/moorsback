import mongoose from "mongoose";
import { expect, assert, should } from "chai";

import { testIncidentSchema } from "../src/models/incidents.models.js";
const TestIncident = mongoose.model("TestIncident", testIncidentSchema);

describe("Updating an incident", () => {
  let incident;

  beforeEach(() => {
    incident = new TestIncident({
      _id: "t35tid",
      type: "Update Test",
      when: "Description of when the event occurred.",
      description: "Testing updating an incidentObject with Mocha.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    });
    incident.save().then(() => done());
  });

  it("Update an incident using id", (done) => {
    let filter = { _id: incident._id };
    let update = { when: "Updated time report description." };
    TestIncident.findByIdAndUpdate(filter, update)
      .then(() => TestIncident.findOne(update))
      .then((incident) => {
        expect(incident.when).equal("Updated time report description.");
        done();
      })
      .catch((err) => done(err)); // Catch is for timeout issue calling done().
  });
});
