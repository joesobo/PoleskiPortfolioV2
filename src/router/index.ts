import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Notes from '../views/Notes.vue'
import Projects from '../views/Projects.vue'
import NewTab from '../views/NewTab.vue'

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
			component: About,
		},
		{
			path: '/contact',
			name: 'contact',
			component: Contact,
		},
		{
			path: '/notes',
			name: 'notes',
			component: Notes,
		},
		{
			path: '/projects',
			name: 'projects',
			component: Projects,
		},
		{
			path: '/newTab',
			name: 'newTab',
			component: NewTab,
		},
	],
})

export default router
