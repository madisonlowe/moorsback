import mongoose from "mongoose";
import assert from "assert";

import { testIncidentSchema } from "../src/models/incidents.models.js";
const TestIncident = mongoose.model("TestIncident", testIncidentSchema);

describe("Updating an incident", () => {
  let incident;

  beforeEach(() => {
    incident = new TestIncident({
      _id: "t35tid",
      type: "Update Test",
      when: "Description of when the event occurred.",
      description:
        "Testing updating an incidentObject with Mocha in delete_test.js.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    });
    incident.save().then(() => done());
  });

  function helperFunc(assertion, done) {
    assertion
      .then(() => TestIncident.find({ _id: "t35tid" }))
      .then((incident) => {
        assert(incident.when === "Updated time report description.");
        done();
      })
      .catch((err) => done(err));
  }

  it("Update an incident using id", (done) => {
    helperFunc(
      incident.updateOne({ when: "Updated time report description." }),
      done
    );
  });
});

// UPDATE TESTS NOT WORKING.
