<template>
	<nav class="h-12 p-4 w-full flex justify-between bg-white fixed z-10">
		<div class="flex items-center">
			<router-link to="/">
				<Icon
					icon="mdi:lighthouse"
					class="w-10 h-10 text-dark hover:text-accent"
				/>
			</router-link>
			<router-link to="/" class="ml-3 hover:text-accent"
				><h1>Joseph Soboleski</h1></router-link
			>
		</div>

		<div class="flex items-center">
			<router-link class="mr-3 hover:text-accent" to="/">Home</router-link>
			<router-link class="hover:text-accent" to="/projects"
				>Projects</router-link
			>
		</div>
	</nav>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
