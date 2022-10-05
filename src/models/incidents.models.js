import mongoose from "mongoose";

const schema = mongoose.Schema;

const addressSchema = new schema({
  firstline: {
    type: String,
    required: true,
  },
  secondline: {
    type: String,
  },
  postcode: {
    type: String,
    required: true,
  },
  city: {
    type: String,
  },
  county: {
    type: String,
  },
});

const lonlatSchema = new schema({
  0: {
    type: mongoose.Decimal128, // NEEDS GOOGLING AND EDITING
  },
  1: {
    type: mongoose.Decimal128,
  },
});

// const geojsonSchema = new schema({
//   geojson: {
//     type: String,
//     enum: [Point],
//     coordinates: {
//       type: [Number],
//     },
//   },
// });

export const IncidentSchema = new schema({
  type: {
    type: String,
    required: "Please tell us what kind of incident it was.",
  },
  when: {
    type: String,
    required: "Please tell us when the incident occurred.",
  },
  reportedat: {
    type: Date,
    default: Date.now,
  },
  description: {
    type: String,
    required: "Please describe the incident.",
  },
  location: {
    address: addressSchema,
    //geojson: geojsonSchema,
    what3words: String,
    // lonlat: [lonlatSchema],
  },
});

/*
TEST IN POSTMAN
{
    "type": "Test",
    "when": "Test time of day.",
    "description": "Test incident.",
    "location": {
        "address": {
            "firstline": "14 Testing Drive",
            "secondline": "Test Village",
            "postcode": "T35 T1NG",
            "city": "Practiceford",
            "county": "Testshire"
        },
        "what3words": "test.practice.tryout",
    }
}
*/
