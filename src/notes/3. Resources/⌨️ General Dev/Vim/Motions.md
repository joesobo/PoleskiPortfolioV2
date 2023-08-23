
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:   [[Vim]]
> Links: 

Motions are commands that you use to move in `Normal` mode

**Basic:**
 ```
        ↑
  ← h j k l →
      ↓
 ```

**Move Horizontal:**
- `w` - Move word by word
- `b` - Move backwards word by word
- `W` - Move WORD by Word 
- `B` - Move backwards WORD by WORD 

```
type wwww ==> v   v v   v   v
              word. are two words
              word. is one WORD
type WWW  ==> ^     ^  ^   ^
```

- `e` - Jump to end of a word 
- `ge` - Jump to end of previous word
- `E` - Jump to end of a WORD 
- `gE` - Jump to end of previous WORD


**Move to Specific Character:**
- `f{character}` - Find the next occurrence of character on the line
- `F{character}` - Find previous occurrence of character on the line
- `t{character}` - Move cursor until next occurrence of character on the line
- `T{character}` - Move cursor until previous occurrence of character on the line

```
type t(   ==> v                       v
              const fireball = function(target){
type f(   ==> ^                        ^
```

- `f{character};` - `;` brings you to the next occurrence of the character
- `f{character},` - `,` brings you to the previous occurrence of the character

**Moving Horizontally Extremely**
- `0` - Moves to the first character of a line
- `^` - Moves to the first non-blank character of a line
- `$` - Moves to the end of a line
- `g_` - Moves to the non-blank character at the end of a line

**Moving Vertically**
- `}` - jumps entire paragraphs downwards
- `{` - similarly but upwards
- `CTRL-D` - lets you move down half a page by scrolling the page
- `CTRL-U` - lets you move up half a page also by scrolling

**Search Pattern**
- `/{pattern}` - to search forward
- `?{pattern}` - to search backwards
- `n` - to go to the next match
- `N` - to go to the previous match

**Move by Count**
- `{count}{command}` - modify command by count 

**Semantic Movement**
- `gd` - **g**o to **d**efinition of whatever is under your cursor.
- `gf` - **g**o to a **f**ile in an import.

**Core Motions**
- `gg` - go to the top of the file.
- `{line}gg` - go to a specific line.
- `G` - go to the end of the file.
- `%` - jump to matching `({[]})`.
