<template>
	<div class="relative flex justify-center">
		<div class="w-full flex items-center justify-center">
			<img
				:src="treesImg"
				class="w-full object-cover opacity-60 h-[calc(100vh-224px)]"
			/>
		</div>
		<div class="absolute top-1/3 w-1/2 mx-auto flex justify-between">
			<img
				src="https://avatars.githubusercontent.com/u/26047842?v=4"
				class="rounded-full w-72 h-72 mr-16"
			/>
			<div class="flex flex-col w-1/2 bg-black rounded-lg p-4">
				<h1 class="text-2xl text-white">Hi! My name is Joseph Soboleski</h1>
				<p class="text-white mt-10">
					I'm a Software Engineer who loves to build things. I make websites,
					apps, and sometimes games. A focus for me is to make tools that are
					accessible and easy to use for developers.
				</p>

				<!-- <p class="text-white mt-4">
					As a Software Engineer with a focus on accessibility, I have a deep
					understanding of the importance of creating user-friendly and
					inclusive digital experiences. I have experience using frontend
					technologies such as Vue and Nuxt, and I am committed to incorporating
					best practices for accessibility into my work.
				</p>

				<p class="text-white mt-4">
					In addition to my technical skills, I am a collaborative team player
					and a strong communicator. I am always looking for ways to improve the
					user experience and drive innovation as well as my own abilities.
				</p> -->

				<p class="text-white mt-4 leading-7">
					I'm currently working on a few projects. See more information
					<router-link
						class="text-dark hover:text-black bg-white hover:bg-accent p-1 rounded-lg"
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
