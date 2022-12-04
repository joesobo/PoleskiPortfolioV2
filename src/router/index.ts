import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Projects from '../views/Projects.vue'
import Notes from '../views/Notes.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects,
		},
		{
			path: '/notes',
			name: 'notes',
			component: Notes,
		},
	],
})

export default router
