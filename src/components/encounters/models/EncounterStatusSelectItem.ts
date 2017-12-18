import { EncounterStatus } from "../../../dto/Enums";
import { start } from "repl";

export class EncounterStatusSelectItem {

    constructor(status: EncounterStatus, title: string, icon: string, color: string) {
        this.value = status;
        this.title = title;
        this.icon = icon;
        this.color = color;
    }

    value: EncounterStatus;
    title: string;
    icon: string;
    color: string;
}