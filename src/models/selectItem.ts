import { directiveConfig } from 'vuetify/src/util/helpers';

export class SelectItem {
    constructor(value: number | string, name: string, disabled: boolean) {
        this.value = value;
        this.name = name;
        this.disabled = disabled;
    }

    value: number | string;
    name: string;
    disabled: boolean;
}