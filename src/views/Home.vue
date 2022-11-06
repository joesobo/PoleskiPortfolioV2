<template>
	<main class="flex flex-col h-full">
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
		<!-- Body -->
		<div class="flex flex-col justify-center items-center h-full">
			<h1 class="text-bold text-white text-2xl my-5">No file is open</h1>
			<a href="">Go to file (Ctrl + O)</a>
			<a href="">See recent files (Ctrl + O)</a>
			<a href="">Close</a>
		</div>
	</main>
</template>

<script setup lang="ts"></script>
