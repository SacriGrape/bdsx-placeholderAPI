export function trimPlaceholder(str: string): string {
    return str.split("<", 1)[0];
}

export function inverseTrimPlaceholder(str: string): string {
    if (str.includes("<")) {
        return str.substring(str.indexOf("<"));
    } else {
        return str;
    }
}