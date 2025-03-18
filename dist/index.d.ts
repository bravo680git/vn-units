import { GetUnitOptions } from "./api";
import { DistrictDto, ProvinceDto, WardDto } from "./dto";
export declare const getProvinces: (opts?: Pick<GetUnitOptions, "date"> & {
    normalizeVietnamese?: boolean;
}) => Promise<ProvinceDto[]>;
export declare const getDistricts: (opts?: Pick<GetUnitOptions, "date" | "provinceCode"> & {
    normalizeVietnamese?: boolean;
}) => Promise<DistrictDto[]>;
export declare const getWards: (opts?: GetUnitOptions & {
    normalizeVietnamese?: boolean;
}) => Promise<WardDto[]>;
export type { ProvinceDto as Province, DistrictDto as District, WardDto as Ward, };
