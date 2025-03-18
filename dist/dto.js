"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardDto = exports.DistrictDto = exports.ProvinceDto = void 0;
const helpers_1 = require("./helpers");
class ProvinceDto {
    constructor(raw, normalizeVietnamese) {
        this.type = (0, helpers_1.getUnitType)(raw.LoaiHinh);
        this.typeVi = raw.LoaiHinh;
        this.provinceCode = raw.MaTinh;
        this.provinceName = (0, helpers_1.formatUnitName)(raw.TenTinh, normalizeVietnamese);
        this.provinceNameVi = raw.TenTinh;
    }
}
exports.ProvinceDto = ProvinceDto;
class DistrictDto extends ProvinceDto {
    constructor(raw, normalizeVietnamese) {
        super(raw, normalizeVietnamese);
        this.districtCode = raw.MaQuanHuyen;
        this.districtName = (0, helpers_1.formatUnitName)(raw.TenQuanHuyen, normalizeVietnamese);
        this.districtNameVi = raw.TenQuanHuyen;
    }
}
exports.DistrictDto = DistrictDto;
class WardDto extends DistrictDto {
    constructor(raw, normalizeVietnamese) {
        super(raw, normalizeVietnamese);
        this.wardCode = raw.MaPhuongXa;
        this.wardName = (0, helpers_1.formatUnitName)(raw.TenPhuongXa, normalizeVietnamese);
        this.wardNameVi = raw.TenPhuongXa;
    }
}
exports.WardDto = WardDto;
