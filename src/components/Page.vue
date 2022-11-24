<template>
	<div
		class="flex h-full overflow-hidden w-full flex-1 max-w-4xl mx-auto mb-16 justify-center items-center"
	>
		<slot />
		<FileModal v-if="fileModal" />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import FileModal from '../components/FileModal.vue'

let fileModal = ref(false)

document.addEventListener('keydown', (e) => {
	e.preventDefault()
	if ((e.metaKey || e.ctrlKey) && e.code === 'KeyP') {
		fileModal.value = !fileModal.value
	}
})
</script>
