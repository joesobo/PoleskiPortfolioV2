import codegraphyImg from '../assets/CodeGraphy.png'
import portfolioImg from '../assets/Portfolio.png'
import tinyturtletankImg from '../assets/TinyTurtleTanks.jpg'
import plantImg from '../assets/Plant.png'
import marchingsquaresImg from '../assets/MarchingSquares.png'
import unityImg from '../assets/Unity.png'
import treeImg from '../assets/Tree.png'

export const projects = [
	{
		title: 'CodeGraphy',
		tech: ['Vue', 'Tailwind', 'Typescript'],
		description:
			'VSCode extension for visualizing the connections between files.',
		img: codegraphyImg,
		github: 'https://github.com/joesobo/Codegraphy',
		demo: 'https://marketplace.visualstudio.com/items?itemName=codegraphy.codegraphy',
	},
	{
		title: 'Poleski Portfolio v1',
		tech: ['Vue 2', 'Typescript'],
		description:
			'My first professional portfolio. Built with Vue 2 and Typescript.',
		img: portfolioImg,
		github: 'https://github.com/joesobo/TinyTurtleTanks',
		demo: 'https://poleski.itch.io/tiny-turtle-tanks',
	},
	{
		title: 'Tiny Turtle Tanks',
		tech: ['C#, Shaders', 'Unity'],
		description:
			'Tiny Turtle Tanks is a fun casual shooter game about exploring the solar system and ridding the exotic planets of evil Turtlebots.',
		img: tinyturtletankImg,
		github: 'https://github.com/joesobo/TinyTurtleTanks',
		demo: 'https://poleski.itch.io/tiny-turtle-tanks',
	},
	{
		title: 'Plant App',
		tech: ['React Native', 'Typescript'],
		description:
			'A small React Native app for notifying you when your plants need watering or fertilizing.',
		img: plantImg,
		github: 'https://github.com/joesobo/PlantApp',
	},
	{
		title: 'Marching Squares v1.0',
		tech: ['C#', 'Compute Shaders', 'Unity'],
		description:
			'A small Unity Library for creating terrain based on the Marching Squares algorithm.',
		img: marchingsquaresImg,
		github: 'https://github.com/joesobo/Marching-Squares',
	},
	{
		title: 'Unity Extension Library',
		tech: ['C#', 'Unity'],
		description:
			'This is a basic Unity Extension Library for quicker coding capability.',
		img: unityImg,
		github: 'https://github.com/joesobo/Unity-Extension-Library',
	},
	{
		title: 'Procedural Voxel Tree',
		tech: ['C#', 'Shaders', 'Unity'],
		description:
			'This is a small tool used to generate procedural trees that was created to assist making custom trees for my game TinyTurtleTanks. It is based off of the popular algorithm Space Colonization.',
		img: treeImg,
		github: 'https://github.com/joesobo/ProceduralVoxelTree',
	},
]