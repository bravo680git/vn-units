import { parseStringPromise } from "xml2js";
import { UnitType } from "./type";
import { UNIT_TAG_MAPPER, UNIT_TYPE_NAME_MAPPER } from "./constant";

export function formatDate(date: Date): string {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

export const extractJsonData = async (res: string, type: UnitType) => {
  const tag = UNIT_TAG_MAPPER[type];
  const json = await parseStringPromise(res, { explicitArray: false });
  return json["soap:Envelope"]["soap:Body"][`${tag}Response`][`${tag}Result`][
    "diffgr:diffgram"
  ]["DocumentElement"]["TABLE"] as any[];
};

export const formatUnitName = (name: string, normalizeVietnamese?: boolean) => {
  const regex = new RegExp(
    Object.values(UNIT_TYPE_NAME_MAPPER).flat().join("|"),
    "gi"
  );

  name = name.replace(regex, "").trim();

  if (normalizeVietnamese) {
    name = name
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }

  return name;
};

export const getUnitType = (name: string) => {
  const types = Object.entries(UNIT_TYPE_NAME_MAPPER);
  for (const [type, typeNames] of types) {
    if (
      typeNames.some(
        (typeName) => name.toLocaleLowerCase().replace(/\b/g, "") === typeName
      )
    ) {
      return type;
    }
  }
  return name;
};
