
> [!INFO]
> 
> tags:  #🕸️/🟧️


<iframe src="https://6146a62b22390.htmlsave.net" frameborder=0 style="width:100%"></iframe>

```dataview
for (let page of dv.pages('"FOLDER PATH HERE"')
	.where(page => !page.file.etags.includes("#index")))
{
	dv.header(6, `* ${page.file.link}`)
}
```

`= this.file.name`
