import {
  addIncident,
  getIncidents,
  getIncidentById,
  updateIncidentById,
} from "../controllers/incidents.controller.js";

const allRoutes = (app) => {
  app.route("/incidents").get(getIncidents).post(addIncident);

  app
    .route("/incidents/:id")
    .get(getIncidentById)
    .delete((req, res) => {
      res.send("DELETE requests will go here.");
    })
    .put(updateIncidentById);
};

export default allRoutes;
