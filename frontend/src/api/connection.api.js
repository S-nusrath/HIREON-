import api from "./axios";

export const sendRequest = (receiver_id) =>
  api.post("/connections/send", { receiver_id });

export const acceptRequest = (id) =>
  api.post(`/connections/accept/${id}`);

export const rejectRequest = (id) =>
  api.post(`/connections/reject/${id}`);

export const getConnections = () =>
  api.get("/connections");

export const getRequests = () =>
  api.get("/connections/requests");
