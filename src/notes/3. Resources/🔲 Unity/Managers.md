
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]
> Links:


# `= this.file.name`

This is an object that managers and controls the state of a large group of sub-objects. For example you could have a fish manager which spawns and destroys a school of fish.

---

Good design pattern example:

```cs
public class FishManager : Monobehaviour {
	public static List<Fish> allFish = new List<Fish>();
}

public class Fish : Monobehaviour {
	void OnEnable() => FishManager.allFish.Add(this);
	void OnDisable() => FishManager.allFish.Remove(this);
}
```

```ad-tip
title: Tip
collapse: open
color: 255, 255, 255

- Give managers their own visual indicator by using the Gizmos dropdown next to the name field.

```
