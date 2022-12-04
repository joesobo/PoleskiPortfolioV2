
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[💚 Vue]] [[Props]]


# Props

- `props: ['title', 'test']`
- custom attributes to register on component
- communicated from parents to child

```jsx
<post v-for="post in posts" title="Post Title" />   //parent component

props: ['title']
<p>{{ title }}</p>   //post component
```

- dynamic props
  - numbers / arrays / objects must also be bound with `v-bind`
  - booleans must be bound if not true (default)
- dynamic example:

```jsx
<post v-for="post in posts" :title="post.title" />
<post v-for="post in posts" :value=50 />
<post v-for="post in posts" :is-done="false" />
```

- communicated from child to parent

```jsx
<post @enlarge="size += 1" />   //parent component

emits: ['enlarge']
<button @click="$emit('enlarge')">Enlarge text</button>   //post component
```

- emit value with event

```jsx
<post @enlarge="size += $event" />   //parent component

<button @click="$emit('enlarge', 2)">Enlarge text</button>   //post component
```

- Typescript props

```jsx
props: {
	title: String,
	test: Number,
}
```

- Special Props (failed props will return console warning)

```jsx
props: {
	multiplePossibilities: [String, Number],
	required: {
		type: String,
		required: true,
	},
	defaultValue: {
		type: Number,
		default: 100,
	},
	defaultObject: {
		type: Object,
		default() {
			return { message: 'Hello' }
		}
	},
	defaultFunction: {
		type: Function,
		default() {
			return 'Default function'
		}
	},
	customValidator: {
		validator(value) {
			return ['success', 'warning', 'danger'].includes(value)
		}
	},
}
```

- One-way Data Flow
  - when parent property updates ⇒ child updates
  - when child property updates ⇒ parent doesn't update
    - if it did then it would cause a re-rendering loop and crash
  - prevents children from mutating parents state

### Common issues with one-way binding (so you don't modify props)

- prop is initial value & want to use as local data

```jsx
props: ['initCounter'],
data() {
	return {
		counter: this.initCounter,
	}
}
```

- prop is raw value that needs transformation

```jsx
props: ['size'],
computed: {
	formatSize() {
		return this.size.trim().toLowerCase();
	}
}
```
