import { GetUnitOptions } from "./api";
import { DistrictDto, ProvinceDto, WardDto } from "./dto";
export declare const getProvinces: (opts?: Pick<GetUnitOptions, "date">) => Promise<ProvinceDto[]>;
export declare const getDistricts: (opts?: Pick<GetUnitOptions, "date" | "provinceCode">) => Promise<DistrictDto[]>;
export declare const getWards: (opts?: GetUnitOptions) => Promise<WardDto[]>;
