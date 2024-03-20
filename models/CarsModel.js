import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CarSchema = new Schema(
  {
    title: { type: String, required: true },
    rate: { type: Number, min: 1, max: 10, default: 5 },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", CarSchema);

export default Car;
