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
export declare class ProvinceDto {
    protected type: string;
    protected typeVi: string;
    protected provinceCode: string;
    protected provinceName: string;
    protected provinceNameVi: string;
    constructor(raw: ProvinceRaw, normalizeVietnamese?: boolean);
}
export declare class DistrictDto extends ProvinceDto {
    protected districtCode: string;
    protected districtName: string;
    protected districtNameVi: string;
    constructor(raw: DistrictRaw, normalizeVietnamese?: boolean);
}
export declare class WardDto extends DistrictDto {
    protected wardCode: string;
    protected wardName: string;
    protected wardNameVi: string;
    constructor(raw: WardRaw, normalizeVietnamese?: boolean);
}
export {};
