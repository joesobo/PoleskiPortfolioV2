???+ ad-tip Info
 

> [!INFO]
> 
> Tags: #🕸️/🟦 #🏷️ #📜️ 
> References: [[💚 Vue]]


# Custom Directive

-   register new directive
	
```jsx
// Custom directive called v-focus
Vue.directive('focus', {
	inserted: function (el) {
		el.focus();
	}
});
```

-   locally register new directive
	
```jsx
// Local custom directive called v-focus
directives: {
	focus: {
		inserted: function(el) {
			el.focus();
		}
	}
}
```

-   use custom directive
	
```jsx
<input v-focus>
```

-   Hook functions
    -   bind - called when directive is first bound to element (1 time)
    -   inserted - called when bound element is inserted
    -   update - called after component updates
    -   componentUpdated - called after component and children have updated
    -   unbind - called when directive unbounded from element (1 time)
-   Hook Arguments
    -   el - element directive is bounded to
    -   binding
        -   name - name of directive (without v-)
        -   value - value passed to directive
        -   oldValue - previous value (only available in update and componentUpdated)
        -   expression - expression of binding as string
        -   arg - arguments passed to directive
        -   modifiers - object of directive modifiers
    -   vnode - virtual node from Vue
    -   oldVnode - previous virtual node (only available in update and componentUpdated)
