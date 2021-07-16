# About This Plugin
Placeholder API """Port""" to Bedrock.
Made for [BDSX](https://github.com/BDSX/BDSX)

# Installation
Simply run `npm i @bdsx/bdsx-placeholderapi`

# What is this?
Placeholder API on Java edition is a plugin that creates a standard for variables in strings. For example, you can use `%player_name%` in a string and that would be replaced by the users name.
It also easily allows for other creators to add their own placeholders that can be used by other plugins.

Note: By itself, this plugin does not do anything. It is meant to be used by other plugins.
An example script for this plugin can be found [here](TODO: add link)

# How does it work?
After you create a string, you will put it through the setPlaceholders function.
The function will then return a string with all the placeholders replaced with their values.
Creators can also register their own Placeholders by using the `registerPlaceholder(placeholder, Callback)` function.

Using a placeholder Example:
```ts
let str = "Welcome to the server %player_name%!";
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

Creating a placeholder with params Example:
```ts
function onPlayerHasPotionEffectPlaceholder(p: Player, params: (string | string[])[] ): string {
    let hasPotionEffect = hasPotionEffect(player, params[0]);
    return hasPotionEffect.toString();
}

registerPlaceholder("hasPotionEffect<effect>", onPlayerHasPotionEffectPlaceholder);
```

Creating a placeholder with an array param Example:
```ts
function onPlayerHasPotionEffectsPlaceholder(p: Player, params: (string | string[])[] ): string {
    let hasPotionEffect = true;
    for (let i = 0; i < params[0].length; i++) {
        if (!hasPotionEffect(player, params[0][i])) {
            hasPotionEffect = false;
        }
    }
    return hasPotionEffect.toString();
}

registerPlaceholder("hasPotionEffects<effect...>", onPlayerHasPotionEffectsPlaceholder);
```

# Acknowledgements
This plugin is based on [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI/)