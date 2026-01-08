const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    location: String,
    startDate: {
      type: Date,
      required: true
    },
    endDate: Date, // null = currently working
    isCurrent: {
      type: Boolean,
      default: false
    },
    description: {
      type: String
    }
  },
  { _id: false } // prevents auto _id for each experience
);

const educationSchema = new mongoose.Schema(
  {
    institution: String,
    degree: String,
    fieldOfStudy: String,
    startDate: Date,
    endDate: Date
  },
  { _id: false }
);

const projectSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    techStack: [String],
    liveUrl: String,
    githubUrl: String
  },
  { _id: false }
);

const resumeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    personalInfo: {
      fullName: String,
      email: String,
      phone: String,
      location: String,
      linkedin: String,
      github: String,
      portfolio: String
    },

    summary: String,

    skills: {
      type: [String],
      default: []
    },

    experience: {
      type: [experienceSchema],
      default: []
    },

    education: {
      type: [educationSchema],
      default: []
    },

    projects: {
      type: [projectSchema],
      default: []
    },

    certifications: {
      type: [String],
      default: []
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Resume", resumeSchema);
