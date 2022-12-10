<template>
	<details :open="open" class="cursor-pointer mt-4">
		<summary
			class="text-start text-dark hover:text-accent"
			:class="activeNoteTitle === rootNote.title ? 'text-light font-bold' : ''"
			@click="toggleState()"
		>
			{{ rootNote.title.replace('.md', '') }}
			<Icon
				v-if="state && rootNote.children"
				icon="mdi:chevron-up"
				class="float-right mr-16 w-5 h-5"
			/>
			<Icon
				v-else-if="rootNote.children"
				icon="mdi:chevron-down"
				class="float-right mr-16 w-5 h-5"
			/>
		</summary>
		<div
			v-if="rootNote.children && rootNote.children.length > 0"
			class="ml-8 flex flex-col"
		>
			<NoteBar
				v-for="note in rootNote.children"
				:key="note.title"
				:rootNote="note"
				:open="false"
				:activeNoteTitle="activeNoteTitle"
				@setNote="(note: Note) => emit('setNote', note)"
			/>
		</div>
	</details>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Note } from '../data/notes'
import { Icon } from '@iconify/vue'

const emit = defineEmits(['setNote'])

const props = defineProps<{
	rootNote: Note
	open: boolean
	activeNoteTitle: string
}>()

const state = ref(props.open)

const toggleState = () => {
	state.value = !state.value
	emit('setNote', props.rootNote)
}
</script>

<style scoped>
details > summary {
	list-style: none;
}
details > summary::-webkit-details-marker {
	display: none;
}
</style>
