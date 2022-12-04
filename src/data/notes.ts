export type Note = {
	title: string
	content?: string
	children?: Note[]
}

const rawNotes = import.meta.glob('../notes/**/*.md', {
	eager: true,
	as: 'raw',
})
const noteTitles = Object.keys(rawNotes)

const cleanNote = (note: string) => {
	return note
		.split('\n')
		.filter((line) => !line.startsWith('>'))
		.filter((line) => !line.includes('= this.file.name'))
		.filter((line) => !line.includes('???+ ad-tip Info'))
		.filter((line) => line !== '\n')
		.join('\n')
}

const cleanTitle = (title: string) => {
	return title.replace('../notes/3. Resources/', '')
}

const generateNoteTree = () => {
	const rootNote: Note = { title: '3. Resources' }

	for (let i = 0; i < noteTitles.length; i++) {
		const title = cleanTitle(noteTitles[i])
		const titleArray = title.split('/')
		let currentNoteNode = rootNote

		for (const titleSegment of titleArray) {
			if (
				titleSegment.endsWith('.md') &&
				titleSegment.replace('.md', '') === currentNoteNode.title
			) {
				currentNoteNode.content = cleanNote(rawNotes[noteTitles[i]])
				break
			}

			let childNoteNode = currentNoteNode.children?.find(
				(nodeNote) => nodeNote.title === titleSegment
			)

			if (!childNoteNode) {
				childNoteNode = { title: titleSegment }
				currentNoteNode.children = [
					...(currentNoteNode.children || []),
					childNoteNode,
				]
			}
			currentNoteNode = childNoteNode
		}

		if (currentNoteNode.title.endsWith('.md')) {
			currentNoteNode.content = cleanNote(rawNotes[noteTitles[i]])
		}
	}

	return rootNote
}

export const notes: Note = generateNoteTree()
