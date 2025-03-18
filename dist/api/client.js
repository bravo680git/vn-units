"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const axios_1 = require("axios");
const URL = "https://danhmuchanhchinh.gso.gov.vn/DMDVHC.asmx";
exports.client = axios_1.default.create({
    baseURL: URL,
    headers: {
        "Content-Type": "application/soap+xml; charset=utf-8",
    },
});
exports.client.interceptors.response.use((response) => {
    return response.data;
});
