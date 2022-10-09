import mongoose from "mongoose";
import assert from "assert";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Validating the schema", function () {
  it("Should throw vaidation error when missing 'type' KV pair", async function () {
    const newIncident = new Incident({
      when: "Test time of day or date description.",
      description: "Test incident.",
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
    });

    await assert.rejects(newIncident.save());
  });

  it("Should throw vaidation error when missing 'when' KV pair", async function () {
    const newIncident = new Incident({
      type: "Validation Test",
      description: "Test incident.",
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
    });

    await assert.rejects(newIncident.save());
  });

  it("Should throw vaidation error when missing 'description' KV pair", async function () {
    const newIncident = new Incident({
      type: "Validation Test",
      when: "Test time of day or date description.",
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
    });

    await assert.rejects(newIncident.save());
  });

  it("Should not throw validation error.", async function () {
    const newIncident = new Incident({
      type: "Validation Test",
      when: "Test time of day or date description.",
      description: "Test incident.",
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
    });

    await newIncident.save().then(() => {
      assert(!newIncident.isNew);
    });
  });
});
