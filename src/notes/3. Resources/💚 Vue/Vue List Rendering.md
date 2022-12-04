
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️  
> References: [[💚 Vue]] [[List]]


# List Rendering

- v-for

```jsx
<li v-for="item in items">{{ item }}</li>

or

<li v-for="item of items">{{ item }}</li>
```

- v-for with index

```jsx
<li v-for="(item, index) in items">
  {{ index }} - {{ item }}
</li>
```

- v-for with object

```jsx
<li v-for="value in object">{{ value }}</li>
```

- Maintain state - gives Vue a hint to track elements identity (key must be unique)

```jsx
<li v-for="item in items" :key="item.id">{{ item }}</li>
```

- filtered rendering

```jsx
<li v-for="n in evenNums" :key="n">{{ n }}</li>

computed: {
	evenNums() {
		return this.nums.filter(num => num % 2 === 0);
	}
}
```

- range

```jsx
<li v-for="n in 10" :key="n">{{ n }}</li>
```
