
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[💚 Vue]] [[Provide]] [[Inject]]


# Provide / Inject

- [[#Notes|Notes]]
- [[#Simple|Simple]]
- [[#Advanced|Advanced]]
- [[#Reactivity|Reactivity]]

### Notes

- used for passing data from parent to deeply nested child (like a _long range prop_)

  ![https://v3.vuejs.org/images/components_provide.png](https://v3.vuejs.org/images/components_provide.png)

- parent component acts as dependency `provider` to all children (any depth)
- child has access to `inject` option to start using data

### Simple

Parent provider

```jsx
provide: {
  user: "Test User";
}
```

Child injector

```jsx
inject: ['user'],
created() {
	console.log(this.user);
}
```

### Advanced

Parent provider

```jsx
data() {
	return { nums: [1, 2, 3] }
},
provide() {
	return {
		numsLength: this.nums.length
	}
}
```

Child injector

```jsx
inject: ['numsLength'],
created() {
	console.log(this.numsLength);
}
```

### Reactivity

- provide / inject are not reactive by default

```jsx
provide() {
	return {
		numsLength: Vue.computed(() => this.nums.length)
	}
}
```
