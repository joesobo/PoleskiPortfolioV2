???+ ad-tip Info
 

> [!INFO]
> 
> Tags: #🕸️/🟦 #🏷️ #📜️ 
> References: [[💚 Vue]] [[Events]]


# Custom Events

-   use emitter and listener for communicating event triggers
-   event names must match
-   recommended always use kebab-case `custom-event`
	
```jsx
this.$emit('custom-event');

<div v-on:custom-event="doSomething"/>
```

-   custom component example:
	
```jsx
// CustomCheck emits event change with result
<template>
	<input type="checkbox"
		@checked="checked"
		:change="$emit('change', $event.target.checked)" />
</template>Ï

exports default {
	model: {
		prop: 'checked',
		event: 'change',
	},
	props: {
		checked: Boolean
	}
}

// isActive updates when CustomCheck emits event
<CustomCheck v-model="isActive"></CustomCheck>
```

-   listener
	
```jsx
computed: {
	inputListeners: function() {
		const vm = this;
		return Object.assign({},
			this.$listeners,
			{
				input: function(event) {
					vm.$emit('input', event.target.value)
				}
			}
	}
}

<label>
	{{ label }}
	<input
		v-bind:"$attrs"
		v-bind:value="value"
		v-on="inputListeners"
	>
</label>
```
