import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      index: true,
      lowercase: true,
      trim: true,
    },
    city: String,
    founding_year: Number,
    founders: [String], // Array of founder names
    industries: [String], // Array of industries
    description: String,
    funding_stage: String,
    vision: String,
    business_model: { // Now a simple Object type
      type: Object,
      default: {} // Optional: Set a default empty object
    },
    trending_index: Number,
    investors: [String], // Array of investor names
    story: [String],
    earning_source: String,
    customer_reviews: [String],
    profile_image: {
      type: String, // URL or path
      default: null,
    },
    banner_image: {
      type: String, // URL or path
      default: null,
    },
  },
  { timestamps: true }
);

const Startups = mongoose.model("Startup", startupSchema);

export { Startups };
