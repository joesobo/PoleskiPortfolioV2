import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (About.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import('../views/About.vue'),
		},
		{
			path: '/contact',
			name: 'contact',
			component: () => import('../views/Contact.vue'),
		},
		{
			path: '/notes',
			name: 'notes',
			component: () => import('../views/Notes.vue'),
		},
		{
			path: '/projects',
			name: 'projects',
			component: () => import('../views/Projects.vue'),
		},{
			path: '/newTab',
			name: 'newTab',
			component: () => import('../views/NewTab.vue'),
		},
	],
})

export default router
