
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:   [[Vim]]
> Links: 

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