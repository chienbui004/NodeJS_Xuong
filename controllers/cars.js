import Car from "../models/CarsModel.js";
class CarsController {
  async getAllCar(req, res) {
    try {
      const cars = await Car.find();
      res.status(200).json({ message: "Ok", data: cars });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async getDetailCar(req, res) {
    try {
      const car = await Car.findById(req.params.id);
      if (!car) {
        return res.status(404).json({ message: "Car Not Found" });
      }
      res.status(200).json({ message: "Ok", data: car });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async createCar(req, res) {
    try {
      const cars = await Car.create(req.body);
      res.status(200).json({ message: "Create Ok", data: cars });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async updateCar(req, res) {
    try {
      const car = await Car.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      if (!car) {
        return res.status(404).json({ message: " Car Not Found" });
      }
      res.status(200).json({
        message: "Update Car Done",
        data: car,
      });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
  async deleteCar(req, res) {
    try {
      const car = await Car.findByIdAndDelete(req.params.id);
      if (!car) {
        return res.status(404).json({ message: "Car Not Found" });
      }
      res.status(200).json({ message: "Delete Ok" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }
}
export default CarsController;
