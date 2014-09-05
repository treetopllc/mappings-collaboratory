# mappings-collaboratory

> List of ID/string mappings for collaboratory

This reference lib is used to help translate ID numbers into human-friendly strings.
(and vice versa) It does so by exposing several properties on the exported object,
where each one has a `by_id` and `by_name` plain JS object.

The `by_id` object gives the human-friendly string from just an ID number.
(eg: `roles.by_id[0]`)

The `by_name` object gives an ID number from a string. We use
[to-constant-case](https://github.com/ianstormtaylor/to-constant-case) to normalize
the string name, so things like `"Citizen"` become `"CITIZEN"` while more complex names
like `"Non-Profit"` become `"NON_PROFIT"`.

## Usage

```js
var mapping = require("mappings-collaboratory");

console.log(mapping.roles.by_name.MEMBER);
// => 5

console.log(mapping.roles.by_id[5]);
// => "Member"
```
