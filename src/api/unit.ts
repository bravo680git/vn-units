import { client } from "./client";
import { UnitType } from "../type";
import { UNIT_TAG_MAPPER } from "../constant";
import { formatDate } from "../helpers";

export type GetUnitOptions = {
  date?: Date;
  provinceCode?: string;
  districtCode?: string;
};

const getRequestBody = (
  type: UnitType,
  { date = new Date(), provinceCode, districtCode }: GetUnitOptions = {}
) => {
  const tag = UNIT_TAG_MAPPER[type];
  return `<?xml version="1.0" encoding="utf-8"?>
      <soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
        <soap12:Body>
          <${tag} xmlns="http://tempuri.org/">
            <DenNgay>${formatDate(date)}</DenNgay>
            ${provinceCode ? `<Tinh>${provinceCode}</Tinh>` : ""}
            ${districtCode ? `<QuanHuyen>${districtCode}</QuanHuyen>` : ""}
          </${tag}>
        </soap12:Body>
      </soap12:Envelope>`;
};

export const unitApi = {
  getUnits(type: UnitType, opts?: GetUnitOptions) {
    return client.post<never, any>("", getRequestBody(type, opts));
  },
};
