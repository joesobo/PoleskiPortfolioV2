
> [!INFO]
> 
> tags:  #🕸️/🟦  
> References: [[🔲 Unity]]
> Links:


# `= this.file.name`

`Material` give the appearance of an object.
`Meshes` give the shape of an object.

---

Make sure not to instantiate materials or meshes unless you know what your doing. Can cause mesh leaks (bad).

```cs
void Awake() {
	// Creates a duplicate of the *asset* ❌ (not good)
	GetComponent<MeshRenderer>().material.color = Color.red;
	GetComponent<MeshFilter>().mesh = newMesh;

	// The actual *asset* ✅ (good)
	GetComponent<MeshRenderer>().sharedMaterial.color = Color.red;
	GetComponent<MeshFilter>().sharedMesh = newMesh;
}
```

---

How to create assets in editor mode without leaking using `HideFlags`

```cs
void Awake() {
	Shader shader = Shader.Find("Default/Diffuse");

	Material mat = new Material(shader);
	mat.hideFlags = HideFlags.HideAndDontSave;

	or

	Material mat = new Material(shader) { hideFlags = HideFlags.HideAndDontSave };
}
```

#### Best Method

Proper way using a `MaterialPropertyBlock`:

```cs
MaterialPropertyBlock mpb;
static readonly int shPropColor = Shader.PropertyToID("_Color");

MaterialPropertyBlock Mpb {
	get {
		if(mpb == null) {
			mpb = new MaterialPropertyBlock();
		}
		return mpb;
	}
}

// Called everytime you modify a value in the inspector
void OnValidate() {
	ApplyColor();
}

void ApplyColor() {
	MeshRender rnd = GetComponent<MeshRenderer>();
	Mpb.SetColor(shPropColor, color);
	rnd.SetPropertyBlock(Mpb);

	// Old bad version (for reference)
	// rnd.material.SetColor(shPropColor, color);
}
```
