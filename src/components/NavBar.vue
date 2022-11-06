<template>
	<nav class="flex w-full justify-center">
		<div
			class="flex-none w-48 h-8 border-b border-[#424958] border-r justify-end items-center flex"
		>
			<button @click="CloseAllTabs" class="mr-2">
				<img class="w-5 h-5 bg-white" src="" />
			</button>
		</div>
		<div class="flex flex-1 w-full h-8 border-b border-[#424958] pr-2">
			<!-- Tab -->
			<RouterLink
				v-for="tab in tabState"
				:key="tab.name"
				:to="tab.url"
				class="w-32 h-7 border-[#424958] border mt-1 rounded-t-md flex items-center px-2 ml-1 justify-between"
				:class="tab.url === activeRoute ? 'bg-[#252525]' : 'text-slate-500'"
				@click="activeRoute = tab.url"
			>
				<p>{{ tab.name }}</p>

				<button @click.stop.prevent="CloseTab(tab.id)" class="ml-2">
					<img class="w-5 h-5 bg-white" src="" />
				</button>
			</RouterLink>

			<!-- Add New Tab -->
			<button @click="AddNewTab()" class="ml-2">
				<img class="w-5 h-5 bg-white" src="" />
			</button>
		</div>
		<div class="flex-none w-48 h-8 border-b border-[#424958] border-l"></div>
	</nav>
</template>

<script setup lang="ts">
import { ref, type Ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

let activeRoute = ref('/newTab')

type Tab = {
	id: number
	name: string
	url: string
}

let tabState: Ref<Tab[]> = ref([
	{
		id: 0,
		name: 'New Tab',
		url: '/newTab',
	},
])

const AddNewTab = (tab?: Tab) => {
	if (tab && tabState.value.some((t) => t.url === tab.url)) return

	if (tab) {
		activeRoute.value = tab.url
		tabState.value.push(tab)
		return
	}

	if (tabState.value.some((tab) => tab.url === '/newTab')) return

	activeRoute.value = '/newTab'
	tabState.value.push({
		id: tabState.value.length,
		name: 'New Tab',
		url: '/newTab',
	})
}

const CloseTab = (id: number) => {
	if (tabState.value.length === 1) {
		tabState.value = [
			{
				id: 0,
				name: 'New Tab',
				url: '/newTab',
			},
		]
		activeRoute.value = '/newTab'
		router.push('/newTab')
		return
	}

	for (let i = 0; i < tabState.value.length; i++) {
		if (activeRoute.value === tabState.value[i].url) {
			if (i > 0) {
				activeRoute.value = tabState.value[i - 1].url
				router.push(activeRoute.value)
				break
			} else if (tabState.value.length > 0) {
				activeRoute.value = tabState.value[1].url
				router.push(activeRoute.value)
				break
			} else {
				activeRoute.value = '/newTab'
				router.push(activeRoute.value)
				break
			}
		}
	}

	tabState.value = tabState.value.filter((tab) => tab.id !== id)
}

const CloseAllTabs = () => {
	tabState.value = [
		{
			id: 0,
			name: 'New Tab',
			url: '/newTab',
		},
	]
	activeRoute.value = '/newTab'
	router.push('/newTab')
}

const GetNameFromPath = (path: string) => {
	switch (path) {
		case '/':
			return 'Home'
		case '/newTab':
			return 'New Tab'
		case '/contact':
			return 'Contact'
		case '/about':
			return 'About'
		case '/notes':
			return 'Notes'
		case '/projects':
			return 'Projects'
		default:
			return 'New Tab'
	}
}

watch(route, (newRoute) => {
	if (tabState.value.some((t) => t.url === newRoute.path)) {
		activeRoute.value = newRoute.path
		return
	}

	if (tabState.value.length === 1 && tabState.value[0].url === '/newTab') {
		activeRoute.value = newRoute.path
		tabState.value[0].url = newRoute.path
		tabState.value[0].name = GetNameFromPath(newRoute.path)
		return
	}

	if (tabState.value.some((tab) => tab.url === '/newTab')) {
		const index = tabState.value.findIndex((tab) => tab.url === '/newTab')

		activeRoute.value = newRoute.path
		tabState.value[index].url = newRoute.path
		tabState.value[index].name = GetNameFromPath(newRoute.path)
		return
	}

	AddNewTab({
		id: tabState.value.length,
		name: GetNameFromPath(newRoute.path),
		url: newRoute.path,
	})
})
</script>
