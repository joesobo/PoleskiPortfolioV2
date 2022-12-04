
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]
> Links:


# `= this.file.name`

`DrawBezier(start, end, startTanget, endTangent, color, texture, width)`

How to draw a basic Bezier Curve:

```cs
#if UNITY_EDITOR
void OnDrawGizmos() {
	Vector3 start = transform.position;
	Vector3 end = fish.transform.position;
	float halfHeight = (start.y - end.y) * 0.5f;
	Vector3 offset = Vector3.up * halfHeight;

	Handles.DrawBezier(
		start,
		end,
		start - offset,
		end + offset,
		Color.white,
		EditorGUIUtilty.whiteTexture,
		1f
	);
}
#endif
```
