import { UnitType } from "../type";
export type GetUnitOptions = {
    date?: Date;
    provinceCode?: string;
    districtCode?: string;
};
export declare const unitApi: {
    getUnits(type: UnitType, opts?: GetUnitOptions): Promise<any>;
};
