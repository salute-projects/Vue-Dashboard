import { Member } from "../member/member";
import { EmergencyInfo } from "../member/EmergencyInfo";
import { MemberInsuranceInfo } from "../insurance/MemberInsuranceInfo";
import { Guarantor } from "../insurance/Guarantor";
import { MemberAdvanceProperty } from "../member/MemberAdvanceProperty";
import { Physician } from "../physician/index";
import { EncounterDetails } from "../encounter/EncounterDetails";
import { EhrDiagnosticReport } from "../test/EhrDiagnosticReport";

export class PatientDetails extends Member {
    emergencyInfo: EmergencyInfo;
    insurance: MemberInsuranceInfo;
    guarantor: Guarantor;
    advancedInfo: MemberAdvanceProperty;
    physiciansList: Array<Physician>;
    encountersList: Array<EncounterDetails>;
    latestTestResult: EhrDiagnosticReport;
    allTestResults: EhrDiagnosticReport;
}