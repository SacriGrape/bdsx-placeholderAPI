import { Player } from "bdsx/bds/player";

export class Placeholder {
    placeholder: string;
    params: boolean[] = [];
    getter: (player: Player | null, params: (string | string[])[]) => string;

    constructor(placeholder: string, params: boolean[], getter: (player: Player | null, params: string[]) => string) {
        this.placeholder = placeholder;
        this.params = params;
        this.getter = getter;
    }
}