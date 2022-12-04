
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References:  [[🔲 Unity]]
> Links: 



# `= this.file.name`

A ScriptableObject is an asset that acts as a data container for large amounts of *common* information

### Uses

The 2 options for creating duplicate versions of objects in a game is through [[prefabs]] or ScriptableObjects. Using prefabs means every instances creates a new chunk of memory for all its information. Using [[prefabs]] that access a single ScriptableObject to save memory while still retaining all the important information.

### Example

```cSharp
[CreateAssetMenu]
public class FishType : ScriptableObject {
	public int fishNumber = 0;
	...
}
```

```cSharp
public class Fish : MonoBehaviour {
	public FishType type;
}
```
