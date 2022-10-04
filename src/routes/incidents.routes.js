import {
  addIncident,
  getIncidents,
  getIncidentById,
  updateIncidentById,
  deleteIncidentById,
} from "../controllers/incidents.controller.js";

const allRoutes = (app) => {
  app.route("/incidents").get(getIncidents).post(addIncident);

  app
    .route("/incidents/:id")
    .get(getIncidentById)
    .delete(deleteIncidentById)
    .put(updateIncidentById);
};

export default allRoutes;
