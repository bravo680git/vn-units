import { getUnitType, formatUnitName } from "./helpers";

type ProvinceRaw = {
  MaTinh: string;
  TenTinh: string;
  LoaiHinh: string;
};

type DistrictRaw = ProvinceRaw & {
  MaQuanHuyen: string;
  TenQuanHuyen: string;
};

type WardRaw = DistrictRaw & {
  MaPhuongXa: string;
  TenPhuongXa: string;
};

export class ProvinceDto {
  protected type: string;
  protected typeVi: string;
  protected provinceCode: string;
  protected provinceName: string;
  protected provinceNameVi: string;

  constructor(raw: ProvinceRaw, normalizeVietnamese?: boolean) {
    this.type = getUnitType(raw.LoaiHinh);
    this.typeVi = raw.LoaiHinh;
    this.provinceCode = raw.MaTinh;
    this.provinceName = formatUnitName(raw.TenTinh, normalizeVietnamese);
    this.provinceNameVi = raw.TenTinh;
  }
}

export class DistrictDto extends ProvinceDto {
  protected districtCode: string;
  protected districtName: string;
  protected districtNameVi: string;

  constructor(raw: DistrictRaw, normalizeVietnamese?: boolean) {
    super(raw, normalizeVietnamese);
    this.districtCode = raw.MaQuanHuyen;
    this.districtName = formatUnitName(raw.TenQuanHuyen, normalizeVietnamese);
    this.districtNameVi = raw.TenQuanHuyen;
  }
}

export class WardDto extends DistrictDto {
  protected wardCode: string;
  protected wardName: string;
  protected wardNameVi: string;

  constructor(raw: WardRaw, normalizeVietnamese?: boolean) {
    super(raw, normalizeVietnamese);
    this.wardCode = raw.MaPhuongXa;
    this.wardName = formatUnitName(raw.TenPhuongXa, normalizeVietnamese);
    this.wardNameVi = raw.TenPhuongXa;
  }
}
