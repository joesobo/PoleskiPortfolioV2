<template>
	<main>
		<NavBar />

		<div class="flex h-full min-h-full">
			<SideBar />

			<RouterView />

			<SocialBar />
		</div>

		<Footer />
	</main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
import SocialBar from './components/SocialBar.vue'
import Footer from './components/Footer.vue'
</script>
