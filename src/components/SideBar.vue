<template>
	<div
		class="flex flex-col w-48 h-full border-r border-[#424958] fixed left-0 px-2"
	>
		<h2 class="text-lg text-white mt-4 mb-2">Poleski Portfolio</h2>
		<RouterLink to="/">Home</RouterLink>
		<RouterLink to="/projects">Projects</RouterLink>
		<div class="flex flex-col ml-1">
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
import { projects } from '../data/projects'
</script>
