
> [!INFO]
> 
> tags:  #🕸️/🟦 #🏷️ #📜️
> References: [[💚 Vue]] [[Properties]] [[Methods]]


# Properties and Methods

- data()

  - calls when creating new component instance
  - wraps in reactivity system (wont live update)

  ```jsx
  data() {
  	return { count: 4 }
  }

  console.log(this.count);    //4
  ```

- components:

  - registers components to be used

  ```jsx
  import HelloWorld from "./components/HelloWorld";

  components: {
  	HelloWorld,
  }
  ```

- methods:

  - an object containing desired methods
  - if called from template try not to change data or call async (use lifecycle instead)

  ```jsx
  methods: {
  	incremention() {
  		this.count++;
  	}
  }
  ```

- computed:

  - helps to simplify template
  - useful for complex logic that includes dynamic data
  - can perform same functionality using methods
    - but computed properties are cached (multiple calls to `publishMessages()` return the same data without recomputing unless `this.books` has updated)

  ```jsx
  computed: {
  	publishCount() {
  		return this.count > 0 'Yes' : 'No'
  	}
  	set(newCount) {
  		this.count = newCount;
  	}
  }
  ```

- watch:

  - reacts to data change instead
  - most useful for async or expensive operations on dynamic data

  ```jsx
  watch: {
  	count(newCount, oldCount) async {
  		if (newCount > 10) {
  			this.dataFetch();
  		}
  	}
  }
  ```
