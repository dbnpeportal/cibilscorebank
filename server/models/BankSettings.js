// models/BankSettings.js
import mongoose from "mongoose";

const bankSettingsSchema = new mongoose.Schema({
  accountHolderName: {
    type: String,
    required: true,
    trim: true,
  },
  bankName: {
    type: String,
    required: true,
    trim: true,
  },
  accountNo: {
    type: String,
    required: true,
    trim: true,
    match: [/^.{15}$/, "Account number must be exactly 15 characters"],
  },
  ifscCode: {
    type: String,
    required: true,
    trim: true,
    uppercase: true,
    required: true,
    match: /[A-Z]{4}[0-9]{7}/,
  },
  qrImagePath: {
    type: String,
    default: null,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

// Ensure only one bank settings document exists
bankSettingsSchema.index({}, { unique: true });

export default mongoose.model("BankSettings", bankSettingsSchema);
