
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:  [[⌨️ General Dev]]
> Links:


# `= this.file.name`

Regex is primarily for finding patterns in text. Use this site to test https://regex101.com/

Used to:

1. Validate text
2. Search through text

### JS Example

```js
const matches = "Some Text".match(regex);
```

```js
const next = 'Some Text'.replace(regexm 'hi mom!')
```

### Regular Expressions

- Search pattern - `/ /`
- Group with `( )`
- Exact match

```js
const regex = /bob/;
```

### Flag

- flags should go on the outside of the right `/`
- multiple flags can be added
- global - `g`

```js
const regex = /bob/g;
```

### Special Characters

#### Explicit Counts - `{ }`

```regex
/color{2,6}/g
```

#### Quantifier

- how many times its allowed to show up
- `?` - 0 or 1 time
- `*` - 0 or more times
- `+` - 1 or more times

```regex
/colou?r/g
```

#### Logical OR - `|`

```regex
/Bob|Alice/g
```

```regex
/(Bob|Alice)Jones/g
```

#### Escape Special Characters - `\`

- Means actually using one of these characters in a search

```regex
/colors\?/g
```

- can also refer to a character class
  - `\d` - any digit
  - `\w` - any word character
  - `\D` - anything not a digit
  - `\W` - anything not a word character

#### Character Sets - `[ ]`

- used to define custom character sets

Example of all capital letters from A to Z:

```regex
/[A-Z]/g
```

#### Negate - `^`

- used to negate

Example of all except for capital letters from A to Z:

```regex
/[^A-Z]/g
```

#### Match end - `$`

- Matches end position of a line

#### Match any - `.`

- Matches any single character

```regex
/a.c/
```
