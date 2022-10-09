import mongoose from "mongoose";
import { assert, expect, should } from "chai";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Validating the schema", function () {
  it("Should throw vaidation error when missing 'type' KV pair", async function () {
    const incidentObject = {
      when: "Test time of day or date description.",
      description: "Test incident.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    };

    const newIncident = new Incident(incidentObject);
  });

  it("Should throw vaidation error when missing 'when' KV pair", async function () {
    const incidentObject = {
      type: "Validation Test",
      description: "Test incident.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    };

    const newIncident = new Incident(incidentObject);
  });

  it("Should throw vaidation error when missing 'description' KV pair", async function () {
    const incidentObject = {
      type: "Validation Test",
      when: "Test time of day or date description.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    };

    const newIncident = new Incident(incidentObject);
  });

  it("Should not throw validation error.", async function () {
    const incidentObject = {
      type: "Validation Test",
      when: "Test time of day or date description.",
      description: "Test incident.",
      location: {
        address: {
          firstline: "14 Testing Drive",
          postcode: "T35 T1NG",
        },
      },
    };

    const newIncident = new Incident(incidentObject);
  });
});
