
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]
> Links:


# `= this.file.name`

Handles are an editor only class that allows you to draw stuff similar to gizmos. Requires you to use a pre-processor to run properly `using UnityEditor;`.

To ensures that Unity will not include this script at build time, meaning it is only for editor usage, you must wrap the code you want excluded in `#if UNITY_EDITOR` and `#endif`.

Example of drawing anti-aliasing lines:

```cs
#if UNITY_EDITOR
using UnityEditor;
#endif

...

void OnDrawGizmos() {
	#if UNITY_EDITOR
	foreach(Fish fish in allFish) {
		Handles.DrawAAPolyLine(transform.postion, fish.transform.position);
	}
	#endif
}
```

##### Handles Functions

- `DrawAAPolyLine(start, end)`
- `DrawBezier(start, end, startTanget, endTangent, color, texture, width)`
- `DrawWireDisc(center, diskNormal, radius)`

##### Handles Options

-`color`
