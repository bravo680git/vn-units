"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWards = exports.getDistricts = exports.getProvinces = void 0;
const api_1 = require("./api");
const dto_1 = require("./dto");
const helpers_1 = require("./helpers");
const getProvinces = (opts) => api_1.unitApi
    .getUnits("province", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "province"))
    .then((items) => items.map((item) => new dto_1.ProvinceDto(item)));
exports.getProvinces = getProvinces;
const getDistricts = (opts) => api_1.unitApi
    .getUnits("district", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "district"))
    .then((items) => items.map((item) => new dto_1.DistrictDto(item)));
exports.getDistricts = getDistricts;
const getWards = (opts) => api_1.unitApi
    .getUnits("ward", opts)
    .then((res) => (0, helpers_1.extractJsonData)(res, "ward"))
    .then((items) => items.map((item) => new dto_1.WardDto(item)));
exports.getWards = getWards;
const test = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, exports.getProvinces)();
    console.log(res);
});
test();
