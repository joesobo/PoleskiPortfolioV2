<template>
	<header>
		<NavBar>
			<RouterLink to="/">Home</RouterLink>
			<RouterLink to="/about">About</RouterLink>
		</NavBar>
	</header>

	<SideBar />

	<RouterView />
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
import SideBar from './components/SideBar.vue'
</script>
