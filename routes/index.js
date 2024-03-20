import carsRouter from "./cars.js";

export default function routes(app) {
  app.get("/", (req, res) => {
    res.send("Home");
  });
  app.use("/cars", carsRouter);
}
