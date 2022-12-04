---
 
CreationDate: <% tp.file.creation_date() %>    
LastModificationDate: <% tp.file.last_modified_date("dddd Do MMMM YYYY HH:mm:ss") %>

---
tags: #🕸️/🟩️

[[{{yesterday}}|<< {{yesterday}}]] | [[{{date}}]] | [[{{tomorrow}}|{{tomorrow}} >>]]


<svg viewBox="0 0 3760 100"> 
	<title>Timeline 2022</title> 
	<g class='bars'> 
		<rect fill='#9d0006' x='0' width='310' height='150'></rect> 
		<rect fill='#d65d0e' x='320' width='280' height='150'></rect> 
		<rect fill='#fb4632' x='610' width='310' height='150'></rect> 
		<rect fill='#fabd2f' x='930' width='300' height='150'></rect> 
		<rect fill='#fe8019' x='1240' width='310' height='150'></rect> 
		<rect fill='#afaf00' x='1560' width='300' height='150'></rect> 
		<rect fill='#b9ca4a' x='1870' width='310' height='150'></rect> 
		<rect fill='#70c0b1' x='2190' width='310' height='150'></rect> 
		<rect fill='#83adad' x='2510' width='300' height='150'></rect> 
		<rect fill='#83a598' x='2820' width='310' height='150'></rect> 
		<rect fill='#949494' x='3140' width='300' height='150'></rect> 
		<rect fill='#4e4e4e' x='3450' width='310' height='150'></rect> 
	</g> 
	<g class='labels' style="font-size:50px;" text-anchor="middle"> 
		<text fill='#f2e5bc' x='0' y='60' text-anchor="start">&nbsp;&nbsp;January</text> <text fill='#f2e5bc' x='320' y='60' text-anchor="start">&nbsp;February</text> 
		<text fill='#f2e5bc' x='610' y='60' text-anchor="start">&nbsp;March</text> 
		<text fill='#f2e5bc' x='930' y='60' text-anchor="start">&nbsp;April</text> 
		<text fill='#f2e5bc' x='1240' y='60' text-anchor="start">&nbsp;May</text> 
		<text fill='#f2e5bc' x='1560' y='60' text-anchor="start">&nbsp;June</text> 
		<text fill='#f2e5bc' x='1870' y='60' text-anchor="start">&nbsp;July</text> 
		<text fill='#f2e5bc' x='2190' y='60' text-anchor="start">&nbsp;August</text> 
		<text fill='#f2e5bc' x='2510' y='60' text-anchor="start">&nbsp;September</text> <text fill='#f2e5bc' x='2820' y='60' text-anchor="start">&nbsp;October</text> 
		<text fill='#f2e5bc' x='3140' y='60' text-anchor="start">&nbsp;November</text>
		<text fill='#f2e5bc' x='3450' y='60' text-anchor="start">&nbsp;December</text> 
	</g> 
	<g> 
		<circle cx="<% tp.date.now('DDD')%>0" cy="50" r="30" stroke="#1d2021" fill="#9e948b" stroke-width="5"/>
	</g> 
</svg>

# Journal
- [ ] Mood: 

# Habits
- [ ] Exercise
- [ ] Work

# Vices
- [ ] Alcohol
- [ ] Weed

### Notes

### Daily Edits
```dataview
LIST FROM #🕸️  
WHERE file.name != this.file.name
SORT file.mtime DESC LIMIT 10
```
