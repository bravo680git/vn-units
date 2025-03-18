"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WardDto = exports.DistrictDto = exports.ProvinceDto = void 0;
const helpers_1 = require("./helpers");
class ProvinceDto {
    constructor(raw) {
        this.type = (0, helpers_1.getUnitType)(raw.LoaiHinh);
        this.typeVi = raw.LoaiHinh;
        this.provinceCode = parseInt(raw.MaTinh);
        this.provinceName = (0, helpers_1.truncateVNUnitType)(raw.TenTinh);
        this.provinceNameVi = raw.TenTinh;
    }
}
exports.ProvinceDto = ProvinceDto;
class DistrictDto extends ProvinceDto {
    constructor(raw) {
        super(raw);
        this.districtCode = parseInt(raw.MaQuanHuyen);
        this.districtName = (0, helpers_1.truncateVNUnitType)(raw.TenQuanHuyen);
        this.districtNameVi = raw.TenQuanHuyen;
    }
}
exports.DistrictDto = DistrictDto;
class WardDto extends DistrictDto {
    constructor(raw) {
        super(raw);
        this.wardCode = parseInt(raw.MaPhuongXa);
        this.wardName = (0, helpers_1.truncateVNUnitType)(raw.TenPhuongXa);
        this.wardNameVi = raw.TenPhuongXa;
    }
}
exports.WardDto = WardDto;
