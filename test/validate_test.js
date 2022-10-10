import mongoose from "mongoose";
import { assert, expect, should } from "chai";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Validating the schema", function () {
  it("Should throw validation error when missing 'type' KV pair", async function () {
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

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      expect(err.errors.type.kind).equal("required");
      expect(err.errors.type.path).equal("type");
      expect(err._message).equal("Incident validation failed");
    }
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

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      expect(err.errors.when.kind).equal("required");
      expect(err.errors.when.path).equal("when");
      expect(err._message).equal("Incident validation failed");
    }
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

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      expect(err.errors.description.kind).equal("required");
      expect(err.errors.description.path).equal("description");
      expect(err._message).equal("Incident validation failed");
    }
  });
});
