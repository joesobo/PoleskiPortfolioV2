<template>
	<div class="flex flex-col h-full px-16">
		<h1 class="text-3xl font-bold text-dark mt-4 fixed">Notes</h1>

		<div class="flex h-full pt-32">
			<!-- Section 1 -->
			<div class="w-1/6 h-full fixed">
				<div
					class="h-2/3 flex flex-col border-r border-r-black overflow-y-scroll"
				>
					<div
						v-for="note in Object.keys(notes)"
						:key="note"
						class="mt-4 text-dark hover:text-accent"
					>
						<button
							@click="setActiveNote(note)"
							class="text-left"
							:class="note === activeNote ? 'text-light font-bold' : ''"
						>
							{{ cleanTitle(note) }}
						</button>
					</div>
				</div>
			</div>

			<!-- Section 2 -->
			<div class="w-full pl-[calc(20%)] pr-40">
				<div
					v-if="activeNote"
					v-html="marked.parse(cleanNote(activeNote))"
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

const setActiveNote = (note: string) => {
	activeNote.value = notes[note]
}

const notes = import.meta.glob('../notes/**/*.md', { eager: true, as: 'raw' })
const activeNote: Ref<string> = ref(notes[Object.keys(notes)[0]])

const cleanNote = (note: string) => {
	return note
		.split('\n')
		.filter((line) => !line.startsWith('>'))
		.filter((line) => line !== '# `= this.file.name`')
		.filter((line) => line !== '`= this.file.name`')
		.filter((line) => line !== '\n')
		.join('\n')
}

const cleanTitle = (title: string) => {
	return title.replace('../notes/3. Resources/', '').replace('.md', '')
}
</script>

<style scoped>
:deep(p),
:deep(ul),
:deep(pre),
:deep(li) {
	margin-top: 16px;
}

:deep(h1),
:deep(h2),
:deep(h3),
:deep(h4),
:deep(h5),
:deep(h6) {
	margin-top: 32px;
}
</style>
