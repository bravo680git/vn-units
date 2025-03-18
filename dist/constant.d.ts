import { UnitType } from "./type";
export declare const UNIT_TAG_MAPPER: Record<UnitType, string>;
export declare const UNIT_TYPE_NAME_MAPPER: {
    readonly province: readonly ["tỉnh"];
    readonly district: readonly ["huyện", "quận", "thị xã"];
    readonly ward: readonly ["phường", "xã"];
    readonly city: readonly ["thành phố", "thành phố trung ương"];
};
