import codegraphyImg from '../assets/CodeGraphy.png'
import portfolioImg from '../assets/Portfolio.png'
import tinyturtletankImg from '../assets/TinyTurtleTanks.jpg'
import plantImg from '../assets/Plant.png'
import marchingsquaresImg from '../assets/MarchingSquares.png'
import unityImg from '../assets/Unity.png'
import treeImg from '../assets/Tree.png'

export type Project = {
	title: string
	description: string[]
	tech: string[]
	img: string
	github: string
	demo?: string
}

export const projects: Project[] = [
	{
		title: 'CodeGraphy',
		tech: ['Vue', 'Tailwind', 'Typescript'],
		description: [
			'CodeGraphy is a VSCode extension that helps developers visualize the connections between files in their project. It uses a 2D force-based graph to show how files are related to each other, making it easy to see the structure of a project at a glance.',
			'To use CodeGraphy, simply open a project in VSCode and run the "CodeGraphy: Focus on CodeGraphy View" command. The extension will scan the project and generate a graph showing the connections between the files. Each file is represented as a node in the graph, and the connections between nodes represent the dependencies between files.',
			'This tool also allows users to customize the graph layout and appearance. For example, users can change the color of the nodes, as well as the desired sorting algorithm. This makes it easy to highlight important connections and better understand the structure of a project.',
			'Overall, CodeGraphy is a valuable tool for developers looking to better understand the connections between files in their project. It allows for quick and easy visualization of these connections, making it easier to navigate complex codebases and identify potential problems.',
		],
		img: codegraphyImg,
		github: 'https://github.com/joesobo/Codegraphy',
		demo: 'https://marketplace.visualstudio.com/items?itemName=codegraphy.codegraphy',
	},
	{
		title: 'Poleski Portfolio v1',
		tech: ['Vue 2', 'Typescript'],
		description: [
			'This is my first professional portfolio website! It contains a bunch of information about recent projects and my experiences as a software engineer.',
			'This portfolio is built with Vue 2 and Typescript, two powerful technologies. I chose to use these technologies because of their versatility and ease of use, and I have enjoyed learning more about them as I have developed this portfolio.',
			'On this site, you will find a selection of my recent projects, as well as information about my education and experience. I have included descriptions of the technologies and techniques that I used in each project, as well as links to the code and live demos where available.',
			'Overall, I am happy with how my portfolio turned out. It is a clean and professional-looking site that showcases my work and experiences as a software engineer. I enjoyed the process of coding it, and I learned a lot along the way.',
		],
		img: portfolioImg,
		github: 'https://github.com/joesobo/TinyTurtleTanks',
		demo: 'https://poleski.itch.io/tiny-turtle-tanks',
	},
	{
		title: 'Tiny Turtle Tanks',
		tech: ['C#, Shaders', 'Unity'],
		description: [
			'Tiny Turtle Tanks is a fun and lighthearted casual shooter game that takes players on a journey through the solar system. In the game, players control their own Turtle Tank, a tiny but powerful turtle that is equipped with an array of weapons and gadgets.',
			'As players explore the exotic planets of the solar system, they will encounter an army of evil Turtlebots that are bent on taking over the galaxy. Using their trusty Turtle Tank, players must battle these enemies and rid the planets of their presence.',
			'The game is 3D and built with Unity, which allows for smooth and immersive gameplay. The graphics are colorful and cartoonish, giving the game a cheerful and fun atmosphere.',
			'Tiny Turtle Tanks is easy to pick up and play, making it a great choice for casual gamers who are looking for a fun and engaging way to pass the time. Whether you are a seasoned gamer or a newcomer to the world of video games, you are sure to enjoy the exciting action of Tiny Turtle Tanks.',
		],
		img: tinyturtletankImg,
		github: 'https://github.com/joesobo/TinyTurtleTanks',
		demo: 'https://poleski.itch.io/tiny-turtle-tanks',
	},
	{
		title: 'Plant App',
		tech: ['React Native', 'Typescript'],
		description: [
			`Plant App is a small React Native app that helps you keep your plants healthy and happy. With Plant App, you can easily track which plants in your collection need watering or fertilizing, and receive notifications when it's time to take care of them.`,
			`To use Plant App, simply add your plants to the app and enter information about their care requirements, such as how often they need watering and fertilizing. The app will then use this information to remind you when it's time to take care of your plants.`,
			`Whether you are an experienced gardener or just starting out, Plant App is a handy tool that can help you keep your plants healthy and thriving.`,
		],
		img: plantImg,
		github: 'https://github.com/joesobo/PlantApp',
	},
	{
		title: 'Marching Squares v1.0',
		tech: ['C#', 'Compute Shaders', 'Unity'],
		description: [
			'Marching Squares v1.0 is a small Unity library for creating terrain based on the Marching Squares algorithm. It is a versatile and powerful tool that is well-suited to a wide range of game development projects.',
			'One of the key features of Marching Squares v1.0 is its use of compute shaders for GPU usage and multi-threading. This allows for fast and efficient generation of terrain, even in large and complex worlds.',
			'The library also includes an editor for quick block creation, making it easy to create and modify terrain in real-time. This editor allows users to select from a range of different block sizes, shapes, and types, allowing for a high degree of customization.',
			'In addition to its core features, the library also includes support for chunking and regions, allowing for the creation of infinite terrain. It also includes a full world serialization system for saving and loading worlds, making it easy to save and share your creations.',
			'Overall, Marching Squares v1.0 is a valuable tool for game developers who are looking to create realistic and detailed terrain using the Marching Squares algorithm. Its features and capabilities make it a valuable addition to any game developers toolkit.',
		],
		img: marchingsquaresImg,
		github: 'https://github.com/joesobo/Marching-Squares',
	},
	{
		title: 'Unity Extension Library',
		tech: ['C#', 'Unity'],
		description: [
			'A basic Unity extension library. It is collection of tools and features that can help make game development faster and more efficient. The library includes a variety of features, such as helper functions, utility classes, and editor extensions, that can help streamline common tasks and reduce the amount of time and effort required to implement them.',
		],
		img: unityImg,
		github: 'https://github.com/joesobo/Unity-Extension-Library',
	},
	{
		title: 'Procedural Voxel Tree Generator',
		tech: ['C#', 'Shaders', 'Unity'],
		description: [
			'TreeGen is a small tool that was created to assist in making custom trees for my game TinyTurtleTanks. It is based on the popular Space Colonization algorithm, and uses procedural generation to create realistic and detailed trees.',
			'One of the key features of TreeGen is its custom editor, which allows users to easily adjust a range of parameters to control the shape and appearance of the generated trees. This includes parameters such as branch thickness, leaf density, and overall tree size.',
			'In addition to its core generation capabilities, TreeGen also includes support for saving tree generation data as Scriptable Objects. This allows users to easily save and load tree generation settings, making it easy to experiment with different configurations and create a wide range of trees.',
		],
		img: treeImg,
		github: 'https://github.com/joesobo/ProceduralVoxelTree',
	},
]
