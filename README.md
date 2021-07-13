# About This Plugin
Placeholder API """Port""" to Bedrock.
Made for [BDSX](https://github.com/BDSX/BDSX)

# Installation
Simply run `npm i @bdsx/bdsx-placeholderapi`

# What is this?
Placeholder API on Java edition is a plugin that creates a standard for variables in strings. For example, you can use `%username%` in a string and that would be replaced by the users name.
It also easily allows for other creators to add their own placeholders that can be used by other plugins.

# How does it work?
After you create a string, you will put it through the setPlaceholders function.
The function will then return a string with all the placeholders replaced with their values.
Creators can also register their own Placeholders by using the `registerPlaceholder(placeholder, Callback)` function.

Using a placeholder Example:
```ts
let str = "Welcome to the server %username%!";
let result = setPlaceholders(str, Player);
sendMessage(result, Player);
```

Creating a placeholder Example:
```ts
function onMoneyPlaceholder(p: Player): string {
    let money = getMoney(player);
    return money.toString();
}

registerPlaceholder("money", onMoneyPlaceholder);
```

# Acknowledgements
This plugin is based on [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/)