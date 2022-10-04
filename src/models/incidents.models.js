import mongoose from "mongoose";

const schema = mongoose.Schema;

const addressSchema = new schema({
  firstline: {
    type: String,
  },
  secondline: {
    type: String,
  },
  postcode: {
    type: String,
  },
  city: {
    type: String,
  },
  county: {
    type: String,
  },
});

export const IncidentSchema = new schema({
  type: {
    type: String,
    required: "Please tell us what kind of incident it was.",
  },
  when: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: "Please describe the incident.",
  },
  location: {
    address: [addressSchema],
    // geojson: {
    //   type: String,
    //   enum: [Point],
    //   coordinates: {
    //     type: [Number],
    //   },
    // },
    what3words: String,
    // lonlat: {
    //   type: [Array],
    //   0: {
    //     type: Number,
    //   },
    //   1: {
    //     type: Number,
    //   },
    // },
  },
});
