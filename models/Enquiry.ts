import mongoose from "mongoose";

export interface IEnquiry extends mongoose.Document {
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
}

const EnquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name."],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please provide an email."],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please provide a valid email address.",
    ],
  },
  phone: {
    type: String,
    required: [true, "Please provide a phone number."],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Enquiry || mongoose.model<IEnquiry>("Enquiry", EnquirySchema);
