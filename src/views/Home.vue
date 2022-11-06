<template>
	<Page>
		<div class="flex flex-col justify-center items-center h-full w-full">
			<h1 class="text-bold text-white text-2xl my-5">No file is open</h1>
			<a href="">Go to file (Ctrl + P)</a>
			<a href="">Show All Commands (Ctrl + Shift + P)</a>
			<a href="">Close</a>
		</div>
	</Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue'
</script>
