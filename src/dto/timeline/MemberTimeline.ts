import { TimelineItemType, TimelineContentType } from "../Enums";
import { Member } from "../member/member";

export class MemberTimeline {
    id: number;
    memberId: number;
    encounterId: number | undefined;
    timelineItemType: TimelineItemType;
    title: string;
    content: string;
    timelineContentType: TimelineContentType;
    createdMemberId: number | undefined;
    createdMember: Member;
}