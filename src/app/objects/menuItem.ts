export class MenuItem {
    id: number;
    description: string;
    checked: boolean = false;
    endpoint: string;

    constructor(desciption: string, endpoint: string) {
        this.description = desciption;
        this.endpoint = endpoint;
    }
}