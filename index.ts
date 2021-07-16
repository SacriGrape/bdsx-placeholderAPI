import "./src/index"
import { Placeholder } from "./src/placeholderType";

export const placeholders = new Map<string, Placeholder>();

import { setPlaceholders } from "./src/parseString";
import { registerPlaceholder } from "./src/register";
export { setPlaceholders, registerPlaceholder };