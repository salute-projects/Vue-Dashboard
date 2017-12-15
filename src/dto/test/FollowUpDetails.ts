import { FollowUpState } from "../Enums";

export class FollowUpDetails {
    followUpState: FollowUpState;
    description: string;
    isRespond: boolean;
    noteDate: Date;
}