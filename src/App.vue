<template>
	<main class="overflow-hidden">
		<NavBar />

		<RouterView />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
