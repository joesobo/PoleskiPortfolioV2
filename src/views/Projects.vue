<template>
	<Page>
		<div class="w-full h-full flex flex-col">
			<h1 class="text-bold text-white text-2xl mt-8 mb-4">Projects</h1>

			<div
				v-for="project in projects"
				:key="project.title"
				class="flex justify-between w-full py-4 border-y border-[#424958]"
			>
				<div class="flex flex-col justify-between">
					<div class="flex flex-col">
						<div class="flex">
							<a
								:href="project.demo ? project.demo : project.github"
								target="_blank"
								:id="project.title"
								>{{ project.title }}</a
							>
							<a :href="project.github">
								<Icon icon="mdi:github" class="w-5 h-5 ml-2" />
							</a>
							<a v-if="project.demo" :href="project.demo">
								<Icon icon="mdi:link-variant" class="w-5 h-5 ml-2" />
							</a>
						</div>
						<p>{{ project.description }}</p>
					</div>

					<div class="flex">
						<div v-for="tech in project.tech" :key="tech" class="mr-2">
							<span>{{ tech }}</span>
						</div>
					</div>
				</div>

				<div class="flex flex-col">
					<a :href="project.demo ? project.demo : project.github">
						<img
							:src="project.img"
							:alt="project.title"
							class="object-cover min-w-[8rem] w-32 h-32 rounded-md"
						/>
					</a>
				</div>
			</div>
		</div>
	</Page>
</template>

<script setup lang="ts">
import Page from '../components/Page.vue'
import { projects } from '../data/projects'
import { Icon } from '@iconify/vue'
</script>
