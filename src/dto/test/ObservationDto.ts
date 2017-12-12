import { TestValue, ResultStatus } from "../Enums";
import { EhrAnalyteObservation } from "./EhrAnalyteObservation";

export class ObservationDto {
    labTestId: number;
    labTestName: string;
    identifier: string;
    resultDateTime: Date | undefined;
    interpretationValue: TestValue;
    resultStatus: ResultStatus;
    notes: string;
    physicianNotes: string;
    labInfo: string;
    order: number;
    analyteObservations: EhrAnalyteObservation[];
    shortName: string;
    longName: string;
}