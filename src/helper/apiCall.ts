import axios from "axios";

const accessToken = localStorage.getItem("token");
export const apiCall = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_BE,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});
