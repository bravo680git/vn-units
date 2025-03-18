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
exports.getUnitType = exports.truncateVNUnitType = exports.extractJsonData = void 0;
exports.formatDate = formatDate;
const xml2js_1 = require("xml2js");
const constant_1 = require("./constant");
function formatDate(date) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}
const extractJsonData = (res, type) => __awaiter(void 0, void 0, void 0, function* () {
    const tag = constant_1.UNIT_TAG_MAPPER[type];
    const json = yield (0, xml2js_1.parseStringPromise)(res, { explicitArray: false });
    return json["soap:Envelope"]["soap:Body"][`${tag}Response`][`${tag}Result`]["diffgr:diffgram"]["DocumentElement"]["TABLE"];
});
exports.extractJsonData = extractJsonData;
const truncateVNUnitType = (name) => {
    const regex = new RegExp(Object.values(constant_1.UNIT_TYPE_NAME_MAPPER).flat().join("|"), "gi");
    return name.replace(regex, "").trim();
};
exports.truncateVNUnitType = truncateVNUnitType;
const getUnitType = (name) => {
    const types = Object.entries(constant_1.UNIT_TYPE_NAME_MAPPER);
    for (const [type, typeNames] of types) {
        if (typeNames.some((typeName) => name.toLocaleLowerCase().replace(/\b/g, "") === typeName)) {
            return type;
        }
    }
    return name;
};
exports.getUnitType = getUnitType;
