import { Player } from "bdsx/bds/player";
import { placeholders } from "..";
import { Placeholder } from "./placeholderType";
import { inverseTrimPlaceholder, trimPlaceholder } from "./utils";

export function registerPlaceholder(placeholder: string, getter: (player: Player | null, params: (string | string[])[]) => string) {
    let trimedMatch = trimPlaceholder(placeholder);
    let inverseTrimmedMatch = inverseTrimPlaceholder(placeholder);
    let matchedPh = placeholders.get(trimedMatch);
    if (!matchedPh) {
        let regex = /<(.*)>/g
        let matches = [];
        let match;
        while ((match = regex.exec(inverseTrimmedMatch)) !== null) {
            matches.push(match[1]);
        }

        let params = [];
        for (let match of matches) {
            let isArray = false;
            if (match[1].endsWith("...")) {
                isArray = true;
            }
            params.push(isArray);
        }

        let trimedPlaceholder = trimPlaceholder(placeholder);

        let registeredPlaceholder = new Placeholder(trimedPlaceholder, params, getter);
        placeholders.set(trimedPlaceholder, registeredPlaceholder);
    } else {
        throw new Error("Placeholder already registered");
    }
};
