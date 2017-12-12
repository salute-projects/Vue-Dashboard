import { MessageMediaType } from "../Enums";
import { Attachment } from "./Attachment";

export class CommunicationDetails {
    id: number;
    messageType: MessageMediaType;
    messageTypeName: string;
    messageStatus: number;
    subject: string;
    htmlBody: string;
    body: string;
    sender: string;
    created: Date;
    createdFormatted: string;
    mediaUrl: string;
    encounterId: number | undefined;
    isAssignedToEncounter: boolean;
    attachments: Attachment[];
}