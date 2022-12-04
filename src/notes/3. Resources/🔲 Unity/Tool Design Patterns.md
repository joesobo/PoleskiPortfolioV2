
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]  
> Links: [[design pattern]]


# `= this.file.name`

[[Managers]]

Useful for allowing the object itself add and remove itself from the list. Allows for greater control in editor with interacting with specific objects without worrying about interfering with manager.

```cs
public class FishManager : Monobehaviour {
	public static List<Fish> allFish = new List<Fish>();
}

public class Fish : Monobehaviour {
	void OnEnable() => FishManager.allFish.Add(this);
	void OnDisable() => FishManager.allFish.Remove(this);
}
```
