<template>
	<header>
		<NavBar>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/projects">Projects</RouterLink>
			<RouterLink to="/notes">Notes</RouterLink>
			<RouterLink to="/about">About</RouterLink>
			<RouterLink to="/contact">Contact</RouterLink>
		</NavBar>
	</header>

	<!-- Top Row -->
	<div class="flex h-8 justify-between">
		<div class="flex">
			<!-- left arrow -->
			<img src="" class="w-4 h-4 mr-2 bg-white" />
			<!-- right arrow -->
			<img src="" class="w-4 h-4 bg-white" />
		</div>
		<div class="flex">New tab</div>
		<div>
			<!-- three dots -->
			<img src="" class="w-4 h-4 bg-white" />
		</div>
	</div>

	<SideBar />

	<RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
</script>
