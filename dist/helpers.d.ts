import { UnitType } from "./type";
export declare function formatDate(date: Date): string;
export declare const extractJsonData: (res: string, type: UnitType) => Promise<any[]>;
export declare const truncateVNUnitType: (name: string) => string;
export declare const getUnitType: (name: string) => string;
