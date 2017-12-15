import { RequestDetail } from "./RequestDetail";

export class DocumentDto {
    safeEmrId: string;
    encounterId: string;
    requestDetailObj: RequestDetail;
    documentType: number;
    encodedTextCcd: string;
    encodedTextPdf: string;
    notes: string;
}