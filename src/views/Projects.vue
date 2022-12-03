<template>
	<div class="flex flex-col h-full px-16">
		<h1 class="text-3xl font-bold text-dark mt-4">Projects</h1>
		<div class="flex h-full pt-32">
			<!-- Section 1 -->
			<div class="w-1/3 h-full mr-16">
				<div class="h-2/3 flex flex-col border-r border-r-black">
					<div
						v-for="project in projects"
						:key="project.title"
						class="mt-4 text-dark hover:text-accent"
					>
						<button
							@click="setActiveProject(project)"
							:class="
								project.title === activeProject.title
									? 'text-light font-bold'
									: ''
							"
						>
							{{ project.title }}
						</button>
					</div>
				</div>
			</div>

			<!-- Section 2 -->
			<div class="w-full pr-40">
				<div v-if="activeProject" class="flex flex-col">
					<h2 class="text-2xl text-dark mt-4">
						{{ activeProject.title }}
					</h2>
					<p
						class="text-dark mt-8"
						v-for="description in activeProject.description"
						:key="description"
					>
						{{ description }}
					</p>
				</div>
			</div>

			<!-- Section 3 -->
			<div class="w-1/2 min-w-16">
				<img
					v-if="activeProject"
					:src="activeProject.img"
					class="w-full min-w-16 bg-black aspect-square object-contain rounded-lg"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import { projects } from '../data/projects'
import type { Project } from '../data/projects'
import { Icon } from '@iconify/vue'

let activeProject: Ref<Project> = ref(projects[0])

const setActiveProject = (project: Project) => {
	activeProject.value = project
}
</script>
