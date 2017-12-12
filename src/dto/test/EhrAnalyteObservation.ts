import { TestValue } from "../Enums";
import { EhrCodeableItem } from "./EhrCodeableItem";

export class EhrAnalyteObservation {
    codeableItemIdentifierList: EhrCodeableItem[];
    resultDateTime: Date;
    observationValue: string;
    interpretationValue: TestValue;
    abnormalFlag: string;
    referenceRange: string;
    notes: string;
    resultValue: string;
    unitsOfMeasurement: string;
    analyteName: string;
}