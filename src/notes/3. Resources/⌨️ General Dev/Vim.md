
> [!INFO]
> 
> tags:  #🕸️/🟦 
> References:  [[⌨️ General Dev]]
> Links: 


# `= this.file.name`

This is my cheatsheet for everything that I think I will need to use while trying to learn Vim. 

## Modes
- `Normal` - Navigate default, Press `Esc` or `CTRL + C` to navigate to
- `Insert` - Typing, Press `i` to navigate to
- `Visual` - Selecting, Press `v` to navigate to

## Important Key Combos
- `hjkl` - Navigate
- `y` - Copy
	- `yy` - copy line without going into visual mode
- `p` - Paste
- `/{term}` - Search

## Cool Key Combos
- `Ctrl + e` - scroll down
- `Ctrl + y` - scroll up
- `c + i + w` - change word from any point within word
- `d + i + w` - delete word from any point within word
- `c + i + p` - change inside paragraph
- `c + i + '` - change inside ''

## VSCode Key Combos
- `Ctrl + backtick` - switch between terminal and editor
- `CMD + 1/2` - switch active editors
- `Ctrl + Shift + Tab` - switch editor tabs
- `CMD + W` - close tab
- `Shift + CMD + E` - Explorer tab
- `Ctrl + Shift + G` - Git tab

## Commands
Commands are actions that have an effect in your editor

#### Motions
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

#### Operators
Operators are commands that let you perform actions to change the content of the editor 

**Basic Form**
- `{operator}{count}{motion}`
- `d2w` - delete 2 words

**Undo / Redo**
- `u` - undo
- `Ctrl + r` - redo

**Mnemonics**
- `d` - delete 
- `f` - find
- `c` - change 
- `t` - till

**Deleting**
- `dd` - delete whole line
- `D` - delete until end of line
- NOTE: deleting moves content into the same buffer as `yank`

**Changing**
- `c` - combines `d` and `i` together
	- delete and go to insert mode
- `cc` - changes a complete line
- `C` - luechanges from the cursor until the end on the line

**Dot Operator**
- `.` - repeats last change (motion / insert / change / delete)