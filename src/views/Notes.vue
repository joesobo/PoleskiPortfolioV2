<template>
	<div class="flex flex-col h-full px-16">
		<h1 class="text-3xl font-bold text-dark mt-4 fixed">Notes</h1>

		<div class="flex h-full pt-24">
			<!-- Section 1 -->
			<div class="w-1/6 h-full fixed">
				<div
					class="h-2/3 flex flex-col border-r border-r-black overflow-y-scroll"
				>
					<NoteBar
						:rootNote="notes"
						:activeNoteTitle="activeNote.title"
						open
						@setNote="(note) => setActiveNote(note)"
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
}

const activeNote: Ref<Note> = ref(notes)
</script>

<style scoped>
:deep(p),
:deep(ul),
:deep(pre),
:deep(li) {
	margin-top: 16px;
}

:deep(h1) {
	font-size: 1.875rem; /* 30px */
	line-height: 2.25rem; /* 36px */
	font-weight: bold;
}

:deep(h2) {
	font-size: 1.75rem; /* 28px */
	line-height: 2rem; /* 32px */
	margin-top: 32px;
}

:deep(h3) {
	font-size: 1.5rem; /* 24px */
	line-height: 1.75rem; /* 28px */
	margin-top: 28px;
}

:deep(h4) {
	font-size: 1.25rem; /* 20px */
	line-height: 1.75rem; /* 28px */
	margin-top: 28px;
}

:deep(h5) {
	font-size: 1.125rem; /* 18px */
	line-height: 1.5rem; /* 24px */
	margin-top: 24px;
}

:deep(h6) {
	font-size: 1rem; /* 16px */
	line-height: 1.25rem; /* 20px */
	margin-top: 16px;
}
</style>
