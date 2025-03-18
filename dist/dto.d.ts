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
    protected provinceCode: number;
    protected provinceName: string;
    protected provinceNameVi: string;
    constructor(raw: ProvinceRaw);
}
export declare class DistrictDto extends ProvinceDto {
    protected districtCode: number;
    protected districtName: string;
    protected districtNameVi: string;
    constructor(raw: DistrictRaw);
}
export declare class WardDto extends DistrictDto {
    protected wardCode: number;
    protected wardName: string;
    protected wardNameVi: string;
    constructor(raw: WardRaw);
}
export {};
