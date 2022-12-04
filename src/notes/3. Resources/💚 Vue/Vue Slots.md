
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[💚 Vue]] [[Slot]]


# Slots

- Useful for passing content to a component
- without a slot tag any extra info is trashed
- must specify name if using shorthand

```jsx
// parent
<alertBox>
	Broken here
	<div>like seriously broke bruh</div>
</alertBox>

// child
<slot></slot>                     // parent body replaces slot element
```

- using data in a slot

  - slot has access to templates scope

  ```jsx
  // runs
  <alertBox>Error on {{ errorLocation }}</alertBox>
  ```

  - slot has no access to components scope

  ```jsx
  // does not run
  <alertBox error="test error">Error on {{ errorLocation }}</alertBox>
  ```

- Default - rendered when no content provided

```jsx
<slot>Default Text</slot>
```

- Named Slots - useful for multiple slots (slot with no name is "default")

```jsx
// parent
<alertBox>
	<template v-slot:first>First slot</template>
	<template v-slot:second>Second slot</template>
	<template v-slot:default>Default / Third slot</template>
</alertBox>

// child
<div>
	<slot name="first"></slot>
	<slot name="second"></slot>
	<slot></slot>
</div>
```

- Scoped Slots - makes item variable available to slot content
  - attributes bounded to slot are called slot props

```jsx
// parent
<alertBox>
	<template v-slot="slotProps">
		<p>{{ slotProps.item }}</p>
	</template>
</alertBox>

// child
<li v-for="item in items">
	<slot :item="item"></slot>
</li>
```

- Destructuring Slot Props

```jsx
<alertBox>
  <template v-slot="{item: todo}">
    <p>{{ todo }}</p>
  </template>
</alertBox>
```

- Dynamic Slot Names

```jsx
<alertBox>
	<template v-slot:[dynamicSlotName]>
		<p>{{ todo }}</p>
	</template>
</alertBox>
```
