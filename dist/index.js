"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWards = exports.getDistricts = exports.getProvinces = void 0;
const api_1 = require("./api");
const dto_1 = require("./dto");
const helpers_1 = require("./helpers");
const getProvinces = (opts) => api_1.unitApi
    .getUnits("province", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "province"))
    .then((items) => items.map((item) => new dto_1.ProvinceDto(item, opts === null || opts === void 0 ? void 0 : opts.normalizeVietnamese)));
exports.getProvinces = getProvinces;
const getDistricts = (opts) => api_1.unitApi
    .getUnits("district", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "district"))
    .then((items) => items.map((item) => new dto_1.DistrictDto(item, opts === null || opts === void 0 ? void 0 : opts.normalizeVietnamese)));
exports.getDistricts = getDistricts;
const getWards = (opts) => api_1.unitApi
    .getUnits("ward", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "ward"))
    .then((items) => items.map((item) => new dto_1.WardDto(item, opts === null || opts === void 0 ? void 0 : opts.normalizeVietnamese)));
exports.getWards = getWards;
