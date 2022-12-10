<template>
	<div class="relative flex justify-center">
		<div class="w-full flex items-center justify-center">
			<img
				:src="oceanImg"
				class="w-full object-cover opacity-60 h-[calc(100vh-224px)]"
			/>
		</div>

		<div class="absolute top-1/3 w-2/3 mx-auto flex justify-between">
			<img
				src="https://avatars.githubusercontent.com/u/26047842?v=4"
				class="rounded-full w-96 h-96 mr-8"
			/>
			<div class="flex flex-col w-3/5 bg-black rounded-lg p-8">
				<h1 class="text-3xl font-bold text-white">
					Hi! My name is Joseph Soboleski.
				</h1>
				<h2 class="text-3xl text-white mt-4">
					I'm a Software Engineer who loves to build things.
				</h2>
				<p class="text-white my-16">
					I make
					<span class="text-accent font-bold">websites</span>,
					<span class="text-accent font-bold">tools</span>, and sometimes
					<span class="text-accent font-bold">games</span>. I am always eager to
					learn and explore new technologies. A huge focus for me is to make
					tools that are accessible and easy to use. I'm currently working on a
					few different projects.
				</p>

				<div class="flex">
					<a
						href="mailto:soboleskijoe@gmail.com"
						class="py-2 px-6 bg-accent hover:bg-light text-white rounded-md mr-4"
					>
						Contact Me
					</a>
					<a
						href="/projects"
						class="py-2 px-6 bg-dark hover:bg-[#1a2b31] text-white rounded-md"
					>
						See Portfolio
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import oceanImg from '../assets/ocean.jpg'
</script>
