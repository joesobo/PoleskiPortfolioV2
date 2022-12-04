???+ ad-tip Info 


> [!INFO]
> 
> Tags:  #🕸️/🟦 #🏷️ 
> References: [[⌨️ General Dev]] [[Programming]] [[DX]]    
> Links:
- https://sendoso.atlassian.net/wiki/spaces/FE/pages/1400635399/Testing+Best+Practices  
- https://testing-library.com/docs/vue-testing-library/intro/
- https://testing-library.com/docs/vue-testing-library/cheatsheet/
- https://kentcdodds.com/blog/write-tests


# `= this.file.name`

- [[#Why write tests|Why write tests]]
- [[#Why skip some tests|Why skip some tests]]
- [[#Things worth testing:|Things worth testing]]
- [[#Best Practices:|Best Practices]]

  
### Why write tests

Provides confidence to users are able to fully use application as long as they all pass. Tests should resemble the way the software is actually used (for better DX)

### Why skip some tests
* Time
* Difficulty
* Unsure what to test

  <br>
  
### Things worth testing:

1. user behavior
2. semantical html / a11y
3. DX behavior (Events)
4. relevant changes based on props (all variants)

 <br>

### Best Practices:

1. Find elements like how users find elements
	* Click `button` vs click `button.dashed-button.link`
2. Unit test vs Integration test
3. Don't over test
4. Avoid snapshot testing (generally not useful)
5. Avoid nesting tests (prefer readability)
6. Duplication is okay

### Specific Software Testing
[[Vue Testing Library]]
