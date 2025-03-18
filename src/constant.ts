import { UnitType } from "./type";

export const UNIT_TAG_MAPPER: Record<UnitType, string> = {
  province: "DanhMucTinh",
  district: "DanhMucQuanHuyen",
  ward: "DanhMucPhuongXa",
} as const;

export const UNIT_TYPE_NAME_MAPPER = {
  province: ["tỉnh"],
  district: ["huyện", "quận", "thị xã"],
  ward: ["phường", "xã"],
  city: ["thành phố", "thành phố trung ương"],
} as const;
