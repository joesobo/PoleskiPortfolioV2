???+ ad-tip Info
 

> [!INFO]
> 
> Tags: #🕸️/🟦 #🏷️ #📜️ 
> References: [[💚 Vue]] [[Events]]


# Event Handling

-   listening for event
	
```jsx
<button @click="counter += 1">Add 1</button>
```

-   method event handler
	
```jsx
<button @click="increment">Add 1</button>

methods: {
	increment(event) {
		this.count += 1;
		alert(event.target.tagName);
	}
}
```

-   inline method event handler
	
```jsx
<button @click="increment(5)">Add 1</button>

methods: {
	increment(amount) {
		this.count += amount;
	}
}
```

-   multiple handlers
	
```jsx
<button @click="increment, two()">Add 1</button>
```

-   Event Modifiers (can be chained)

    ```jsx
    <a @click.stop="doThis"></a>
    ```
    
    -   .stop - event propagation stopped
    -   .prevent - event no longer reloads
    -   .capture
    -   .self
    -   .once
    -   .passive
    -   .exact - only fires when exact combination is triggered
    
-   Key Modifiers
    
    ```jsx
    <input @keyup.page-down="onPageDown" />
    ```
    
    -   .enter
    -   .tab
    -   .delete
    -   .esc
    -   .space
    -   .up
    -   .down
    -   .left
    -   .right
    -   .page-down

-   System Modifier

    ```jsx
    <input @keyup.alt.enter="clear" />   // Alt + Enter
    ```
    
    -   .ctrl
    -   .alt
    -   .shift
    -   .meta - command key / windows key
    
-   Mouse Modifiers
    
    ```jsx
    <button @click.right="rightClick" />
    ```
    
    -   .left
    -   .right
    -   .middle
