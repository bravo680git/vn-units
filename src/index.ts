import { GetUnitOptions, unitApi } from "./api";
import { DistrictDto, ProvinceDto, WardDto } from "./dto";
import { extractJsonData } from "./helpers";

export const getProvinces = (
  opts?: Pick<GetUnitOptions, "date"> & { normalizeVietnamese?: boolean }
) =>
  unitApi
    .getUnits("province", opts)
    .then((res) => extractJsonData(res, "province"))
    .then((items) =>
      items.map((item) => new ProvinceDto(item, opts?.normalizeVietnamese))
    );

export const getDistricts = (
  opts?: Pick<GetUnitOptions, "date" | "provinceCode"> & {
    normalizeVietnamese?: boolean;
  }
) =>
  unitApi
    .getUnits("district", opts)
    .then((res) => extractJsonData(res, "district"))
    .then((items) =>
      items.map((item) => new DistrictDto(item, opts?.normalizeVietnamese))
    );

export const getWards = (
  opts?: GetUnitOptions & { normalizeVietnamese?: boolean }
) =>
  unitApi
    .getUnits("ward", opts)
    .then((res) => extractJsonData(res, "ward"))
    .then((items) =>
      items.map((item) => new WardDto(item, opts?.normalizeVietnamese))
    );

export type {
  ProvinceDto as Province,
  DistrictDto as District,
  WardDto as Ward,
};
