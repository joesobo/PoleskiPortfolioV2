???+ ad-tip Info
 

> [!INFO]
> 
> Tags:  #🕸️/🟦 #🏷️ #📜️  
> References: [[💚 Vue]] [[Form]]


# Form Binding

-   v-model is used to bind data to forms
-   basically updates data on user input events
	
```jsx
<input v-model="message" />
<p>{{ message }}</p>
```

-   multi-line
	
```jsx
<textarea v-model="message" />
<p style="white-sapce: pre-line;">{{ message }}</p>
```

-   checkbox
	
```jsx
<input type="checkbox" id="checkbox" v-model="checked" />
<label for="checkbox">{{ checked }}</label>
```

-   radio
	
```jsx
<div>
	<input type="radio" id="one" value="One" v-model="picked" />
	<input type="radio" id="two" value="Two" v-model="picked" />
</div>

<p>{{ picked }}</p>
```

-   select
	
```jsx
<div>
	<select v-model="selected">
		<option disabled value="">Select one</option>
		<option>A</option>
		<option>B</option>
	</select>
</div>
```

-   modifiers
    -   .lazy - synced after change instead of input

    ```jsx
    <input v-model.lazy="msg" />
    ```
    
    -   .number - input typecasted to number
    -   .trim - input whitespace gets trimmed
