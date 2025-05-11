import mongoose from 'mongoose';

const founderSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    unique:true
  },
  title: {
    type: String, // e.g., "Co-founder & CEO"
    default: "Founder"
  },
  vision:String,
  bio: {
    type: String,
    max_length: 2000
  },
  description:[String],
  profile_image: {
    type: String, // URL to profile picture
  },
  banner_image: {
    type: String, // URL to banner or cover image
  },
  social_links: {
    linkedIn: String,
    twitter: String,
    personal_website: String
  },
  notable_achievements: {
    type: [String], // List of achievements
    default: []
  },
  founded_startups: {
    type: [Number], // Array of startup `id`s
    default: []
  },
  nationality: {
    type: String,
    default: "Indian"
  },
  education: {
    type: [String] // e.g., ["IIT Bombay - B.Tech", "Stanford - MBA"]
  },
  awards: {
    type: [String] // e.g., ["Forbes 30 Under 30", "Entrepreneur of the Year"]
  },
  featured_in: {
    type: [String] // e.g., ["TechCrunch", "YourStory"]
  },
  verified: {
    type: Boolean,
    default: false
  },
  story: [String],
}, { timestamps: true });

const Founders = mongoose.model('Founder', founderSchema);

export  {Founders}