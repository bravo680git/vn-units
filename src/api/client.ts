import axios from "axios";

const URL = "https://danhmuchanhchinh.gso.gov.vn/DMDVHC.asmx";

export const client = axios.create({
  baseURL: URL,
  headers: {
    "Content-Type": "application/soap+xml; charset=utf-8",
  },
});

client.interceptors.response.use((response) => {
  return response.data;
});
