import { http } from "./http";

const API_URL = "/api/bets.json";

export const getBets = () => {
  return http(API_URL);
};
