
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]  
> Links:


# `= this.file.name`

If we want to visualize in the Scene View we use Gizmos. Gizmos are just editor visualization to help game designers see the background logic.

`OnDrawGizmos()` - Update loop to the editor where you can draw to the scene.

`OnDrawGizmosSelected()` - Update loop to the editor when the object is selected (can reduce chaos)

---

Example of drawing a wire sphere around our object:

```cs
void OnDrawGizmos() {
	Gizmos.DrawWireSphere(transform.position, radius);
}
```

Example of drawing line from a manager to its children:

```cs
void OnDrawGizmos() {
	foreach(Fish fish in allFish) {
		Gizmos.DrawLine(transform.postion, fish.transform.position);
	}
}
```
