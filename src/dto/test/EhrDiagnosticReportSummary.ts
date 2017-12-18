import { TestValue } from "../Enums";

export class EhrDiagnosticReportSummary {
    encounterId: number | undefined;
    testTypeString: string;
    interpretationDate: Date | undefined;
    interpretation: TestValue;
}