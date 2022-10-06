// Updated incident by ID.
import mongoose from "mongoose";
import assert from "assert";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Deleting an incident", () => {
  const incidentObject = {
    _id: "t35tid",
    type: "Test",
    when: "Updated time report description.",
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

  // Handling Redundant Code
  function helperFunc(assertion, done) {
    assertion
      .then(() => Incident.find({}))
      .then((incidents) => {
        assert(incidents.length === 1);
        assert(incidents[0].when === "Updated time report description.");
        done();
      })
      .catch((err) => done(err));
  }

  it("Sets and saves an incident using an instance", (done) => {
    // Not yet updated in MongoDb
    incident.set("when", "Updated time report description.");
    helperFunc(incident.save(), done);
  });

  it("Update an incident using instance", (done) => {
    helperFunc(
      incident.updateOne({ when: "Updated time report description." }),
      done
    );
  });
});
