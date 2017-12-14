import { TimelineItemType, TimelineContentType } from "../Enums";

export class MemberTimeline {
    id: number;
    memberId: number;
    encounterId: number | undefined;
    timelineItemType: TimelineItemType;
    timestamp: Date;
    title: string;
    content: string;
    timelineContentType: TimelineContentType;
    createdMemberId: number | undefined;
}