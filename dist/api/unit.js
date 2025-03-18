"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unitApi = void 0;
const client_1 = require("./client");
const constant_1 = require("../constant");
const helpers_1 = require("../helpers");
const getRequestBody = (type, { date = new Date(), provinceCode, districtCode } = {}) => {
    const tag = constant_1.UNIT_TAG_MAPPER[type];
    return `<?xml version="1.0" encoding="utf-8"?>
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <${tag} xmlns="http://tempuri.org/">
            <DenNgay>${(0, helpers_1.formatDate)(date)}</DenNgay>
            ${provinceCode ? `<Tinh>${provinceCode}</Tinh>` : ""}
            ${districtCode ? `<QuanHuyen>${districtCode}</QuanHuyen>` : ""}
          </${tag}>
        </soap12:Body>
      </soap12:Envelope>`;
};
exports.unitApi = {
    getUnits(type, opts) {
        return client_1.client.post("", getRequestBody(type, opts));
    },
};
