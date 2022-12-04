
> [!INFO]
> 
> tags:  #🕸️/🟦   
> References:  [[🔲 Unity]]
> Links: 



# `= this.file.name`

Create a custom inspector editor for your ScriptableObjects. Allows you to modify how it looks and background functionality. 

### Requirements

- must be in a folder named `Editor`
- conventionally names ends with `Editor`

### Example

```cSharp
[CustomEditor(typeof(FishType))]
public class FishTypeEditor : Editor {
	public overrider void OnInspectorGUI() {
		base.OnInspectorGUI()
	}
}
```

### Appearance

Appearance of your inspector GUI can be edited within the `OnInspectorGUI()`

`base.OnInspectorGUI()` - shows the default GUI from Unity
