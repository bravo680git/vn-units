"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UNIT_TYPE_NAME_MAPPER = exports.UNIT_TAG_MAPPER = void 0;
exports.UNIT_TAG_MAPPER = {
    province: "DanhMucTinh",
    district: "DanhMucQuanHuyen",
    ward: "DanhMucPhuongXa",
};
exports.UNIT_TYPE_NAME_MAPPER = {
    province: ["tỉnh"],
    district: ["huyện", "quận", "thị xã"],
    ward: ["phường", "xã"],
    city: ["thành phố", "thành phố trung ương"],
};
