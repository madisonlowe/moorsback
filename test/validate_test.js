import mongoose from "mongoose";
import { assert, expect, should } from "chai";

import { IncidentSchema } from "../src/models/incidents.models.js";
const Incident = mongoose.model("Incident", IncidentSchema);

describe("Validating 'required' elements of the schema", function () {
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

describe("Validation and CastErrors for Strings in the schema", function () {
  it("Should cast incorrectly-submitted number to String", async function () {
    const incidentObject = {
      type: 12345,
      when: 12345,
      description: 12345,
      location: {
        address: {
          firstline: 12345,
          secondline: 12345,
          postcode: 12345,
          city: 12345,
          county: 12345,
        },
        what3words: 12345,
      },
    };

    let newIncident = new Incident(incidentObject);
    await newIncident.save().then(() => {
      expect(newIncident.type).equal("12345");
      expect(newIncident.when).equal("12345");
      expect(newIncident.description).equal("12345");
      expect(newIncident.location.address.firstline).equal("12345");
      expect(newIncident.location.address.secondline).equal("12345");
      expect(newIncident.location.address.postcode).equal("12345");
      expect(newIncident.location.address.city).equal("12345");
      expect(newIncident.location.address.county).equal("12345");
      expect(newIncident.location.what3words).equal("12345");
    });
  });

  it("Should cast incorrectly-submitted boolean to String", async function () {
    const incidentObject = {
      type: false,
      when: false,
      description: false,
      location: {
        address: {
          firstline: false,
          secondline: false,
          postcode: false,
          city: false,
          county: false,
        },
        what3words: false,
      },
    };

    let newIncident = new Incident(incidentObject);
    await newIncident.save().then(() => {
      expect(newIncident.type).equal("false");
      expect(newIncident.when).equal("false");
      expect(newIncident.description).equal("false");
      expect(newIncident.location.address.firstline).equal("false");
      expect(newIncident.location.address.secondline).equal("false");
      expect(newIncident.location.address.postcode).equal("false");
      expect(newIncident.location.address.city).equal("false");
      expect(newIncident.location.address.county).equal("false");
      expect(newIncident.location.what3words).equal("false");
    });
  });

  it("Should fail to cast incorrectly-submitted null to String", async function () {
    const incidentObject = {
      type: null,
      when: null,
      description: null,
      location: {
        address: {
          firstline: null,
          secondline: null,
          postcode: null,
          city: null,
          county: null,
        },
        what3words: null,
      },
    };

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      for (let i = 0; i < err.length; i++) {
        expect(err.errors[i].name).equal("ValidatorError");
        expect(err._message).equal("Incident validation failed");
        expect(err.name).equal("ValidationError");
      }
    }
  });

  it("Should fail to cast incorrectly-submitted object to String", async function () {
    const incidentObject = {
      type: {},
      when: {},
      description: {},
      location: {
        address: {
          firstline: {},
          secondline: {},
          postcode: {},
          city: {},
          county: {},
        },
        what3words: {},
      },
    };

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      for (let i = 0; i < err.length; i++) {
        expect(err.errors[i].name).equal("CastError");
        expect(err.errors[i].message).equal(
          'Cast to string failed for value "{}" (type Object) at path "type"'
        );
        expect(err._message).equal("Incident validation failed");
        expect(err.name).equal("ValidationError");
      }
    }
  });

  it("Should fail to cast incorrectly-submitted array to String", async function () {
    const incidentObject = {
      type: [],
      when: [],
      description: [],
      location: {
        address: {
          firstline: [],
          secondline: [],
          postcode: [],
          city: [],
          county: [],
        },
        what3words: [],
      },
    };

    try {
      await new Incident(incidentObject).save();
    } catch (err) {
      for (let i = 0; i < err.length; i++) {
        expect(err.errors[i].name).equal("CastError");
        expect(err.errors[i].message).equal(
          'Cast to string failed for value "[]" (type Array) at path "type"'
        );
        expect(err._message).equal("Incident validation failed");
        expect(err.name).equal("ValidationError");
      }
    }
  });
});
