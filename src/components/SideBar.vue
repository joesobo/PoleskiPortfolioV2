<template>
	<div
		class="flex flex-col w-48 h-full border-r border-[#424958] fixed left-0 px-2"
	>
		<h2 class="text-lg text-white mt-4 mb-2">Poleski Portfolio</h2>
		<RouterLink to="/">Home</RouterLink>
		<div class="flex justify-between">
			<RouterLink to="/projects">Projects</RouterLink>
			<button @click="toggleProjects" class="mr-2">
				<div
					@mouseover="hoverProjectIcon = true"
					@mouseleave="hoverProjectIcon = false"
				>
					<Icon
						v-if="showProjects && !hoverProjectIcon"
						icon="material-symbols:expand-circle-down-outline-rounded"
						:rotate="2"
						class="w-5 h-5"
					/>
					<Icon
						v-else-if="!showProjects && !hoverProjectIcon"
						icon="material-symbols:expand-circle-down-outline-rounded"
						class="w-5 h-5"
					/>
					<Icon
						v-if="showProjects && hoverProjectIcon"
						icon="material-symbols:expand-circle-down-rounded"
						:rotate="2"
						class="w-5 h-5"
					/>
					<Icon
						v-else-if="!showProjects && hoverProjectIcon"
						icon="material-symbols:expand-circle-down-rounded"
						class="w-5 h-5"
					/>
				</div>
			</button>
		</div>
		<div v-if="showProjects" class="flex flex-col ml-2">
			<RouterLink
				v-for="project in projects"
				:key="project.title"
				:to="{ path: '/projects', hash: `#${project.title}` }"
				>{{ project.title }}</RouterLink
			>
		</div>
		<RouterLink to="/notes">Notes</RouterLink>
		<RouterLink to="/about">About</RouterLink>
		<RouterLink to="/contact">Contact</RouterLink>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { projects } from '../data/projects'

let showProjects = ref(false)
let hoverProjectIcon = ref(false)

const toggleProjects = () => {
	showProjects.value = !showProjects.value
}
</script>
