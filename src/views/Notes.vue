<template>
	<div class="flex flex-col h-full px-16">
		<h1 class="text-3xl font-bold text-dark mt-4 fixed">Notes</h1>

		<div class="flex h-full pt-32">
			<!-- Section 1 -->
			<div class="w-1/6 h-full fixed">
				<div
					class="h-2/3 flex flex-col border-r border-r-black overflow-y-scroll"
				>
					<NoteBar
						:rootNote="notes"
						@setNote="(note) => setActiveNote(note)"
						:open="false"
					/>
				</div>
			</div>

			<!-- Section 2 -->
			<div class="w-full pl-[calc(20%)] pr-40">
				<div
					v-if="activeNote.content"
					v-html="marked.parse(activeNote.content)"
					class="mb-44"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { marked } from 'marked'
import hljs from 'highlight.js'
import { notes } from '../data/notes'
import type { Note } from '../data/notes'
import NoteBar from '../components/NoteBar.vue'

marked.setOptions({
	renderer: new marked.Renderer(),
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : 'plaintext'
		return hljs.highlight(code, { language }).value
	},
	langPrefix: 'hljs language-',
	pedantic: false,
	gfm: true,
	breaks: false,
	sanitize: false,
	smartLists: true,
	smartypants: false,
	xhtml: false,
})

const setActiveNote = (note: Note) => {
	activeNote.value = note
	console.log(note.content)
}

const activeNote: Ref<Note> = ref(notes)
</script>

<style scoped>
:deep(p),
:deep(ul),
:deep(pre),
:deep(li),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
	margin-top: 16px;
}

:deep(h1) {
	margin-top: 32px;
}
</style>
