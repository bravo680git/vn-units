import { UnitType } from "./type";
export declare function formatDate(date: Date): string;
export declare const extractJsonData: (res: string, type: UnitType) => Promise<any[]>;
export declare const formatUnitName: (name: string, normalizeVietnamese?: boolean) => string;
export declare const getUnitType: (name: string) => string;
