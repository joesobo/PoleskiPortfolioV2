
> [!INFO]
> 
> tags:  #🕸️/🟦    
> References:  [[🔲 Unity]] 
> Links: 



# `= this.file.name`

Serialization is the process of transforming info for storage by Unity. Helps information be persistent between assembly reloads (restarting Unity).

Also enforces that the data type is serializable

### Example Fields

`public float thing;` - serialized, visible, public
`float thing;` - not serialized, hidden, private

`[SerializeField] float thing;` - serialized, visible, private
`[HideInInspector] public float thing;` - serialize, hidden, public

### Example Class

```cSharp
[Serializable]
public class MyClass {
	public float x, y, z;
	public Color color;
}
```
