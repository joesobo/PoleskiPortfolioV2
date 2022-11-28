<template>
	<div class="w-full flex justify-center items-center">
		<div class="bg-black h-screen flex items-center">
			<img :src="treesImg" class="pt-12 w-full object-cover opacity-50" />
		</div>
		<div class="absolute flex justify-between mx-8">
			<img
				src="https://avatars.githubusercontent.com/u/26047842?v=4"
				class="rounded-full w-72"
			/>
			<div class="flex flex-col w-1/2">
				<h1 class="text-2xl text-white">Hi! My name is Joseph Soboleski</h1>
				<p class="text-white mt-10">
					I'm a Software Engineer who loves to build things. I make websites,
					apps, and sometimes games. A focus for me is to make tools that are
					accessible and easy to use for developers.
				</p>

				<p class="text-white mt-4">
					I'm currently working on a few projects. See more information
					<router-link
						class="text-dark hover:text-black bg-white hover:bg-accent p-1 mt-2 rounded-md"
						to="/projects"
						>here</router-link
					>.
				</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import treesImg from '../assets/trees.jpg'
</script>
