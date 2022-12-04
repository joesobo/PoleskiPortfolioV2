<template>
	<main
		class="overflow-hidden flex flex-col"
		:class="$route.path !== '/notes' ? 'overflow-hidden' : 'overflow-scroll'"
	>
		<NavBar />

		<div class="h-16 bg-black w-full fixed top-12" />
		<RouterView class="mt-28" />
		<div class="h-16 bg-black w-full fixed bottom-12" />

		<Footer />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
</script>
