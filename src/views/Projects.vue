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
					<a
						:href="activeProject.demo ?? activeProject.github"
						target="_blank"
						class="text-2xl text-dark hover:text-accent mt-4"
					>
						{{ activeProject.title }}
					</a>
					<p
						class="text-dark mt-8"
						v-for="description in activeProject.description"
						:key="description"
					>
						{{ description }}
					</p>
					<div class="flex mt-8">
						<a :href="activeProject.github" target="_blank" class="mr-2"
							><Icon
								icon="carbon:logo-github"
								class="w-6 h-6 text-dark hover:text-accent"
						/></a>
						<a
							v-if="activeProject.demo"
							:href="activeProject.demo"
							target="_blank"
							><Icon
								icon="material-symbols:open-in-new"
								class="w-6 h-6 text-dark hover:text-accent"
						/></a>
					</div>
				</div>
			</div>

			<!-- Section 3 -->
			<!-- <div class="w-1/2 min-w-16"> -->
			<a
				class="w-1/2 min-w-16"
				:href="activeProject.demo ?? activeProject.github"
				target="_blank"
			>
				<img
					v-if="activeProject"
					:src="activeProject.img"
					class="w-full min-w-16 bg-black aspect-square object-contain rounded-lg"
				/>
			</a>
			<!-- </div> -->
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
