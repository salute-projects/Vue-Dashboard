import { directiveConfig } from 'vuetify/src/util/helpers';

export class SelectItem {
    constructor(value: any, title: string, disabled: boolean, icon: string, color: string) {
        this.value = value;
        this.title = title;
        this.disabled = disabled;
        this.icon = icon;
        this.color = color;
    }

    value: any;
    title: string;
    disabled: boolean;
    icon: string;
    color: string;
}