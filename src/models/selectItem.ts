export class SelectItem {
    constructor(value: any, title: string, disabled: boolean = false, icon: string, color: string = 'green') {
        this.value = value;
        this.title = title;
        this.icon = icon;
        this.color = color;
        this.disabled = disabled;
    }

    value: any;
    title: string;
    icon: string;
    disabled: boolean;
    color: string;
}