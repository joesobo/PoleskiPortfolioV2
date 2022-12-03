<template>
	<footer
		class="h-12 p-4 w-full flex justify-center bg-white fixed bottom-0 z-10"
	>
		<div class="w-1/4 flex items-center justify-between">
			<a href="https://github.com/joesobo" target="_blank">
				<Icon
					class="w-8 h-8 text-dark hover:text-accent"
					icon="carbon:logo-github"
				/>
			</a>
			<a
				href="https://www.linkedin.com/in/joe-soboleski-34a502135/"
				target="_blank"
			>
				<Icon
					class="w-8 h-8 text-dark hover:text-accent"
					icon="carbon:logo-linkedin"
				/>
			</a>

			<a href="https://twitter.com/JosephSobo" target="_blank">
				<Icon
					class="w-8 h-8 text-dark hover:text-accent"
					icon="carbon:logo-twitter"
				/>
			</a>
		</div>
	</footer>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
