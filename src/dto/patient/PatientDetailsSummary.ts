import { Member } from '../member/member';
import { EmergencyInfo } from '../member/EmergencyInfo';
import { MemberInsuranceInfo } from '../insurance/MemberInsuranceInfo';
import { Guarantor } from '../insurance/Guarantor';
import { MemberAdvanceProperty } from '../member/MemberAdvanceProperty';
import { PhysicianSummary } from '../physician/PhysicianSummary';
import { EncounterDetailsSummary } from '../encounter/EncounterDetailsSummary';
import { EhrDiagnosticReportSummary } from '../test/EhrDiagnosticReportSummary';

export class PatientDetailsSummary extends Member {
    emergencyInfo: EmergencyInfo;
    insurance: MemberInsuranceInfo;
    guarantor: Guarantor;
    advancedInfo: MemberAdvanceProperty;
    physiciansList: Array<PhysicianSummary>;
    encountersList: Array<EncounterDetailsSummary>;
    allTestResults: Array<EhrDiagnosticReportSummary>;
}