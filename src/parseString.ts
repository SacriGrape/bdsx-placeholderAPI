import { Player } from "bdsx/bds/player";
import { placeholders } from "..";
import { inverseTrimPlaceholder, trimPlaceholder } from "./utils";

export function setPlaceholders(str: string, player: Player | null) {
    let regex = /%([\w<>]+?)%/g;
    let matches = [];
    let match;
    while ((match = regex.exec(str)) !== null) {
        matches.push(match);
    }

    for (let match of matches) {
        let clipPlaceholder = match[1];
        let trimmedPlaceholder = trimPlaceholder(clipPlaceholder);
        let placeholderType = placeholders.get(trimmedPlaceholder);
        if (!placeholderType) continue;
        let getter = placeholderType.getter;
        let params = inverseTrimPlaceholder(clipPlaceholder);

        let paramRegex = /<(.*)>/g;
        let paramMatches = [];
        let paramMatch;

        while ((paramMatch = paramRegex.exec(params)) !== null) {
            paramMatches.push(paramMatch);
        }
        if (paramMatches.length !== placeholderType.params.length) throw new Error("Placeholder params mismatch: Too few/many params");
        let inputParams: (string | string[])[] = [];
        for (let i = 0; i < paramMatches.length; i++) {
            let param = paramMatches[i][1];
            let isArray = placeholderType.params[i];

            if (isArray) {
                inputParams.push(param.split(","));
            } else {
                if (param.includes(",")) {
                    throw new Error("Placeholder params mismatch: Param is not an array");
                }
                inputParams.push(param);
            }
        }
        let result = getter(player, inputParams);
        str = str.replace(match[0], result);
    }
    return str;
}