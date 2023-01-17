import axios from "axios";
import { BACKEND_URL } from "../config";

export const apiClient = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    Accept: "application/json"
  }
});